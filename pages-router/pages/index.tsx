import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <h1>Hello world!</h1>
        <Link href="/blog">Blog</Link>
        <Link href="/product">Product</Link>
      </main>
    </>
  );
}
