"use client";

import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRouterPage() {
  console.log("Client router ");
  // const serverResult = serverSideFunction();
  return (
    <>
      <h1>Client Router Page</h1>
      {/* <p>{serverResult}</p> */}
    </>
  );
}
