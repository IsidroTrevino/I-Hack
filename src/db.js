import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Itrevino1212',
    port: 3306,
    database: 'qualtia',
});