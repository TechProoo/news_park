"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var dotenv_1 = require("dotenv");
var env_1 = require("./env");
dotenv_1.default.config();
var client = new pg_1.Client({
    user: env_1.ENV.DB_CONNECTION,
    host: env_1.ENV.DB_HOST,
    database: env_1.ENV.DB_DATABASE,
    password: env_1.ENV.DB_PASSWORD,
    port: 5432,
});
client
    .connect()
    .then(function () {
    console.log("You have connected successfully, boss");
})
    .catch(function (err) {
    console.error(err);
});
exports.default = client;
