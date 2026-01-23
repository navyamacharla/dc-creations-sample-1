import LatestStylesCarousel from "./LatestStylesCarousel"
import { mockProducts } from "../../mocks/products"

export default function LatestStylesSection() {
  return (
    <section className="py-16 bg-rosebrown-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold mb-10">
          Shop Our Latest Styles
        </h2>

        <LatestStylesCarousel products={mockProducts} />

        <div className="flex justify-center">
          <div className="mt-10 text-center">
            <button
              className="px-4 py-3 bg-rosebrown-700 text-white text-sm md:text-sm font-serif font-semibold tracking-wide shadow-md
           hover:bg-rosebrown-600 hover:shadow-lg transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2
            focus-visible:ring-rosebrown-400">
              VIEW COLLECTION ⟶
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
