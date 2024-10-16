import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const clickHandler = () => {
    console.log("clicked");
    router.push("/product");
  };
  return (
    <>
      <main>
        <h1>Hello world!</h1>
        <Link href="/blog">Blog</Link>
        <Link href="/product">Product</Link>
        <button onClick={clickHandler}>Place Order</button>
      </main>
    </>
  );
}
