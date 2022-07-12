import express from "express";
import passport from 'passport'
import commentController from "../controller/commentController";

const router = express.Router();

router.use(passport.authenticate("jwt", { session: false }));

router.get("/list/:_post", commentController.getCommentsByPostId)

router.post("/create", commentController.createComment);

router.delete("/delete/:_id", commentController.deleteComment);

export default router