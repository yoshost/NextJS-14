export default function News({ articles }: { articles: any }) {
  return (
    <>
      <h1>News</h1>
      {articles.map((article: any) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3001/news");
  const data = await response.json();
  return {
    props: {
      articles: data,
    },
  };
}
