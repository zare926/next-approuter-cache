export const dynamic = "force-dynamic";
export const dynamicParams = true;

export default async function Page({ params }) {
  const { id } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await response.json();
  const dateResponse = await fetch(
    `http://localhost:3000/api-sample/datetime/${id}`,
    {
      next: { revalidate: 10 },
    }
  );
  const date = await dateResponse.json();
  return (
    <div>
      <h1>Next.js</h1>
      <p>{data.title}</p>
      <p>{date.data}</p>
    </div>
  );
}
