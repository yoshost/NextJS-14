import { Product } from "@/components/product";
import { Review } from "@/components/review";
import { Suspense } from "react";

export default function ProductDetail() {
  return (
    <div>
      <h1>Product Details</h1>
      <Suspense fallback={<p>Product loading ... </p>}>
        <Product></Product>
      </Suspense>
      <Suspense fallback={<p>Review loading ... </p>}>
        <Review></Review>
      </Suspense>
    </div>
  );
}
