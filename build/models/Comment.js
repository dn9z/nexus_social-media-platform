"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const CommentSchema = new Schema({
    _user: { type: Schema.Types.ObjectId, ref: 'users' },
    _post: { type: Schema.Types.ObjectId, ref: 'posts' },
    date: { type: Date, default: Date.now(), required: true },
    body: { type: String, required: true },
});
const Comment = model('comment', CommentSchema);
exports.default = Comment;
