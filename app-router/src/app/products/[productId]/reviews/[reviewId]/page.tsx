"use client";

import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetails({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("This is a random error");
  }

  if (parseInt(params.reviewId) > 1000) {
    return notFound();
  }

  return (
    <>
      <h1>
        Review {params.productId} for product : {params.reviewId}
      </h1>
    </>
  );
}
