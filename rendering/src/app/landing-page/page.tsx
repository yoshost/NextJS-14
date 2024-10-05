import { Navbar } from "@/components/navbar";
import { cookies } from "next/headers";

export default function Landing() {
  console.log("This is Landing page");
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <h1>This is main page</h1>
      </main>
    </div>
  );
}
