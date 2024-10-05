"use client";

import { clientSideFunction } from "@/utils/client-utils";

export default function ClientRouterPage() {
  console.log("Client router ");
  const clientResult = clientSideFunction();
  // const serverResult = serverSideFunction();
  return (
    <>
      <h1>Client Router Page</h1>
      {/* <p>{serverResult}</p> */}
    </>
  );
}
