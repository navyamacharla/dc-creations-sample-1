import { CircleArrowLeft, CircleArrowRight } from "lucide-react"

type Props = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  return (
    <div className="flex justify-center items-center gap-2 my-8">
      {/* Previous */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 rounded disabled:opacity-40"
      >
        <div className="flex gap-2">
          <CircleArrowLeft />
          <p>Prev </p>
        </div>
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded
              ${page === currentPage
                ? "bg-rosebrown-400 text-white"
                : "hover:bg-gray-100"
              }`}
          >
            {page}
          </button>
        )
      })}

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1 rounded disabled:opacity-40"
      >
        <div className="flex gap-2">
          <p>Next </p>
          <CircleArrowRight />
        </div>
      </button>
    </div>
  )
}
