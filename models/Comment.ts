import mongoose from 'mongoose';
const {Schema, model} = mongoose;


const CommentSchema = new Schema({
  // _user:{type: Schema.Types.ObjectId, ref:'users'},
  date:{type:Date, default:Date.now(),required:true},
  user_id:{type:Schema.Types.ObjectId, ref:'users'},
  post_id:{type:Schema.Types.ObjectId,ref:'posts'},
  body:{type:String, required:true},
  
})


const Comment = model('comment', CommentSchema);

export default Comment;

