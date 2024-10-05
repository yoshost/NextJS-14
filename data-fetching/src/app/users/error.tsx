"use client";

import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.log(`${error}`);
  }, [error]);
  return (
    <>
      <h1 style={{ color: "red" }}>Fetching error</h1>
    </>
  );
}
