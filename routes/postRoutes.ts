import express from "express";
import passport from 'passport'
import postController from "../controller/postController";
import upload from '../multer-config'

const router = express.Router();

router.use(passport.authenticate("jwt", { session: false }));

router.post("/create",upload.single("media"), postController.createPost);

router.delete("/delete/:id", postController.deletePost);

router.get("/paginate", postController.paginate);

export default router