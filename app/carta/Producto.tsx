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
          "h-20 overflow-hidden",
        )}
      >
        <div className="overflow-hidden max-h-20 md:max-h-28 flex flex-col justify-center w-24 md:w-40">
          <img
            src={`/carta/${product.images[0]}`}
            alt={product.name}
            className="w-28 md:w-40"
          />
        </div>
        <div className="flex flex-col justify-center grow max-w-[60%] md:max-w-2/3 xl:max-w-4/5">
          <h1>{product.name}</h1>
          <p className="text-xs text-amber-800/50 italic">
            {product.shortDescription}
          </p>
        </div>
        <span className="flex flex-col justify-center mr-4">
          ${product.price}
        </span>
      </Link>
    </li>
  )
}
