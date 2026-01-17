import { cn } from "@/lib/utils"
import { Dancing_Script } from "next/font/google"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
})

export function Logo() {
  return (
    <div className="flex flex-row gap-2 items-center">
      <img src="/tamango_logo.svg" alt="Logo" className="w-16 md:w-24" />
      <div
        className={cn(
          "flex flex-col text-amber-900 text-md md:text-2xl font-bold",
          dancingScript.className,
        )}
      >
        <span className="-ml-2 md:-ml-1.25">Flores</span>
        <span className="ml-1 md:ml-3">del</span>
        <span className="-ml-8 md:-ml-10">Tamango</span>
      </div>
    </div>
  )
}
