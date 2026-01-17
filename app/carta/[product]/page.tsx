import { PRODUCT_LIST } from "@/app/productos"
import { normalizeText } from "@/lib/normalizeText"

export default async function Page({
  params,
}: {
  params: Promise<{ product: string }>
}) {
  const { product: currentProduct } = await params
  const product = PRODUCT_LIST.find(
    (p) => normalizeText(p.name) === currentProduct,
  )

  return (
    <div className="animate-appear">
      <div className="md:max-w-2/3 rounded-2xl mx-auto bg-light-fg pb-5 shadow-lg">
        <img
          src={`/carta/${product?.images[0]}`}
          alt={product?.name}
          className="rounded-2xl mx-auto"
        />
        <h1 className="text-amber-800 font-bold uppercase tracking-widest text-center mt-3">
          {product?.name}
        </h1>
        <p className="text-center mt-3">{product?.description}</p>
      </div>
    </div>
  )
}
