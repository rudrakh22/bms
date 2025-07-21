import {client} from "@repo/db/client"

export default async function Home() {
  // Fetching data from the Prisma clientcl
  const res=await client.user.findFirst()
  console.log(res);
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple Next.js application.</p>
      <p>Explore the features and functionalities!</p>
      <p>Data from Prisma: {JSON.stringify(res)}</p>
    </div>
  );
}
