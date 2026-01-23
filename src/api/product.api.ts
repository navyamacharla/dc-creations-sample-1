import type { Product } from "../types/products"

type ProductResponse = {
    status: string
    data: Product[]
    total: number
    page: number
    limit: number
}

export async function fetchProducts(params: {
    query?: string
    page?: number
    limit?: number
}): Promise<ProductResponse> {
    const searchParams = new URLSearchParams()

    if (params.query) searchParams.set("query", params.query)
    if (params.page) searchParams.set("page", String(params.page))
    if (params.limit) searchParams.set("limit", String(params.limit))

    const res = await fetch(`/api/products?${searchParams.toString()}`)
    // const res = await fetch(`http://localhost:8000/api/products?${searchParams.toString()}`)
    // Change to the above line when integrating with backend

    if (!res.ok) {
        throw new Error("Failed to fetch products")
    }

    return res.json()
}
