
import { ObjectId } from "mongoose";


export type UserType = {
  _id: string;
  username: string;
  email: string;
};


export type Message = {
  _user: ObjectId;
  username: string;
  text: string;
};

