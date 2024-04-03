export default async function PostDetailsPage({ params }) {
  const res = await fetch(`http://localhost:3000/api/posts/${params.id}`);
  const post = await res.json();

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.body}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See</button>
        </div>
      </div>
    </div>
  );
}
