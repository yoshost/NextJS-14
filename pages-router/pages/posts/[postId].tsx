export default function Post({ post }: { post: any }) {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}

export async function getStaticPaths() {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  // const posts = await res.json();
  // const paths = posts.map((post: any) => {
  //   return {
  //     params: {
  //       postId: `${post.id}`,
  //     },
  //   };
  // });

  return {
    paths: [
      {
        params: {
          postId: "1",
        },
      },
      {
        params: {
          postId: "2",
        },
      },
      {
        params: {
          postId: "3",
        },
      },
    ],
    // paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
