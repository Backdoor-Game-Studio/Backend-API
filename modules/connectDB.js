const mysql = require('promise-mysql');
const env = require("dotenv").config();

const db = mysql.createConnection({

    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME

});

const connect = async () => {

    console.log("Creating connection to MySQL service...");

    try {

        let getDb = await db;
        console.log("Successfully connected MySQL service, try connecting to database...");
        return getDb;

    } catch (error) {

        console.error(`\n[mysql-createConnection-error]:\n${error}\nstay alive mode is on!\n`);
        setTimeout(connect, 5000);

    }
}

module.exports = {connect};