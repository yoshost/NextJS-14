"use client";

import { useState } from "react";

export const ClientComponentTwo = () => {
  const [name, setName] = useState("some name");
  return <div>Client Component Two</div>;
};
