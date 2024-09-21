// intializing database connection
import postgres from 'postgres'
import dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.DATABASE_URL;
const sql = postgres(connectionString);
// const users = await sql`
// select * from "dummyData"
// `;
// console.log(users);
export default sql
