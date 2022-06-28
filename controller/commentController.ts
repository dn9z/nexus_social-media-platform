import express, { Request, Response } from "express";
import Comment from "../models/Comment";

export async function createComment(req: Request, res: Response) {
  console.log("test");
  try {
    const newComment = await Comment.create({
      // switch to passport user later
      // _user: req.user._id,
      user_id: req.body.user_id,
      date: req.body.date,
        post_id: req.body.post_id,
      body: req.body.body,
    });

    return res
      .status(200)
      .json({ message: "Comment Created", createdComment: newComment });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Something went wrong creating the comment", error });
  }
}

export async function getCommentsByPostId(req: Request, res: Response) {
    try {
        const listComments = Comment.find({
            post_id: req.params.post_id
        })
        return res
      .status(200)
      .json({ message: "List comments", listComments: listComments });
    } catch (error) {
        return res
        .status(400)
        .json({ message: "Something went wrong fetching the list", error });
    }
}

export default { createComment, getCommentsByPostId };
