'use client'

import { getProducts } from "@/lib/api/service/product"
import { useCallback, useEffect, useReducer, useState } from "react"

export type CategoryType = {
    id: number
    category_name: string
}

export type ProductType = {
    id: number
    product_name: string
    price: number
    image: string
    category_id: number
    category: CategoryType
}

export interface ProductState {
    currentPage: number
    search: string
    debouncedSearch: string
}

export type ProductAction =
    | { type: 'SET_PAGE'; payload: number }
    | { type: 'SET_SEARCH'; payload: string }
    | { type: 'SET_DEBOUNCED_SEARCH'; payload: string }

const initialState: ProductState = {
    currentPage: 1,
    search: "",
    debouncedSearch: ""
}

function productReducer(
    state: ProductState,
    action: ProductAction
): ProductState {
    switch (action.type) {
        case 'SET_PAGE':
            return { ...state, currentPage: action.payload }

        case 'SET_SEARCH':
            return { ...state, search: action.payload }

        case 'SET_DEBOUNCED_SEARCH':
            return {
                ...state,
                debouncedSearch: action.payload,
                currentPage: 1
            }

        default:
            return state
    }
}

const ITEM_PER_PAGE = 7

export function useProduct() {
    const [state, dispatch] = useReducer(productReducer, initialState)
    const [dataProduct, setDataProduct] = useState<ProductType[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const handler = setTimeout(() => {
            dispatch({
                type: "SET_DEBOUNCED_SEARCH",
                payload: state.search
            })
        }, 500)

        return () => clearTimeout(handler)
    }, [state.search])

    const fetchProduct = useCallback(async () => {
        setIsLoading(true)
        setError(null)

        try {
            const products = await getProducts({
                currentPage: state.currentPage,
                debounceSearch: state.debouncedSearch,
                limit: ITEM_PER_PAGE,
            })

            setDataProduct(products ?? [])

        } catch (err) {
            console.error("Error fetching products:", err)
            setError("Gagal mengambil data product")
            setDataProduct([])
        } finally {
            setIsLoading(false)
        }
    }, [state.currentPage, state.debouncedSearch])

    useEffect(() => {
        fetchProduct()
    }, [fetchProduct])

    return {
        state,
        dispatch,
        dataProduct,
        isLoading,
        error,
        itemPerPage: ITEM_PER_PAGE,
        refetch: fetchProduct
    }
}
