import { db } from "@/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await db.initialize();
        const connection = db.getConnection();
        let query = (await connection.query("SELECT * FROM accounts"))[0];
        return NextResponse.json(query);
    } catch (error) {
        console.error('Error connecting to MySQL database:', error);
    } finally {
        if (db.connection) {
            await db.connection.end();
        }
    } 
}