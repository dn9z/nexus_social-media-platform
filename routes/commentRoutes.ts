import express from "express";
import passport from 'passport'
import commentController from "../controller/commentController";

const router = express.Router();

router.get("list/:post_id", commentController.getCommentsByPostId)

router.post("/create", commentController.createComment);

export default router