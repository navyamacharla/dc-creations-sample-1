import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { fetchProducts } from "../api/product.api"
import Pagination from "../components/common/Pagination"
import type { Product } from "../types/products"
import ProductGrid from "./ProductGrid"
import { useIsMobile } from "../hooks/useIsMobile"

const LIMIT = 12

export default function SearchPage() {
  const [params, setParams] = useSearchParams()
  const [products, setProducts] = useState<Product[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const isMobile = useIsMobile()


  const query = params.get("query") || ""
  const pageFromUrl = Number(params.get("page")) || 1
  const [page, setPage] = useState(pageFromUrl)


  useEffect(() => {
    setLoading(true)

    fetchProducts({ query, page, limit: LIMIT })
      .then((res) => {
        setTotal(res.total)
        setProducts((prev) =>
          isMobile && page > 1 ? [...prev, ...res.data.results] : res.data.results
        )
      })
      .finally(() => setLoading(false))
  }, [query, page])

  useEffect(() => {
    if (!isMobile) return

    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200

      const hasMore = products.length < total

      console.log(hasMore, "hasmoreee")

      if (nearBottom && !loading && hasMore) {
        setPage((p) => p + 1)
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [isMobile, loading, products.length, total])

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
        {/* Desktop pagination only */}
        {!isMobile && totalPages > 1 && (
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(p) => {
              setParams({ query, page: p.toString() })
              setPage(p)
            }}
          />
        )}

        {/* Mobile loader */}
        {isMobile && loading && (
          <div className="text-center py-4 text-gray-500">
            Loading more...
          </div>
        )}
      </div>
    </div>
  )
}
