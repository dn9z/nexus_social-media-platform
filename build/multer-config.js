"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
exports.default = (0, multer_1.default)({
    dest: "./uploads",
    limits: { fileSize: 1000000 }, // 20000 bytes is 20kb
    //fileFilter // limit the type of files the user can upload
});
