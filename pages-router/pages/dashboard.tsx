import { useEffect, useState } from "react";

type DashboardData = {
  likes: number;
  follwers: number;
  views: number;
};

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dasboardData, setDasboardData] = useState<DashboardData | null>(null);

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:3001/dashboard");
      const data: DashboardData = await res.json();
      setDasboardData(data);
      setIsLoading(false);
    }
    getData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Dashboard</h1>
      <h2>Likes : {dasboardData?.likes}</h2>
      <h2>Followers : {dasboardData?.follwers}</h2>
      <h2>Views : {dasboardData?.views}</h2>
    </>
  );
}
