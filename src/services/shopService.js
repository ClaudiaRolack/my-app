import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DATABASE_URL } from "../firebase/database";
import { objectToArray } from "../utils/array";

export const shopApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: DATABASE_URL }),
    endpoints: (builder) => ({
        getProductsByCategory: builder.query({
            query: (categoryId) => `products.json?orderBy="categoryId"&equalTo=${categoryId}`,
            transformResponse: response => objectToArray(response)
        }),
        getCategories: builder.query({
            query: () => 'categories.json'
        }),
    })
})

export const { useGetProductsByCategoryQuery, useGetCategoriesQuery } = shopApi