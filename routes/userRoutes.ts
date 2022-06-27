import express from "express";
import passport from "passport";
import userController from "../controller/userController";

const router = express.Router();

router.get("/test", userController.test);

router.post("/login", userController.login);

router.post("/register", userController.register);

router.get("/logout", userController.logout);

router.use(passport.authenticate("jwt", { session: false }));

export default router;