import * as dotenv from "dotenv";

dotenv.config();

const { DB_URL, PORT, SECRET_TOKEN } = process.env;

export { DB_URL, PORT, SECRET_TOKEN };