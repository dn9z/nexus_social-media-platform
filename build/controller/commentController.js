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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.getCommentsByPostId = exports.createComment = void 0;
const Comment_1 = __importDefault(require("../models/Comment"));
function createComment(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.user;
        try {
            const newComment = yield Comment_1.default.create({
                // switch to passport user later
                _user: user._id,
                _post: req.body._post,
                date: req.body.date,
                body: req.body.body,
            });
            return res.status(200).json({ message: "Comment Created", createdComment: newComment });
        }
        catch (error) {
            return res.status(400).json({ message: "Something went wrong creating the comment", error });
        }
    });
}
exports.createComment = createComment;
function getCommentsByPostId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const listComments = yield Comment_1.default.find({ _post: req.params._post }).sort({ date: -1 });
            return res.status(200).json({ message: "List comments", listComments: listComments });
        }
        catch (error) {
            return res.status(400).json({ message: "Something went wrong fetching the list", error });
        }
    });
}
exports.getCommentsByPostId = getCommentsByPostId;
function deleteComment(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params._id;
        try {
            const commentToDelete = yield Comment_1.default.findByIdAndDelete(id);
            return res.status(200).json({ message: "Post deleted", commentToDelete: commentToDelete });
        }
        catch (error) {
            // console.log(error)
            return res.status(400).json({ message: "Something went wrong creating the post", error });
        }
    });
}
exports.deleteComment = deleteComment;
exports.default = { createComment, deleteComment, getCommentsByPostId };
