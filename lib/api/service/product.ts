import axiosInstance from "../axiosInstance"

// Fetching Product API
export interface ProductParams {
    currentPage: number;
    limit: number;
    debounceSearch?: string;
}

export const getProducts = async ( params: ProductParams ) => {
    const queryParams = new URLSearchParams();
    queryParams.append('page', String(params.currentPage))
    queryParams.append('limit', String(params.limit))
    if (params.debounceSearch) queryParams.append('search', params.debounceSearch)

    const response = await axiosInstance.get('/products', {
        params: queryParams,
    });

    return response.data
}

//