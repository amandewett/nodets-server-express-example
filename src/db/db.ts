import mysql, { Pool } from "mysql2";
const mysqlPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
}).promise();

export default mysqlPool;
