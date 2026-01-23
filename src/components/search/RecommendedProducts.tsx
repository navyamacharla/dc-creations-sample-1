import { UserStar } from "lucide-react"
import { mockProducts } from "../../mocks/products"

export default function RecommendedProducts() {
    return (
        <div>
            <div className="flex">
                <UserStar className="h-4 w-4 text-gray-500" />
                <p className="ps-2 text-xs font-semibold text-gray-500 mb-2">
                    RECOMMENDED FOR YOU
                </p>
            </div>

            <div className="space-y-2">
                {mockProducts.slice(0, 3).map((product) => (
                    <div
                        key={product.id}
                        className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
                    >
                        <img
                            src={product.desktopImageUrl}
                            alt={product.name}
                            className="w-12 h-14 object-cover rounded"
                        />

                        <div>
                            <p className="text-sm font-medium truncate">
                                {product.name}
                            </p>
                            <p className="text-xs text-rosebrown-600 font-semibold">
                                ₹{product.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
