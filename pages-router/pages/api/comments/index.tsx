import { comments } from "@/data/comments";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comment = req.body.comment;
    const newComment = {
      id: comments.length + 1,
      comment,
    };
    comments.push(newComment);
    res.status(200).json(newComment);
  }
}
