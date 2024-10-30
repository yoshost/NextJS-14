import { comments } from "@/data/comments";

export default function Comment({ comment }: { comment: any }) {
  return (
    <>
      <div key={comment.id}>
        {comment.id} | {comment.comment}
      </div>
    </>
  );
}
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          commentId: "1",
        },
      },
      {
        params: {
          commentId: "2",
        },
      },
      {
        params: {
          commentId: "3",
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const commentId = params.commentId;
  const comment = comments.find((comment) => comment.id === Number(commentId));

  //Don't do this if you have call own API.
  //   const res = await fetch(
  //     `http://localhost:3001/comments/${params.commentId}`
  //   );
  //   const comment = await res.json();

  return {
    props: {
      comment,
    },
  };
}
