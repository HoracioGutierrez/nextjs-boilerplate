import { getUsers } from "@/actions/getUsers";

export default async function Home() {

  const { data, errorMessage, hasError } = await getUsers()

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">

    </div>
  );
}
