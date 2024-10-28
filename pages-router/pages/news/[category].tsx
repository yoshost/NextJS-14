export default function NewsListByCategory({
  articles,
  category,
}: {
  articles: any;
  category: string;
}) {
  return (
    <>
      <h1>News List By Category</h1>
      <h2>Category: {category}</h2>
      {articles.map((article: any) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { params, req, res, query } = context;
  console.log("Query", query);
  console.log("Cookies", req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=John Doe"]);
  const { category } = params;
  const response = await fetch(
    `http://localhost:3001/news?category=${category}`
  );
  const data = await response.json();
  return {
    props: {
      articles: data,
      category,
    },
  };
}
