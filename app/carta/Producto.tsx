import { cn } from "@/lib/utils"
import Link from "next/link"

export function Producto({
  name,
  description,
  image,
  price,
}: {
  name: string
  description: string
  image: string
  price: number
}) {
  return (
    <li>
      <Link
        href={`/carta/${name}`}
        className={cn(
          "flex flex-row justify-between bg-light-fg gap-4",
          "text-amber-800 rounded-2xl shadow-md",
          "hover:shadow-teal-600 transition-all",
        )}
      >
        <img
          src={`/carta/${image}`}
          alt={name}
          className="w-28 md:w-40 rounded-2xl"
        />
        <div className="flex flex-col justify-center grow">
          <h1>{name}</h1>
          <p className="text-sm text-amber-800/50">{description}</p>
        </div>
        <span className="flex flex-col justify-center mr-4">${price}</span>
      </Link>
    </li>
  )
}
