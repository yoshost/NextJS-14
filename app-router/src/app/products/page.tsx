import Link from "next/link";

export default function Product() {
  return (
    <>
      <h1>
        <Link href="/products/1">Product 1</Link>
      </h1>
      <h1>
        <Link href="/products/2">Product 2</Link>
      </h1>
    </>
  );
}
