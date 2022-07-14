import mongoose from 'mongoose';
const {Schema, model} = mongoose;


const CommentSchema = new Schema({
  _user:{type: Schema.Types.ObjectId, ref:'users'},
  _post:{type: Schema.Types.ObjectId, ref:'posts'},
  date:{type:Date, default:Date.now(),required:true},
  body:{type:String, required:true},
  
})


const Comment = model('comment', CommentSchema);

export default Comment;

