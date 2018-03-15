import MySQLdb
import MySQLdb.cursors

def connect():
    conn = MySQLdb.connect(
        user="root",
        passwd="",
        db="codeit",
        host="localhost"
    )

    conn.set_character_set('utf8')

    c = conn.cursor()
    dict_c = conn.cursor(MySQLdb.cursors.DictCursor)

    return c, dict_c, conn