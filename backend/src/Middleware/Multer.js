"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
var multer_1 = require("multer");
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, "".concat(Date.now(), "-").concat(file.originalname));
    },
});
exports.upload = (0, multer_1.default)({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 },
});
