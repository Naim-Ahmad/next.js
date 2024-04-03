import Link from "next/link";

export default function Home() {
  const topics = [
    {
      name: "Routing",
      docURL: "/routing",
    },
    {
      name: "Layout",
      docURL: "/layout",
    },
    {
      name: "Metadata Object",
      docURL: "/layout",
    },
    {
      name: "Route Handler",
      docURL: "/posts",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {topics.map((topic, ind) => {
                return (
                  <tr key={ind}>
                    <th>{ind + 1}</th>
                    <td>{topic.name}</td>
                    <td>
                      <Link href={topic.docURL}>See</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
