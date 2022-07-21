"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const userSchema = new Schema({
    registrationDate: { type: Date, required: true },
    username: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    personalText: { type: String },
    bio: { type: String },
    location: { type: String },
    background: { type: String },
    _following: { type: [{ type: Schema.Types.ObjectId, ref: 'users' }] }
});
const User = model('users', userSchema);
exports.default = User;
