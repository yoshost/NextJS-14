import fs from "fs";
import { ServerComponentTwo } from "./server-component-two";
import { ClientComponentOne } from "./client-component-one";

export const ServerComponentOne = () => {
  fs.readFileSync("src/components/server-component-one.tsx", "utf-8");
  return (
    <>
      <div>Server Component One</div>
    </>
  );
};
