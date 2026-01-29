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
          "flex flex-row justify-between bg-light-fg gap-1 md:gap-4",
          "text-amber-800 rounded-2xl shadow-md",
          "hover:shadow-teal-600 transition-all",
          "h-24 overflow-hidden",
        )}
      >
        <div className="overflow-hidden flex flex-col justify-center w-24">
          <img
            src={`/carta/${product.images[0]}`}
            alt={product.name}
            className="w-24"
          />
        </div>
        <div className="flex flex-col justify-center grow max-w-[55%] md:max-w-2/3 xl:max-w-4/5">
          <h1>{product.name}</h1>
          <p className="text-xs text-amber-800/50 italic">
            {product.shortDescription}
          </p>
        </div>
        <span className="flex flex-col justify-center mr-2 md:mr-4">
          ${product.price}
        </span>
      </Link>
    </li>
  )
}
