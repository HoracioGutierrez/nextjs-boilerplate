import { getI18n } from "@/locales/server"
import { createClient } from "@/supabase/server"
import { redirect } from "next/navigation"

async function DashboardPage() {

    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()
    const t = await getI18n()

    if (error) {
        return redirect("/login")
    }

    console.log("🚀 ~ DashboardPage ~ data:", data)
    return (
        <div>{t("hello")}</div>
    )
}

export default DashboardPage