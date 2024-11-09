const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('oralyticsApp.db');

db.serialize(() => {

    db.run(`CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT UNIQUE NULL,
            dataNasc DATE NOT NULL,
            numCard TEXT UNIQUE,
            password TEXT NOT NULL
        )`
    )}
);

module.exports = db;