import express from "express";
import * as messageControllers from "../controller/messageController";
import passport from "passport";



const router = express.Router();

router.use(passport.authenticate("jwt", { session: false }));

router.get("/users", messageControllers.getAllUsers)

router.get("/users/:id", messageControllers.getUserById)

router.post("/", messageControllers.sendMessage)

router.post("/conversation", messageControllers.createConversation)

/* router.get("/conversation", messageControllers.getConversation) */

router.get("/conversations", messageControllers.getConversations)

router.get("/conversation/:_conversation", messageControllers.getConversationById)

router.get("/myconversations", messageControllers.getConversationOfLoggedUser )

/* router.get("/myconversations/users", messageControllers.getTwoUsernames ) */
/* router.put("/", messageControllers.updateConversation) */

export default router