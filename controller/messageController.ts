import express, { Request, Response } from "express";
import * as Types from "../types";
import * as mongoose from "mongoose"
import Message from "../models/Message";
import User from "../models/User";
import Conversation from "../models/Conversation";
import { UserType } from "../types"
import * as mongo from "mongodb";

/**
 * controller function to get all users
 * @param req 
 * @param res 
 * @returns 
 */

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({

    });
    return res
      .status(200)
      .json({ message: "Users found", foundUsers: users });


  } catch (error) {
    return res
      .status(400)
      .json({ message: "Something went wrong searching the users", error });
  }
}

  export const getUserById = async (req: Request, res: Response) => {
  
  try {
    const users = await User.findById({ _id: req.params.id })
    return res
      .status(200)
      .json({ message: "Users found", foundUsers: users });


  } catch (error) {
    return res
      .status(400)
      .json({ message: "Something went wrong searching the users", error });
  }
}


/**
 * controller function to get logged-in users' conversations
 * @param req user as User
 * @param res 
 * @returns found conversations
 */

export const getConversationOfLoggedUser = async (req: Request, res: Response) => {
  const user = req.user as UserType;

 

  try {
    const conversations = await Conversation.find({ $or: [{ 'participants._userFrom': user._id }, { 'participants._userTo': user._id }] })
    return res
      .status(200)
      .json({ message: "Conversations found", foundConversations: conversations });

    /*  return res.status(200).json({ message: "Message Created", foundMessages: messages }); */
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Something went wrong searching the conversations", error });
  }
};


/**
 * controller function to get all conversations
 * @param req 
 * @param res 
 * @returns array of objects
 */
export const getConversations = async (req: Request, res: Response) => {
  try {
    const conversations = await Conversation.find({});
    return res
      .status(200)
      .json({ message: "Conversation found", foundConversations: conversations });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Something went wrong searching the messages", error });
  }
};
/**
 * controller function to get specific conversation by id
 * @param req _conversation id
 * @param res 
 * @returns array of objects
 */

export const getConversationById = async (req: Request, res: Response) => {
  console.log(req.params._conversation)
  try {
    const conversation = await Message.find({
      _conversation: req.params._conversation
    });
    return res
      .status(200)
      .json({ message: "Conversation found", foundMessages: conversation });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Something went wrong searching the messages", error });
  }
};

/**
 * controller function to create new message
 * @param req participants, message, conversation-id, date
 * @param res 
 * @returns array of objects
 */
export const sendMessage = async (req: Request, res: Response) => {
  const conversationObjectId = new mongo.ObjectId(req.body._conversation);
  try {
    const newMessage = await Message.create({
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
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Something went wrong creating the message", error });
  }
};

/**
 * controller function to create new conversation
 * @param req participants, date
 * @param res 
 * @returns array of objects
 */

export const createConversation = async (req: Request, res: Response) => {


  try {
    const newConversation = await Conversation.create({
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
  } catch (error) {
    return res
      .status(400)
      .json({
        message: "Something went wrong creating the conversation",
        error,
      });
  }
};
