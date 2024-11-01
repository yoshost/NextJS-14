import { getSession } from "next-auth/react";

export default function Blog({ data }: any) {
  return <div>{data}</div>;
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=/blog",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session ? "Personalized content" : "Public content",
    },
  };
}
