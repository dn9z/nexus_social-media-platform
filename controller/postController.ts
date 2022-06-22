import express, {Request, Response} from 'express'
import Post from '../models/Post';

export async function createPost(req:Request,res:Response){
  console.log('test')
  try {
    const newPost = await Post.create({
      // _user: req.user._id,
      date:req.body.date,
      title:req.body.title,
      body:req.body.body,
      media:req.body.media,
    })

    return res.status(200).json({ message: "Post Created", createdPost: newPost });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong creating the post", error });
  }
}


export default { createPost };
