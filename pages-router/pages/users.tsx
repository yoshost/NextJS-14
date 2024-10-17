import User from "@/components/user";

export default function UsersList({
  users,
}: {
  users: Array<{ id: number; name: string; email: string }>;
}) {
  return (
    <div>
      <h1>Users List</h1>
      {users.map((user: { id: number; name: string; email: string }) => (
        <div key={user.id}>
          <User user={user}></User>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}
