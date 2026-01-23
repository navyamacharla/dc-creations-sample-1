import ProductCard from "../components/home/ProductCard"
import type { Product } from "../types/products"

export default function ProductGrid({ products, query }: {products: any, query: string}) {
  // Empty state
  if (!products || products.length === 0) {
    return (
      <div className="w-full py-16 text-center text-gray-500">
        No products found
      </div>
    )
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-10 min-h-[60vh]">
      <h1 className="text-md mb-6">
        Showing Result(s) for <b>“{query}”</b>
      </h1>

      <section className="w-full">
        <div className=" grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          {products?.results && products.results?.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}
