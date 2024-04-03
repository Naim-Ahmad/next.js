import Link from "next/link";

export default function ReviewPage({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p>
          This is the {params.reviewsId} review of product {params.productId}
        </p>
        <Link href="/">
          <button className="btn btn-success">Back to home</button>
        </Link>
      </div>
    </main>
  );
}
