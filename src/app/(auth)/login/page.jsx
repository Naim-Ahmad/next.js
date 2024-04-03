import Link from "next/link";

export default function LoginPage() {

  return (
    <div>
      <h1>Login page</h1>
      <Link href="/">
        <button className="btn btn-success">Go home</button>
      </Link>
    </div>
  )
}