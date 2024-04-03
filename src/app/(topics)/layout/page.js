import Link from "next/link";

export default function page() {
  const topics = [
    {
      name: "Nested Layout",
      docURL: "/dashboard",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="overflow-x-auto">
          <h1 className="text-2xl font-bold text-center">Layout Topics</h1>
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
                      <Link href={topic.docURL}>Test</Link>
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
