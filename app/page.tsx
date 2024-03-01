import { auth } from "@/auth";

export default async function Home() {

  const session = await auth()

  return (
    <main className="container w-full max-w-screen-2xl">
      <h2>Home</h2>
    </main>
  );
}
