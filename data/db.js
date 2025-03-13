const mysql = require("mysql2")

const oggetto = {
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "posts"
}


const connection = mysql.createConnection(oggetto);

connection.connect ((err) => {
    if(err) throw err;
    console.log("connect to MySQL!");
})

module.exports = connection;