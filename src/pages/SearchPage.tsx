import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { fetchProducts } from "../api/product.api"
import Pagination from "../components/common/Pagination"
import type { Product } from "../types/products"
import ProductGrid from "./ProductGrid"

const LIMIT = 12

export default function SearchPage() {
  const [params, setParams] = useSearchParams()
  const [products, setProducts] = useState<Product[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  const query = params.get("query") || ""
  const page = Number(params.get("page")) || 1

  useEffect(() => {
    setLoading(true)

    fetchProducts({ query, page, limit: LIMIT })
      .then((res) => {
        setProducts(res.data)
        setTotal(res.total)
      })
      .finally(() => setLoading(false))
  }, [query, page])

  const totalPages = Math.ceil(total / LIMIT)

  return (
    <div className="flex gap-6">
      {/* Filters here */}

      <div className="flex-1">
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* skeletons */}
          </div>
        ) : (
          <ProductGrid products={products} query={query} />
        )}

        {totalPages > 1 && (
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(p: any) =>
              setParams({ query, page: p.toString() })
            }
          />
        )}
      </div>
    </div>
  )
}
