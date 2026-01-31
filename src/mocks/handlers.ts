import { http, HttpResponse } from "msw"
import { searchResults } from "./products"

export const productHandlers = [
    http.get("/api/products", ({ request }) => {
        const url = new URL(request.url)

        const query = url.searchParams.get("query")?.toLowerCase() || ""
        const page = Number(url.searchParams.get("page")) || 1
        const limit = Number(url.searchParams.get("limit")) || 12

        const filtered = searchResults.filter((p) =>
            p.categoryName.toLowerCase().includes(query)
        )

        // const start = (page - 1) * limit
        // const paginated = filtered.slice(start, start + limit)

        // return HttpResponse.json({
        //     status: 'success',
        //     data: { results: paginated },
        //     total: filtered.length,
        //     page,
        //     limit,
        // })

        return HttpResponse.json(filtered)
    }),
]
