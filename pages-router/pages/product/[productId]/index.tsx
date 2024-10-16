import { useRouter } from "next/router";

export default function ProductDetails() {
  const { productId } = useRouter().query;
  return (
    <>
      <h1>This is Product Details of {productId}</h1>
    </>
  );
}
