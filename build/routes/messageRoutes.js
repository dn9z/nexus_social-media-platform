"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messageControllers = __importStar(require("../controller/messageController"));
const passport_1 = __importDefault(require("passport"));
const router = express_1.default.Router();
router.use(passport_1.default.authenticate("jwt", { session: false }));
router.get("/users", messageControllers.getAllUsers);
router.get("/users/:id", messageControllers.getUserById);
router.post("/", messageControllers.sendMessage);
router.post("/conversation", messageControllers.createConversation);
/* router.get("/conversation", messageControllers.getConversation) */
router.get("/conversations", messageControllers.getConversations);
router.get("/conversation/:_conversation", messageControllers.getConversationById);
router.get("/myconversations", messageControllers.getConversationOfLoggedUser);
/* router.get("/myconversations/users", messageControllers.getTwoUsernames ) */
/* router.put("/", messageControllers.updateConversation) */
exports.default = router;
