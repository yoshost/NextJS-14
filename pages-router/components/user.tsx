export default function User({ user }: { user: { name: string; email: string } }) {
  return (
    <>
      <p> Name : {user.name}</p>
      <p> Email : {user.email}</p>
      <hr />
    </>
  );
}
