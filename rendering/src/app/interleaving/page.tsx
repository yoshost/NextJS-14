import { ClientComponentOne } from "@/components/client-component-one";
import { ServerComponentOne } from "@/components/server-component-one";
import { cookies } from "next/headers";

export default function Interleaving() {
  return (
    <>
      <h1>Interleaving component</h1>
      <ClientComponentOne>
        <ServerComponentOne></ServerComponentOne>
      </ClientComponentOne>
    </>
  );
}
