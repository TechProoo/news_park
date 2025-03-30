"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = void 0;
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
exports.ENV = {
    PORT: Number(process.env.PORT) || 5000,
    DB_CONNECTION: process.env.DB_CONNECTION,
    DB_HOST: process.env.DB_HOST,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    JWT_SECRET: process.env.JWT_SECRET || "tech_newspark", // Add a default fallback
    NODE_ENV: process.env.NODE_ENV ||
        "development",
};
