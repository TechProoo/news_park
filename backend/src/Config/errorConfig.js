"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpResponse = void 0;
var httpResponse = function (status, message, data, res) {
    return res.status(status).json({
        message: message,
        data: data,
    });
};
exports.httpResponse = httpResponse;
