import mongoose from 'mongoose';
const {Schema, model} = mongoose;


const postSchema = new Schema({
  // _user:{type: Schema.Types.ObjectId, ref:'users'},
  date:{type:Date, required:true},
  title:{type:String, required:true},
  body:{type:String, required:true},
  media:{type:String},
})


const Post = model('posts', postSchema);

export default Post;

