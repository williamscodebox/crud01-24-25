import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.USER);
console.log(process.env.HOST);

const { Pool } = pkg;
const pool = new Pool ({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DBPORT,
});

pool.on("connect", () => {
    console.log("Connection pool establishhed with Database");
});

export default pool;