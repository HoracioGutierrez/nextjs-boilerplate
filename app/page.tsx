import { getUsers } from "@/actions/getUsers";

async function HomePage() {

  const { data, errorMessage, hasError } = await getUsers()
  console.log("🚀 ~ Home ~ data:", data)

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">

    </div>
  );
}

export default HomePage;