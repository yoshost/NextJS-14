import { useState } from "react";

export default function Dashboard() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };

  const submitComment = async () => {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };

  const deleteComment = async (id: number) => {
    const res = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    fetchComments();
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Comment"
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Add Comment</button>
      <button onClick={fetchComments}>Show Comments</button>
      <hr />
      {comments.map((comment: any) => (
        <div key={comment.id}>
          {comment.id} || {comment.comment}
          <button onClick={() => deleteComment(comment.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}
