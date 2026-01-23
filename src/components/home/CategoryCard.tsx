import type { Category } from "../../types/category"

export default function CategoryCard({
    category,
}: {
    category: Category
}) {
    return (
        <button
            className=" w-[150px] sm:w-[150px] md:w-[180px] flex flex-col items-center gap-3 focus:outline-none
             focus-visible:ring-2 focus-visible:ring-rosebrown-500 rounded-lg">

            <div className="w-36 h-36 sm:w-36 sm:h-36 md:w-36 md:h-36 rounded-full overflow-hidden bg-white 
            shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover" loading="lazy" draggable={false} />
            </div>

            <span className="text-sm md:text-base font-medium text-gray-800 text-center font-serif tracking-wide">
                {category.name}
            </span>
        </button>
    )
}
