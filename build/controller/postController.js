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
exports.paginateById = exports.paginate = exports.deletePost = exports.createPost = void 0;
const Post_1 = __importDefault(require("../models/Post"));
const fs_1 = __importDefault(require("fs"));
const User_1 = __importDefault(require("../models/User"));
function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.user;
        const file = req.file;
        const path = file === undefined ? "" : file.path;
        try {
            const newPost = yield Post_1.default.create({
                _user: user._id,
                date: req.body.date,
                title: req.body.title,
                body: req.body.body,
                media: path,
            });
            return res.status(200).json({ message: "Post Created", createdPost: newPost });
        }
        catch (error) {
            // console.log(error)
            return res.status(400).json({ message: "Something went wrong creating the post", error });
        }
    });
}
exports.createPost = createPost;
function deletePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const postToDelete = yield Post_1.default.findByIdAndDelete(id);
            if (postToDelete.media) {
                fs_1.default.unlink(`${postToDelete.media}`, (err => {
                    if (err)
                        console.log(err);
                    else {
                        console.log(`\nDeleted file: ${postToDelete.media}`);
                    }
                }));
            }
            return res.status(200).json({ message: "Post deleted", postToDelete: postToDelete });
        }
        catch (error) {
            // console.log(error)
            return res.status(400).json({ message: "Something went wrong creating the post", error });
        }
    });
}
exports.deletePost = deletePost;
const paginate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqUser = req.user;
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 10;
    const skipRows = (page - 1) * pageSize;
    try {
        const user = yield User_1.default.findById(reqUser._id);
        const following = user._following;
        let posts = [];
        posts = yield Post_1.default.find({ $or: [{ '_user': reqUser._id }, { '_user': { $in: following } }] }).sort({ date: -1 }).skip(skipRows).limit(pageSize);
        return res.status(200).json(posts);
    }
    catch (error) {
        return res.status(400).json({ message: "Error happened", error });
    }
});
exports.paginate = paginate;
const paginateById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const profileId = req.params.id;
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 10;
    const skipRows = (page - 1) * pageSize;
    try {
        let posts = [];
        posts = yield Post_1.default.find({ _user: profileId }).sort({ date: -1 }).skip(skipRows).limit(pageSize);
        return res.status(200).json(posts);
    }
    catch (error) {
        return res.status(400).json({ message: "Error happened", error });
    }
});
exports.paginateById = paginateById;
exports.default = { createPost, deletePost, paginate: exports.paginate, paginateById: exports.paginateById };
