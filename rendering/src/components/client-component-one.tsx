"use client";

import React, { useState } from "react";
import { ClientComponentTwo } from "./client-component-two";
import { ServerComponentOne } from "./server-component-one";

export const ClientComponentOne = ({
  children,
}: {
  children: React.ReactDOM;
}) => {
  const [name, setName] = useState("some name");
  return (
    <>
      <div>Client Component One</div>
      {children}
    </>
  );
};
