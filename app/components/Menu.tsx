import { cn } from "@/lib/utils"
import Link from "next/link"
import { FaFacebook, FaHouse, FaInstagram } from "react-icons/fa6"
import { IoRestaurant } from "react-icons/io5"

export function Menu() {
  return (
    <div className="flex flex-row gap-2 text-amber-900">
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
        <FaHouse /> Inicio
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
        <IoRestaurant /> Carta
      </Link>
      <a
        href="https://www.instagram.com/floresdeltamango/"
        target="_blank"
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
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/share/1DLZDRdyj4/"
        target="_blank"
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
        <FaFacebook />
      </a>
    </div>
  )
}
