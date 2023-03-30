import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const itemApi = createApi({
    reducerPath: "itemApi",
    tagTypes: ["Products"],
    baseQuery: fetchBaseQuery(
        {
            baseUrl: "http://localhost:3001/"
        }),
    endpoints: (build) => ({
        getGoods: build.query({
            query: (query = "") => ({
                url: `${query}`
            }),
            providesTags: (result) => result
                ? [
                    ...result.map(({id}) => ({type: 'Products', id})),
                    {type: 'Products', id: 'LIST'},
                ]
                : [{type: 'Products', id: 'LIST'}],

        }),
        getItem: build.query({
            query: (id = "") => ({
                url: `product/${id}`
            }),
        }),
        addProduct: build.mutation({
            query: (body) => ({
                url: `product`,
                method: "POST",
                body
            }),
            invalidatesTags: [{type: 'Products', id: 'LIST'}],
        }),
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `product/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{type: 'Products', id: 'LIST'}],
        })
    }),


})

export const {useGetGoodsQuery, useAddProductMutation, useDeleteProductMutation, useGetItemQuery} = itemApi;

