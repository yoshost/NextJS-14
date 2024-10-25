import { GetStaticProps } from "next";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
};

const PostComponent = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      <h1>Post List</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: Post[] = await res.json();
  return {
    props: {
      posts: data,
    },
  };
};

export default PostComponent;
