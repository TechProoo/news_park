"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signUp = void 0;
var errorConfig_1 = require("../Config/errorConfig");
var dbConnection_1 = require("../Config/dbConnection");
var bcryptjs_1 = require("bcryptjs");
var jsonwebtoken_1 = require("jsonwebtoken");
var env_1 = require("../Config/env");
var signUp = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, email, password, existingUser, hashed, newUser, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, username = _a.username, email = _a.email, password = _a.password;
                console.log("Sign-up request body:", req.body); // Debugging line
                if (!username || !email || !password) {
                    return [2 /*return*/, res.status(400).json({ message: "All fields are required" })];
                }
                return [4 /*yield*/, dbConnection_1.default.query("SELECT * FROM users WHERE email = $1", [email])];
            case 1:
                existingUser = _b.sent();
                if (existingUser.rows.length > 0) {
                    return [2 /*return*/, (0, errorConfig_1.httpResponse)(400, "User already exists", null, res)];
                }
                return [4 /*yield*/, bcryptjs_1.default.hash(password, 10)];
            case 2:
                hashed = _b.sent();
                return [4 /*yield*/, dbConnection_1.default.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *", [username, email, hashed])];
            case 3:
                newUser = _b.sent();
                return [2 /*return*/, (0, errorConfig_1.httpResponse)(201, "User created successfully", { user: newUser.rows[0] }, res)];
            case 4:
                err_1 = _b.sent();
                console.error("Sign-up error:", err_1);
                return [2 /*return*/, (0, errorConfig_1.httpResponse)(500, "Error creating user", null, res)];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.signUp = signUp;
var login = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, hashedPassword, isPasswordValid, token, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, dbConnection_1.default.query("SELECT * FROM users WHERE email = $1", [
                        email,
                    ])];
            case 2:
                user = _b.sent();
                if (user.rows.length === 0) {
                    return [2 /*return*/, (0, errorConfig_1.httpResponse)(400, "User not found", null, res)];
                }
                hashedPassword = user.rows[0].password;
                return [4 /*yield*/, bcryptjs_1.default.compare(password, hashedPassword)];
            case 3:
                isPasswordValid = _b.sent();
                if (!isPasswordValid) {
                    return [2 /*return*/, (0, errorConfig_1.httpResponse)(400, "Incorrect Password", null, res)];
                }
                if (!env_1.ENV.JWT_SECRET) {
                    console.error("JWT_SECRET is not defined");
                    return [2 /*return*/, (0, errorConfig_1.httpResponse)(500, "Internal Server Error", null, res)];
                }
                token = jsonwebtoken_1.default.sign({ id: user.rows[0].id, email: user.rows[0].email, username: user.rows[0].username }, env_1.ENV.JWT_SECRET, { expiresIn: "1h" });
                return [2 /*return*/, (0, errorConfig_1.httpResponse)(200, "Login successful", { token: token, user: user.rows[0] }, res)];
            case 4:
                error_1 = _b.sent();
                console.error("Login error:", error_1);
                next(error_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
