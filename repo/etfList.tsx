import { sql } from "@vercel/postgres";
import { DataItem } from "../src/app/types";

export default async function get_etf_list() {
  try {
    const dbName = "etf_dev";
    const sqlQuery = `SELECT * FROM ${dbName}`;
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
