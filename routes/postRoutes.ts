import express from "express";
import passport from 'passport'
import postController from "../controller/postController";

const router = express.Router();

router.use(passport.authenticate("jwt", { session: false }));

router.post("/create", postController.createPost);

export default router