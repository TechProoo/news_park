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
exports.deletePost = exports.getPosts = exports.getAllPosts = exports.postBlog = void 0;
var errorConfig_1 = require("../Config/errorConfig");
var dbConnection_1 = require("../Config/dbConnection");
var postBlog = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var filePath, _a, user_id, title, description, category, tags, content, author, authorEmail, result, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                if (!req.file) {
                    return [2 /*return*/, (0, errorConfig_1.httpResponse)(400, "No file was found", null, res)];
                }
                filePath = "/uploads/".concat(req.file.filename);
                _a = req.body, user_id = _a.user_id, title = _a.title, description = _a.description, category = _a.category, tags = _a.tags, content = _a.content, author = _a.author, authorEmail = _a.authorEmail;
                if (!user_id) {
                    return [2 /*return*/, (0, errorConfig_1.httpResponse)(400, "User ID is required", null, res)];
                }
                return [4 /*yield*/, dbConnection_1.default.query("INSERT INTO posts (user_id, title, description, image, category, tags, content, author, authorEmail) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *", [
                        user_id,
                        title,
                        description,
                        filePath,
                        category,
                        tags,
                        content,
                        author,
                        authorEmail,
                    ])];
            case 1:
                result = _b.sent();
                if (result.rows.length === 0) {
                    return [2 /*return*/, (0, errorConfig_1.httpResponse)(500, "Failed to insert post", null, res)];
                }
                return [2 /*return*/, (0, errorConfig_1.httpResponse)(201, "Post created successfully", result.rows[0], res)];
            case 2:
                error_1 = _b.sent();
                console.log("Error posting blog:", error_1);
                return [2 /*return*/, (0, errorConfig_1.httpResponse)(500, "Internal server error", null, res)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.postBlog = postBlog;
var getAllPosts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var posts, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, dbConnection_1.default.query("SELECT * FROM posts")];
            case 1:
                posts = _a.sent();
                if (posts.rows.length === 0) {
                    return [2 /*return*/, (0, errorConfig_1.httpResponse)(404, "No posts found", null, res)];
                }
                return [2 /*return*/, (0, errorConfig_1.httpResponse)(200, "Posts retrieved successfully", posts.rows, res)];
            case 2:
                error_2 = _a.sent();
                console.error("Error retrieving posts:", error_2);
                return [2 /*return*/, (0, errorConfig_1.httpResponse)(500, "Internal server error", null, res)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllPosts = getAllPosts;
var getPosts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                if (!id) {
                    return [2 /*return*/, (0, errorConfig_1.httpResponse)(400, "User ID is required", null, res)];
                }
                return [4 /*yield*/, dbConnection_1.default.query("SELECT * FROM posts WHERE user_id = $1", [id])];
            case 1:
                result = _a.sent();
                if (result.rows.length === 0) {
                    return [2 /*return*/, (0, errorConfig_1.httpResponse)(404, "No posts found for this user", null, res)];
                }
                return [2 /*return*/, (0, errorConfig_1.httpResponse)(200, "Posts retrieved successfully", result.rows, res)];
            case 2:
                error_3 = _a.sent();
                console.error("Error retrieving posts:", error_3);
                return [2 /*return*/, (0, errorConfig_1.httpResponse)(500, "Internal server error", null, res)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getPosts = getPosts;
var deletePost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                if (!id) {
                    return [2 /*return*/, (0, errorConfig_1.httpResponse)(400, "Post ID is required", null, res)];
                }
                return [4 /*yield*/, dbConnection_1.default.query("DELETE FROM posts WHERE id = $1 RETURNING *", [id])];
            case 1:
                result = _a.sent();
                if (result.rows.length === 0) {
                    return [2 /*return*/, (0, errorConfig_1.httpResponse)(404, "Post not found", null, res)];
                }
                return [2 /*return*/, (0, errorConfig_1.httpResponse)(200, "Post deleted successfully", result.rows[0], res)];
            case 2:
                error_4 = _a.sent();
                console.error("Error deleting post:", error_4);
                return [2 /*return*/, (0, errorConfig_1.httpResponse)(500, "Internal server error", null, res)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deletePost = deletePost;
