import mongoose from 'mongoose';
const {Schema, model} = mongoose;


const userSchema = new Schema({
  registrationDate:{type:Date, required:true}, // default:Date.now
  username:{type:String, required:true},
  firstName:{type:String},
  lastName:{type:String},
  email:{type:String, required:true, unique: true},
  password:{type:String, required:true},
  avatar:{type:String},
  personalText:{type:String},
  bio: {type:String},
  location: {type:String},
  background: {type:String}
})


const User = model('users', userSchema);

export default User;

