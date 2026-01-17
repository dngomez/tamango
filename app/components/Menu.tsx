import { cn } from "@/lib/utils"
import Link from "next/link"

export function Menu() {
  return (
    <div className="flex flex-row gap-4 text-amber-900">
      <Link
        href="/"
        className={cn(
          "flex flex-row gap-1 justify-center items-center",
          "px-2 py-1 relative cursor-pointer",
          "after:content-[''] after:bg-teal-600 after:absolute",
          "hover:text-teal-600",
          "after:bottom-0 after:left-0 after:w-full after:h-0.5",
          "after:opacity-100 after:origin-center after:scale-0",
          "hover:after:scale-100 after:transition-all after:duration-300",
        )}
      >
        Inicio
      </Link>
      <Link
        href="/carta"
        className={cn(
          "flex flex-row gap-1 justify-center items-center",
          "px-2 py-1 relative cursor-pointer",
          "after:content-[''] after:bg-teal-600 after:absolute",
          "hover:text-teal-600",
          "after:bottom-0 after:left-0 after:w-full after:h-0.5",
          "after:opacity-100 after:origin-center after:scale-0",
          "hover:after:scale-100 after:transition-all after:duration-300",
        )}
      >
        Carta
      </Link>
      <Link
        href="/nosotros"
        className={cn(
          "flex flex-row gap-1 justify-center items-center",
          "px-2 py-1 relative cursor-pointer",
          "after:content-[''] after:bg-teal-600 after:absolute",
          "hover:text-teal-600",
          "after:bottom-0 after:left-0 after:w-full after:h-0.5",
          "after:opacity-100 after:origin-center after:scale-0",
          "hover:after:scale-100 after:transition-all after:duration-300",
        )}
      >
        Nosotros
      </Link>
    </div>
  )
}
