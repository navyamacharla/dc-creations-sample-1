import { TrendingUp } from "lucide-react"

const popular = ["New In Store", "Dresses", "Tops",  "Kurtas", "Ethnic Wear", "Party Wear"]

export default function PopularSearches() {
    return (
        <div>
            <div className="flex">
                <TrendingUp className="h-4 w-4 text-gray-500" />
                <p className="ps-2 text-xs font-semibold text-gray-500 mb-2">
                    POPULAR SEARCHES
                </p>
            </div>

            <div className="flex flex-wrap gap-2">
                {popular.map((item) => (
                    <span key={item} className="px-3 py-1 text-xs bg-rosebrown-50 text-rosebrown-600 
                        rounded-full cursor-pointer hover:bg-rosebrown-100">{item} &nbsp; →
                    </span>
                ))}
            </div>
        </div>
    )
}
