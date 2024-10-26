import { useRouter } from "next/router";
import { Recipe } from ".";

export default function RecipeDetail({ recipe }: { recipe: Recipe }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
    </div>
  );
}

export async function getStaticProps({
  params,
}: {
  params: { recipeId: string };
}) {
  const res = await fetch(`http://localhost:3001/recipes/${params.recipeId}`);
  const recipe = await res.json();

  return {
    props: {
      recipe,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
//   const res = await fetch("http://localhost:3001/recipes");
//   const recipes = await res.json();

  //   const paths = recipes.map((recipe: Recipe) => ({
  //     params: {
  //       recipeId: `${recipe.id}`,
  //     },
  //   }));

  return {
    paths: [
      {
        params: {
          recipeId: "1",
        },
      },
    ],
    fallback: true,
  };
}
