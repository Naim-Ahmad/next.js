import Link from "next/link";

export default async function BlogsPage() {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {posts.map((post, ind) => (
        <div key={post.id} className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <div className="card-actions justify-end">
              <Link href={`/posts/${post.id}`}>
                <button className="btn btn-primary">See</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
