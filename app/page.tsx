import Link from "next/link";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export default async function Page() {
  const stringRes = await fetch("http://localhost:3000/api-sample/string", {
    cache: "no-store",
  });

  const textData = await stringRes.json();

  const response = await fetch(
    `http://localhost:3000/api-sample/datetime/${textData.data}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await response.json();

  return (
    <div>
      <h1>Next.js</h1>
      <p>now time {data.data}</p>
    </div>
  );
}
