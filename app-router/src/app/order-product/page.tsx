"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    router.replace("/");
  };

  return (
    <>
      <h1>Place order</h1>
      <button onClick={handleClick}>Oreder</button>
    </>
  );
}
