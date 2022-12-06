import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import URL_BACKEND from '../utilities/BackEnd/ruta';

export const restApi = createApi({
    reducerPath: 'restApi',
    baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: (id) => `/categories/${id}`,
        }),
        getProduct: builder.query({
            query: (ids) => `/products/${ids}`,
        }),
        getCarousel: builder.query({
            query: () => `/carousel`,
        })
    })
});
export const { useGetCategoriesQuery, useGetProductQuery, useGetCarouselQuery } = restApi;