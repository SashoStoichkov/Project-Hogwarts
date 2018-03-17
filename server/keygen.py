import sqlite3

conn = sqlite3.connect('database.db')
c = conn.cursor()

c.execute('insert into keys (key) values (?)', (input("Key: "), ))

conn.commit()
conn.close()