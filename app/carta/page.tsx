import { PRODUCT_LIST } from "../productos"
import { Producto } from "./Producto"

export default function Page() {
  const carta = Object.groupBy(PRODUCT_LIST, (p) => p.category)

  return (
    <div className="animate-appear">
      {Object.keys(carta).map((category) => (
        <div key={category} className="mb-3">
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
    </div>
  )
}
