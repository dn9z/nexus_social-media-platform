import * as mongoose from "mongoose";
import Realm from "realm"


const Schema = mongoose.Schema;
const model = mongoose.model;

export const messageSchema = new Schema({
    
    /*  _user:{type: Schema.Types.ObjectId, ref:'users'}, */
     participants: { 
        _userFrom: {type: Schema.Types.ObjectId, required: true, ref: 'users' },
        _userTo: {type: Schema.Types.ObjectId, required: true, ref: 'users' },
     },
    /* image: { type: String, required: true }, */
    text: { type: String, required: true },
    _conversation: {type: Schema.Types.ObjectId, required: true },
    date: { type: Date, default: Date.now(), required: true }
});
const Message = model("messages", messageSchema)


export default Message;