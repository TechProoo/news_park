"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("./Routes/index");
var errorMiddleware_1 = require("./Middleware/errorMiddleware");
var logger_1 = require("./Middleware/logger");
var cors_1 = require("cors");
var app = (0, express_1.default)();
var port = 5000;
app.use("/uploads", express_1.default.static("uploads"));
// MIDDLEWARE
app.use((0, cors_1.default)({ origin: "http://localhost:8080", credentials: true }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(logger_1.logger);
app.use("/api", index_1.default);
app.use(errorMiddleware_1.errorHandler);
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
