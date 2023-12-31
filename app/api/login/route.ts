import { db } from "@/db";
import { redirect } from 'next/navigation'
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await db.initialize();
        const connection = db.getConnection();

        const formData = await req.formData();
        const username = formData.get("username")
        const password = formData.get("password")

        let query = (await connection.query(`SELECT * FROM accounts WHERE username="${username}" AND password="${password}"`))[0];
        // return NextResponse.json(query);
        redirect('/dashboard')
    } catch (error) {
        console.error('Error connecting to MySQL database:', error);
    }
}