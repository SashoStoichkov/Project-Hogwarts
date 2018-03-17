from flask import Flask, render_template, request, jsonify, redirect
from flask_cors import CORS
from flask_socketio import SocketIO, emit

from dotmap import DotMap

from passlib.hash import sha256_crypt as sha256

import sqlite3

from functools import wraps

import os
import json

app = Flask(__name__)
io = SocketIO(app)
CORS(app)

conn, c = None, None

def dict_factory(cursor, row): 
    d = {} 
    for idx, col in enumerate(cursor.description): 
        d[col[0]] = row[idx] 
    return d 

def db(f):
    @wraps(f)
    def wrap(*a, **kw):
        global c, conn
        conn = sqlite3.connect('database.db')
        conn.row_factory = dict_factory
        c = conn.cursor()

        rv = f(*a, **kw)

        conn.close()
        return rv
    
    return wrap


def get_folder_structure(dir_name):
    with os.scandir(dir_name) as dir:
        retval = {}
        for entry in dir:
            if entry.is_file():
                retval[entry.name] = {}
                retval[entry.name]['type'] = 'file'
                retval[entry.name]['path'] = "{0}/{1}".format(dir_name, entry.name)
            else:
                retval[entry.name] = {}
                retval[entry.name]['type'] = 'folder'
                retval[entry.name]['content'] = get_folder_structure('{0}/{1}'.format(dir_name, entry.name))
                retval[entry.name]['path'] = '{0}/{1}'.format(dir_name, entry.name)

        return retval

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
@db
def login():
    uname = request.form['uname']
    passwd = request.form['passwd']
    
    c.execute('select passwd from users where uname = ?', (uname, ))

    res = c.fetchone()

    if res == None:
        return jsonify(code="2", error="User not regitered")

    res = DotMap(res)

    if not sha256.verify(passwd, res.passwd):
        return jsonify(code="3", error="Invalid Password")

    return jsonify(code="1")

@app.route('/register', methods=["POST"])
@db
def register():
    uname = request.form['uname']
    passwd = request.form['passwd']
    key = request.form['key']

    c.execute('select key from keys where key = ?', (key, ))

    res = c.fetchone()

    if res == None:
        return jsonify(code="2", error="Invalid key")
    
    c.execute('select uname from users where uname = ?', (uname, ))
    res = c.fetchone()

    if res != None:
        return jsonify(code="3", error="Username taken")
    
    c.execute('insert into users (uname, passwd) values (?, ?)', (
        uname,
        sha256.encrypt(passwd)
    ))

    conn.commit()

    return jsonify(code="1")

@app.route('/add_key', methods=["POST"])
@db
def add_key():
    key = request.form['key']

    c.execute('insert into keys (key) values (?)', (key, ))

    conn.commit()

    return redirect('/')

@app.route('/get_filesystem', methods=['POST'])
def get_filesystem():
    tree = get_folder_structure('./project')

    retval = {
        'code': '1',
        'tree': tree
    }

    return jsonify(retval)

@app.route('/get_file_content', methods=["POST"])
def get_file_content():
    path = request.form['path']
    rv = {
        'code': '1'
    }
    if './' not in path:
        pass
    with open(path) as f:
        rv['data'] = f.read()
    
    return jsonify(rv)

@io.on('update', namespace="/edit")
def update_code(data):
    filename = data['file']
    code = data['code']

    rv = {
        'code': code,
        'file': filename
    }

    with open('./' + filename, 'w') as f:
        f.write(code)
    
    emit('update', rv, broadcast=True)

if __name__ == "__main__":
    io.run(app, debug=True, host="0.0.0.0")