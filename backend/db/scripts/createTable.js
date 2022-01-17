import query from "../index.js";

function createTable() {
    const sqlString = `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name TEXT);`;
    query(sqlString);
}

createTable();