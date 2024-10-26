export interface Recipe {
  id: number;
  name: string;
  description: string;
}

export default function Recipes({ recipes }: { recipes: Recipe[] }) {
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.id} | {recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3001/recipes");
  const recipes = await response.json();

  return {
    props: {
      recipes,
    },
    revalidate: 10,
  };
}
