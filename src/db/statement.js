const db = require('better-sqlite3') ('database.db')

const createTable = () =>{
    const sql = `
        CREATE TABLE users  (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            imc REAL
        )
    `
    db.prepare(sql).run()

}

const insertTable = (name, imc) =>{
    const sql = ` 
        INSERT INTO users (name, imc)
        VALUES (?, ?)
    `
    db.prepare(sql).run(name, imc)
} 

insertTable("JEFF", 28.3)   