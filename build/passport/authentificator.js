"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/**
 * Generates the token based on a user.
 * @param {*} user
 */
const generateToken = (user) => {
    const payload = { sub: user._id };
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" }, (err, token) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(token);
        });
    });
};
exports.default = generateToken;
