"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const postSchema = new Schema({
    _user: { type: Schema.Types.ObjectId, ref: 'users' },
    date: { type: Date, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    media: { type: String },
});
const Post = model('posts', postSchema);
exports.default = Post;
