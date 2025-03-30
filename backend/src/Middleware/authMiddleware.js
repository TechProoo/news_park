"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
var errorConfig_1 = require("../Config/errorConfig");
var jsonwebtoken_1 = require("jsonwebtoken");
var env_1 = require("../Config/env");
var authenticate = function (req, res, next) {
    var _a;
    var token = (_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        (0, errorConfig_1.httpResponse)(400, "Token not provided", null, res);
        return;
    }
    try {
        var decoded = jsonwebtoken_1.default.verify(token, env_1.ENV.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        (0, errorConfig_1.httpResponse)(403, "Invalid token", error, res);
    }
};
exports.authenticate = authenticate;
