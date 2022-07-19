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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConversation = exports.sendMessage = exports.getConversationById = exports.getConversations = exports.getConversationOfLoggedUser = exports.getUserById = exports.getAllUsers = void 0;
const Message_1 = __importDefault(require("../models/Message"));
const User_1 = __importDefault(require("../models/User"));
const Conversation_1 = __importDefault(require("../models/Conversation"));
const mongo = __importStar(require("mongodb"));
/**
 * controller function to get all users
 * @param req
 * @param res
 * @returns
 */
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.find({});
        return res
            .status(200)
            .json({ message: "Users found", foundUsers: users });
    }
    catch (error) {
        return res
            .status(400)
            .json({ message: "Something went wrong searching the users", error });
    }
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.findById({ _id: req.params.id });
        return res
            .status(200)
            .json({ message: "Users found", foundUsers: users });
    }
    catch (error) {
        return res
            .status(400)
            .json({ message: "Something went wrong searching the users", error });
    }
});
exports.getUserById = getUserById;
/**
 * controller function to get logged-in users' conversations
 * @param req user as User
 * @param res
 * @returns found conversations
 */
const getConversationOfLoggedUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    try {
        const conversations = yield Conversation_1.default.find({ $or: [{ 'participants._userFrom': user._id }, { 'participants._userTo': user._id }] });
        return res
            .status(200)
            .json({ message: "Conversations found", foundConversations: conversations });
        /*  return res.status(200).json({ message: "Message Created", foundMessages: messages }); */
    }
    catch (error) {
        return res
            .status(400)
            .json({ message: "Something went wrong searching the conversations", error });
    }
});
exports.getConversationOfLoggedUser = getConversationOfLoggedUser;
/**
 * controller function to get all conversations
 * @param req
 * @param res
 * @returns array of objects
 */
const getConversations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conversations = yield Conversation_1.default.find({});
        return res
            .status(200)
            .json({ message: "Conversation found", foundConversations: conversations });
    }
    catch (error) {
        return res
            .status(400)
            .json({ message: "Something went wrong searching the messages", error });
    }
});
exports.getConversations = getConversations;
/**
 * controller function to get specific conversation by id
 * @param req _conversation id
 * @param res
 * @returns array of objects
 */
const getConversationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params._conversation);
    try {
        const conversation = yield Message_1.default.find({
            _conversation: req.params._conversation
        });
        return res
            .status(200)
            .json({ message: "Conversation found", foundMessages: conversation });
    }
    catch (error) {
        return res
            .status(400)
            .json({ message: "Something went wrong searching the messages", error });
    }
});
exports.getConversationById = getConversationById;
/**
 * controller function to create new message
 * @param req participants, message, conversation-id, date
 * @param res
 * @returns array of objects
 */
const sendMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const conversationObjectId = new mongo.ObjectId(req.body._conversation);
    try {
        const newMessage = yield Message_1.default.create({
            participants: {
                _userFrom: req.body._userFrom,
                _userTo: req.body._userTo,
            },
            /* image: { type: String, required: true }, */
            text: req.body.text,
            _conversation: conversationObjectId,
            date: req.body.date
        });
        return res
            .status(200)
            .json({ message: "Message Created", createdMessage: newMessage });
    }
    catch (error) {
        return res
            .status(400)
            .json({ message: "Something went wrong creating the message", error });
    }
});
exports.sendMessage = sendMessage;
/**
 * controller function to create new conversation
 * @param req participants, date
 * @param res
 * @returns array of objects
 */
const createConversation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newConversation = yield Conversation_1.default.create({
            participants: {
                _userFrom: req.body._userFrom,
                _userTo: req.body._userTo,
            },
            date: req.body.date,
        });
        return res
            .status(200)
            .json({
            message: "Conversation Created",
            createdConversation: newConversation,
        });
    }
    catch (error) {
        return res
            .status(400)
            .json({
            message: "Something went wrong creating the conversation",
            error,
        });
    }
});
exports.createConversation = createConversation;
