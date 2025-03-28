import dotenv from "dotenv";

dotenv.config();

interface EnvConfig {
  PORT: number;
  DB_CONNECTION: string;
  DB_HOST: string;
  DB_DATABASE: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  JWT_SECRET: string;
  NODE_ENV: "development" | "production" | "test";
}

export const ENV: EnvConfig = {
  PORT: Number(process.env.PORT) || 5000,
  DB_CONNECTION: process.env.DB_CONNECTION as string,
  DB_HOST: process.env.DB_HOST as string,
  DB_DATABASE: process.env.DB_DATABASE as string,
  DB_USERNAME: process.env.DB_USERNAME as string,
  DB_PASSWORD: process.env.DB_PASSWORD as string,
  JWT_SECRET: process.env.JWT_SECRET as string,
  NODE_ENV:
    (process.env.NODE_ENV as "development" | "production" | "test") ||
    "development",
};

