import { auth } from "@/auth";

export default async function Home() {

  const session = await auth()

  console.log(session)

  return (
    <main className="w-full max-w-screen-2xl">
      
    </main>
  );
}
