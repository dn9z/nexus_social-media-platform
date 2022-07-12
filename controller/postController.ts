import express, { Request, Response } from "express";
import Post from "../models/Post";

import { UserType } from "../types";

import fs from 'fs'

export async function createPost(req: Request, res: Response) {
  const user = req.user as UserType;
  const file = req.file as Express.Multer.File;

  const path = file === undefined ? "" : file.path;

  try {
    const newPost = await Post.create({
      _user: user._id,
      date: req.body.date,
      title: req.body.title,
      body: req.body.body,
      media: path,
    });
    return res.status(200).json({ message: "Post Created", createdPost: newPost });
  } catch (error) {
    // console.log(error)
    return res.status(400).json({ message: "Something went wrong creating the post", error });
  }
}

export async function deletePost(req: Request, res: Response) {
  const id = req.params.id;
  try {
   const postToDelete = await Post.findByIdAndDelete(id)
   if(postToDelete.media){
    fs.unlink(`${postToDelete.media}`, (err => {
      if (err) console.log(err);
      else {
        console.log(`\nDeleted file: ${postToDelete.media}`);
      }
    }));
   }
    return res.status(200).json({ message: "Post deleted", postToDelete: postToDelete });
  } catch (error) {
    // console.log(error)
    return res.status(400).json({ message: "Something went wrong creating the post", error });
  }
}

export const paginate = async (req: Request, res: Response) => {
  const user = req.user as UserType;
  const page = Number(req.query.page) || 1;
  const pageSize = Number(req.query.pageSize) || 10;
  const skipRows = (page - 1) * pageSize;
  try {
    let posts = [];
    posts = await Post.find({ _user: user._id }).skip(skipRows).limit(pageSize);
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(400).json({ message: "Error happened", error });
  }
};

export default { createPost, deletePost, paginate };
