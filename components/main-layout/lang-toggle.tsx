"use client"
import { useChangeLocale, useCurrentLocale } from "@/locales/client"
import { Button } from "../ui/button"

function LangToggle() {

    const changeLocale = useChangeLocale()
    const currentLocale = useCurrentLocale()

    const handleLocaleChange = () => {
        changeLocale(currentLocale === "en" ? "es" : "en")
    }

    return (
        <Button variant="link" className="cursor-pointer p-0" onClick={handleLocaleChange}>{currentLocale.toUpperCase()}</Button>
    )
}

export default LangToggle