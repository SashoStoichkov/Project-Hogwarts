from flask import Flask, render_template

from dbconnect import connect
from MySQLdb import escape_string as es

from passlib.hash import sha256_crypt as sha256

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True, port=8000)
