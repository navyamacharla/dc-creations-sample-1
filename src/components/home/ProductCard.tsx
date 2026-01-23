import type { Product } from "../../types/products";
import { Heart } from "lucide-react"
import { useState } from "react"

export default function ProductCard({ product, isNew }: { product: Product, isNew?: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="flex-shrink-0 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {/* Image */}
      <div className="relative overflow-hidden bg-white shadow-md">
        {product && isNew && (
          <span className="absolute top-2 left-2 z-10 bg-black text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
        )}

        <button className="absolute top-2 right-2 z-10 bg-white/90 p-1.5 rounded-full shadow">
          <Heart size={16} />
        </button>

        <img
          src={hovered ? product.desktopImageUrl : product.mobileImageUrl}
          alt={product.name}
          className="w-full h-[280px] md:h-[280px] lg:h-[360px] object-cover transition-all duration-300 cursor-pointer
                  group-hover:scale-105" draggable={false}
        />
      </div>

      {/* Info */}
      <div className="mt-3 space-y-1">
        <h3 className="text-gray-900 truncate font-regular text-sm">
          {product.name}
        </h3>

        <p className="text-md font-semibold">
          ₹{product.price.toLocaleString()}
        </p>

        <div className="flex items-center gap-1 text-xs text-gray-600">
          <span>⭐ 5</span>
          <span>({44})</span>
        </div>
      </div>
    </div>
  )
}
