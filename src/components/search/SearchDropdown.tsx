import PopularSearches from "./PopularSearches"
import RecommendedProducts from "./RecommendedProducts"

export default function SearchDropdown() {
    return (
        <div
            className="mt-3 bg-white rounded-xl shadow-xl p-4 space-y-4  max-h-[420px] overflow-y-auto">
            <PopularSearches />
            <RecommendedProducts />
        </div>
    )
}
