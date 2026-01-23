import { categoriesMock } from "../../mocks/categories"
import CategoryCard from "./CategoryCard"

export default function CategorySection() {
    return (
        <section className="mt-10 px-4 md:px-8">
            <h2 className="text-center text-rosebrown-900 font-serif font-semibold tracking-wide mb-8">
                Shop by Category
            </h2>

            <div className="flex flex-wrap justify-center gap-10 md:gap-8 max-w-2xl mx-auto">
                {categoriesMock.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div>

        </section>
    )
}
