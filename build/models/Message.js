"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageSchema = void 0;
const mongoose = __importStar(require("mongoose"));
const Schema = mongoose.Schema;
const model = mongoose.model;
exports.messageSchema = new Schema({
    /*  _user:{type: Schema.Types.ObjectId, ref:'users'}, */
    participants: {
        _userFrom: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
        _userTo: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
    },
    /* image: { type: String, required: true }, */
    text: { type: String, required: true },
    _conversation: { type: Schema.Types.ObjectId, required: true },
    date: { type: Date, default: Date.now(), required: true }
});
const Message = model("messages", exports.messageSchema);
exports.default = Message;
