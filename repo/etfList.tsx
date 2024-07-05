import { sql } from '@vercel/postgres';

type DataItem = {
    stock_no: string;
    price: string;
    y_price: string;
    volume: string;
    type: 'tw' | 'asia' | 'global' | 'us';
    name: string;
    estimate_value: string;
    y_estimate_value: string;
    value_diff: string;
    update_time: string;
};
export default async function get_etf_list() {
    try {
        const dbName = 'etf_dev'
        const sqlQuery = `SELECT * FROM ${dbName}`
        const result = await sql.query(sqlQuery);
        if (result.rows.length === 0) {
            return null;
        }
        const jsonData = JSON.stringify(result.rows);
        const parsedData: DataItem[] = JSON.parse(jsonData);

        return parsedData;
    } catch (error) {
        return null;
    }
}