import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const customerApi = createApi({
  reducerPath: "customerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://northwind.vercel.app/api/",
  }),
  endpoints: (builder) => ({
    getAllCustomer: builder.query({
      query: () => `customers`,
    }),
    getCustomerById: builder.query({
      query: ({ id }) => `customers/${id}`,
    }),
    deleteCustomerByID: builder.mutation({
      query: (id) => ({
        url: `customers/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllCustomerQuery,
  useGetCustomerByIdQuery,
  useDeleteCustomerByIDMutation,
} = customerApi;
