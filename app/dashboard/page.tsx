import { createClient } from "@/supabase/server"
import { redirect } from "next/navigation"

async function DashboardPage() {

    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()

    if (error) {
        return redirect("/login")
    }

    console.log("🚀 ~ DashboardPage ~ data:", data)
    return (
        <div>DashboardPage</div>
    )
}

export default DashboardPage