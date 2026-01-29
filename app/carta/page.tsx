"use client"

import { cn } from "@/lib/utils"
import { PRODUCT_LIST } from "../productos"
import { Producto } from "./Producto"
import { useRef } from "react"
import { normalizeText } from "@/lib/normalizeText"
import { useInView } from "react-intersection-observer"
import { FaArrowCircleUp } from "react-icons/fa"

export default function Page() {
  const carta = Object.groupBy(PRODUCT_LIST, (p) => p.category)
  const categoryRefs = Object.keys(carta).reduce(
    (acc, key) => ({
      ...acc,
      [normalizeText(key)]: useRef<HTMLDivElement>(null),
    }),
    {},
  )

  const scrollRef = useRef<HTMLDivElement>(null)

  const { ref: buttonsRef, inView } = useInView({
    /* Optional options */
    threshold: 0,
  })

  return (
    <div className="animate-appear">
      <div ref={scrollRef}></div>
      <div
        ref={buttonsRef}
        className="grid grid-cols-4 gap-2 md:grid-cols-7 mb-5"
      >
        {Object.keys(carta).map((category) => (
          <button
            key={category}
            className={cn(
              "flex flex-row gap-1 justify-center items-center grow",
              "px-2 py-1 relative cursor-pointer bg-amber-800 text-light-fg",
              "rounded-md transition-colors duration-300",
              "hover:bg-light-fg hover:shadow-md hover:text-amber-800",
            )}
            onClick={() => {
              if (
                categoryRefs[
                  normalizeText(category) as keyof typeof categoryRefs
                  // @ts-ignore
                ].current
              ) {
                categoryRefs[
                  normalizeText(category) as keyof typeof categoryRefs
                  // @ts-ignore
                ].current.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {Object.keys(carta).map((category) => (
        <div
          key={category}
          ref={
            categoryRefs[normalizeText(category) as keyof typeof categoryRefs]
          }
          className="mb-5"
        >
          <h2 className="uppercase text-amber-800 text-center text-2xl tracking-widest underline mb-1">
            {category}
          </h2>
          <ul className="flex flex-col gap-2">
            {carta[category]!.map((product) => (
              <Producto key={product.name} product={product} />
            ))}
          </ul>
        </div>
      ))}

      {!inView && (
        <FaArrowCircleUp
          className={cn(
            "fixed bottom-3 right-3 text-amber-800 text-2xl animate-appear",
            "cursor-pointer hover:text-teal-600 transition-colors",
          )}
          onClick={() => {
            if (scrollRef.current) {
              scrollRef.current.scrollIntoView({ behavior: "smooth" })
            }
          }}
        />
      )}

      <a
        href="/carta.pdf"
        download="carta-flores-del-tamango.pdf"
        className={cn(
          "flex flex-row gap-1 justify-center items-center grow",
          "px-2 py-1 relative cursor-pointer bg-amber-800 text-light-fg",
          "rounded-md transition-colors duration-300",
          "hover:bg-light-fg hover:shadow-md hover:text-amber-800",
          "mb-5",
        )}
      >
        Descargar en PDF
      </a>
    </div>
  )
}
