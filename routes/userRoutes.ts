import express from "express";
import passport from "passport";
import userController from "../controller/userController";

const router = express.Router();

router.get("/test", userController.test);

router.post("/login", userController.login);

router.post("/register", userController.register);

router.get("/logout", userController.logout);

router.use(passport.authenticate("jwt", { session: false }));

router.get("/getuserbyid/:id", userController.getUserById);

export default router;