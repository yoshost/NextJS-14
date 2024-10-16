import { useRouter } from "next/router";

export default function Review() {
  const { productId, reviewId } = useRouter().query;
  return (
    <h1>
      Review ID : {reviewId} - Product Details of {productId}
    </h1>
  );
}
