"use client";

import { useState } from "react";

export default function Dashboard() {
  console.log("@lg client component");
  const [name, setName] = useState("");
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <h1>Hello , {name}</h1>
    </>
  );
}
