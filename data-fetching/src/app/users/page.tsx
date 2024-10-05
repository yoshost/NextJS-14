type User = {
  id: number;
  name: string;
  username: string;
};

export default async function Users() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users234",
    {
      next: {
        revalidate: 10,
      },
    }
  );
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/users234",
  //     {
  //       cache: "no-store",
  //     }
  //   );
  const users = await response.json();

  return (
    <>
      <h1>Users List</h1>
      {users.map((user: User) => {
        return <p key={user.id}>{`${user.name} || ${user.username}`}</p>;
      })}
    </>
  );
}
