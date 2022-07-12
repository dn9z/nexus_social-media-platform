import * as mongoose from "mongoose";
import Message, {messageSchema} from "./Message"




const Schema = mongoose.Schema;
const model = mongoose.model;

export const conversationSchema = new Schema({
    
    participants: { 
        _userFrom: {type: Schema.Types.ObjectId, required: true,ref: 'users' },
        _userTo: {type: Schema.Types.ObjectId, required: true, ref: 'users' },
     },
    
    date: { type: Date, default: Date.now(), required: true },
   
    
},{ collection: 'conversations'});
const Conversation = model("conversations", conversationSchema)


export default Conversation;

/* participants:from, to */