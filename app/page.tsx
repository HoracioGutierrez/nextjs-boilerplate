import { getUser } from "@/actions/getUsers";

export default async function Home() {

  const { payload, errorMessage, hasError } = await getUser()

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      
    </div>
  );
}
