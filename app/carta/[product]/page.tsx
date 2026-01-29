"use client"

import { PRODUCT_LIST } from "@/app/productos"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { normalizeText } from "@/lib/normalizeText"
import { cn } from "@/lib/utils"
import { useParams } from "next/navigation"
import { useState } from "react"

export default function Page() {
  const params = useParams()
  const { product: currentProduct } = params
  const product = PRODUCT_LIST.find(
    (p) => normalizeText(p.name) === currentProduct,
  )

  return (
    <div className="animate-appear w-3/4 lg:w-7/12">
      <div className="w-3/4 lg:w-7/12 rounded-2xl mx-auto bg-light-fg shadow-lg">
        <Carousel>
          <CarouselContent>
            {product?.images.map((image, i) => (
              <CarouselItem key={i}>
                <img
                  src={`/carta/${image}`}
                  alt={product?.name}
                  className="rounded-2xl mx-auto max-h-160"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-amber-800 border-amber-800 hover:bg-amber-800 hover:text-light-bg disabled:hidden" />
          <CarouselNext className="text-amber-800 border-amber-800 hover:bg-amber-800 hover:text-light-bg disabled:hidden" />
        </Carousel>
        <div className="px-4 pb-5">
          <h1 className="text-amber-800 font-bold uppercase tracking-widest text-center mt-3">
            {product?.name}
          </h1>
          {product?.description.map((d, i) => (
            <p key={i} className="text-center mt-3 text-amber-800/70">
              {d}
            </p>
          ))}
          <h2 className="text-center text-lg text-amber-800 font-bold mt-2">
            ${product?.price}
          </h2>
        </div>
      </div>
    </div>
  )
}
