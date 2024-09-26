import Card from "@/component/card";

export default function DashboardLayout({
  children,
  users,
  analaysis,
  notification,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  analaysis: React.ReactNode;
  notification: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLogedIn = false;
  return isLogedIn ? (
    <div>
      <main>{children}</main>
      <Card>{users}</Card>
      <Card>{notification}</Card>
      <Card>{analaysis}</Card>
    </div>
  ) : (
    <div>{login}</div>
  );
}
