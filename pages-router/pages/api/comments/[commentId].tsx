import { comments } from "@/data/comments";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { commentId } = req.query;
  if (req.method === "GET") {
    const comment = comments.find(
      (comment) => comment.id === Number(commentId)
    );
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const deletedComments = comments.find(
      (comment) => comment.id === Number(commentId)
    );

    comments.splice(
      comments.findIndex((comment) => comment.id === Number(commentId)),
      1
    );

    res.status(200).json(deletedComments);
  }
}
