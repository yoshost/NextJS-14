import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRouterPage() {
  console.log("Server router ");
  const serverResult = serverSideFunction();
  return (
    <>
      <h1>Server Router Page</h1>
      <p>{serverResult}</p>
    </>
  );
}
