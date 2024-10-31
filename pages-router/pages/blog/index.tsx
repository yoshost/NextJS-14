export default function Blog() {
  return (
    <>
      Public Envioroment Variable Start with NEXT_PUBLIC:
      {process.env.NEXT_PUBLIC_NAME}
      <h1>Blog</h1>
    </>
  );
}

export async function getServerSideProps() {
  const userName = process.env.USER_NAME;
  const password = process.env.PASSWORD;
  console.log(`This is envioroment variable ${userName} ${password}`);
  return {
    props: {},
  };
}
