import Link from "next/link";

export default function Product() {
  const productID = 3;
  return (
    <>
      <h1>Product Details</h1>
      <h2>
        <Link href={"/product/1"}>Product 1</Link>
      </h2>
      <h2>
        <Link href={"/product/2"} replace>Product 2</Link>
      </h2>
      <h2>
        <Link href={`/product/${productID}`}>Product 3</Link>
      </h2>
    </>
  );
}
