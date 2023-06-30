import mysql, { Connection } from 'mysql2/promise';

export const db = {
    connection: null as Connection | null,
    initialize,
    getConnection
};

async function initialize() {

    if (!db.connection) {
        db.connection = await mysql.createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            password: "",
            database: "spp_kartono"
        });

    } 
}


function getConnection() {
    if (db.connection) {
        return db.connection;
    } else {
        throw new Error('Connection not initialized. Call initialize() first.');
    }
}