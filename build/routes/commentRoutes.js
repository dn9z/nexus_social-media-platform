"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const commentController_1 = __importDefault(require("../controller/commentController"));
const router = express_1.default.Router();
router.use(passport_1.default.authenticate("jwt", { session: false }));
router.get("/list/:_post", commentController_1.default.getCommentsByPostId);
router.post("/create", commentController_1.default.createComment);
router.delete("/delete/:_id", commentController_1.default.deleteComment);
exports.default = router;
