import query from "../index.js";

const data = [
    {name: "bob"}, {name: "bill"}, {name: "bobby"}
]

async function populateTable() {
    for (let i=0; i<data.length; i++) {
        const sqlString = `INSERT INTO users (name) VALUES ('${data[i].name}') RETURNING *;`;
        const res = await query(sqlString);
        console.log("Populated table", res);
    }
}

populateTable();