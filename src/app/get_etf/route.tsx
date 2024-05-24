import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const db_name = 'etf_dev';
        const sqlQuery = `SELECT * FROM ${db_name}`;

        const result = await sql.query(sqlQuery);
        console.log(result);

        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

}