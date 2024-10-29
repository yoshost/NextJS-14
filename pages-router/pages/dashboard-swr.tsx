import useSWR from "swr";

const fetcher = async () => {
  const res = await fetch("http://localhost:3001/dashboard");
  const data = await res.json();
  return data;
};

export default function DashboardSWR() {
  const { data, error } = useSWR("/api/user", fetcher);

  if (error) return "An error has occured";
  if (!data) return "Loading...";

  return (
    <>
      <h1>Dashboard</h1>
      <h2>Likes : {data?.likes}</h2>
      <h2>Followers : {data?.follwers}</h2>
      <h2>Views : {data?.views}</h2>
    </>
  );
}
