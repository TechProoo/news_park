import { Client } from "pg";
import dotenv from "dotenv";
import { ENV } from "./env";

dotenv.config();

const client = new Client({
  user: ENV.DB_USERNAME,
  host: ENV.DB_HOST,
  database: ENV.DB_DATABASE,
  password: ENV.DB_PASSWORD,
  port: 5432,
});

client
  .connect()
  .then(() => {
    console.log("You have connected successfully, boss");
  })
  .catch((err) => {
    console.error(err);
  });

export default client;
