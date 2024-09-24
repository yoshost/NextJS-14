import Card from "@/component/card";

export default function DashboardLayout({
  children,
  users,
  analaysis,
  notification,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  analaysis: React.ReactNode;
  notification: React.ReactNode;
}) {
  return (
    <div>
      <main>{children}</main>
      <Card>{users}</Card>
      <Card>{notification}</Card>
      <Card>{analaysis}</Card>
    </div>
  );
}
