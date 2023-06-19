// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const webcommerceApi = createApi({
  reducerPath: 'webcommerceApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/' }),
  endpoints: (builder) => ({
    getCategoryByName: builder.query({
      query: (name) => `product/${name}`,
    }),
    getProduct: builder.query({
      query: (name) => `product/`,
    }),
    getCategory: builder.query({
        query: () => `category`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCategoryByNameQuery, useGetCategoryQuery, useGetProductQuery } = webcommerceApi