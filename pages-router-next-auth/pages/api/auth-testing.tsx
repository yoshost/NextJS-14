import { getSession } from "next-auth/react";

export default async function handler(req: any, res: any) {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).send("Unauthorized");
  }
  res.status(200).json({ name: "John Doe", session });
}
