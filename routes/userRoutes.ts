import express from "express";
import passport from 'passport'
import userController from "../controller/userController";


const router = express.Router();

router.get("/logout", userController.test);

export default router