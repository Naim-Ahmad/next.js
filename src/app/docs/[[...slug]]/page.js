import Link from "next/link";

export default function DocsPage({ params }) {
  console.log(params);
  if (params.slug?.length === 1) {
    return (
      <div>
        <h1>This is docs of {params.slug[0]}.</h1>
        <button className="btn btn-success">Go home</button>
      </div>
    );
  } else if (params.slug?.length === 2) {
    return (
      <div>
        <h1>
          This is docs of {params.slug[0]}. and {params.slug[1]}
        </h1>
        <button className="btn btn-success">
          <Link href="/">Go home</Link>
        </button>
      </div>
    );
  } else if (params.slug?.length === 3) {
    return (
      <div>
        <h1>
          This is docs of {params.slug[0]}. and {params.slug[1]}. and{" "}
          {params.slug[2]}
        </h1>
        <button className="btn btn-success">
          <Link href="/">Go home</Link>
        </button>
      </div>
    );
  }
  return (
    <div>
      <h1>doc home page</h1>
      <button className="btn btn-success">
        <Link href="/">Go home</Link>
      </button>
    </div>
  );
}
