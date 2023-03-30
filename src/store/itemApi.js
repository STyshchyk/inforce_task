import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const itemApi = createApi({
    reducerPath: "itemApi",
    tagTypes: ["Products"],
    baseQuery: fetchBaseQuery(
        {
            baseUrl: "https://64258f5f7ac292e3cf0421e1.mockapi.io/inforce_test"
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
                url: `/${id}`
            }),
        }),
        addProduct: build.mutation({
            query: (body) => ({
                url: ``,
                method: "POST",
                body
            }),
            invalidatesTags: [{type: 'Products', id: 'LIST'}],
        }),
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{type: 'Products', id: 'LIST'}],
        })
    }),


})

export const {useGetGoodsQuery, useAddProductMutation, useDeleteProductMutation, useGetItemQuery} = itemApi;

