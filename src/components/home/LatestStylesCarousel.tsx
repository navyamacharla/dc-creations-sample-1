import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Product } from "../../types/products"
import ProductCard from "./ProductCard"

interface Props {
  products: Product[]
}

const ITEMS_PER_PAGE = 4
const CARD_WIDTH = 260

export default function LatestStylesCarousel({ products }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const updateView = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    updateView()
    window.addEventListener("resize", updateView)
    return () => window.removeEventListener("resize", updateView)
  }, [])

  const totalPages = Math.ceil(
    products.length / ITEMS_PER_PAGE
  )

  const canGoPrev = page > 0
  const canGoNext = page < totalPages - 1

  const visibleProducts = isDesktop
    ? products.slice(
      page * ITEMS_PER_PAGE,
      page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    )
    : products


  return (
    <div className="relative">
      {/* Desktop arrows only */}
      {isDesktop && canGoPrev && (
        <button
          onClick={() => setPage((p) => p - 1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-rosebrown-50">
          <ChevronLeft />
        </button>
      )}

      {isDesktop && canGoNext && (
        <button
          onClick={() => setPage((p) => p + 1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-rosebrown-50">
          <ChevronRight />
        </button>
      )}

      {/* Mobile: scroll | Desktop: fixed grid */}
      <div
        ref={scrollRef}
        className={`
          ${isDesktop
            ? "grid grid-cols-4 gap-4 overflow-hidden "
            : "flex gap-10 overflow-x-auto scroll-smooth scrollbar-hide px-4"}`}
      >
        {visibleProducts.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-[280px] md:w-[180px] lg:w-[280px]" style={!isDesktop ? { width: CARD_WIDTH } : undefined}>
            <ProductCard product={product} isNew={true}/>
          </div>
        ))}
      </div>
    </div>
  )
}
