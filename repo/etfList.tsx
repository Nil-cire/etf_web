import { sql } from '@vercel/postgres';

export async function get_etf_list() {
    try {
        const dbName = 'etf_dev'
        const sqlQuery = `SELECT * FROM ${dbName}`
        const result = await sql.query(sqlQuery);
        const jsonString = JSON.stringify(result.rows)
        return jsonString;
    } catch (error) {
        return null;
    }
}