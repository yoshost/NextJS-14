import { cookies } from "next/headers";

export default function About() {
  //This coockies access has been added to verify that server render this component dynamically
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  console.log("@lg server component");
  return (
    <h1>This is About Server Component {new Date().toLocaleTimeString()}</h1>
  );
}
