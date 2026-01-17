"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { type Product } from "../productos"
import { normalizeText } from "@/lib/normalizeText"

export function Producto({ product }: { product: Product }) {
  return (
    <li>
      <Link
        href={`/carta/${normalizeText(product.name)}`}
        className={cn(
          "flex flex-row justify-between bg-light-fg gap-4",
          "text-amber-800 rounded-2xl shadow-md",
          "hover:shadow-teal-600 transition-all",
        )}
      >
        <img
          src={`/carta/${product.images[0]}`}
          alt={product.name}
          className="w-28 md:w-40 rounded-2xl"
        />
        <div className="flex flex-col justify-center grow">
          <h1>{product.name}</h1>
          <p className="text-sm text-amber-800/50">{product.description}</p>
        </div>
        <span className="flex flex-col justify-center mr-4">
          ${product.price}
        </span>
      </Link>
    </li>
  )
}
