"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var errorConfig_1 = require("../Config/errorConfig");
var errorHandler = function (err, req, res, next) {
    console.error(err.message);
    (0, errorConfig_1.httpResponse)(500, "Internal Server Message", null, res);
};
exports.errorHandler = errorHandler;
