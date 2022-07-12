import express, { Request, Response } from "express";
import Comment from "../models/Comment";
import { UserType } from "../types";

export async function createComment(req: Request, res: Response) {
  const user = req.user as UserType;
  try {
    const newComment = await Comment.create({
      // switch to passport user later
      _user: user._id,
      _post: req.body._post,
      date: req.body.date,
      body: req.body.body,
    });

    return res.status(200).json({ message: "Comment Created", createdComment: newComment });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong creating the comment", error });
  }
}

export async function getCommentsByPostId(req: Request, res: Response) {
  try {
    const listComments = await Comment.find({ _post: req.params._post }).sort({ date: -1 });
    return res.status(200).json({ message: "List comments", listComments: listComments });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong fetching the list", error });
  }
}

export async function deleteComment(req: Request, res: Response) {
  const id = req.params._id;
  try {
    const commentToDelete = await Comment.findByIdAndDelete(id);
    return res.status(200).json({ message: "Post deleted", commentToDelete: commentToDelete });
  } catch (error) {
    // console.log(error)
    return res.status(400).json({ message: "Something went wrong creating the post", error });
  }
}

export default { createComment, deleteComment, getCommentsByPostId };
