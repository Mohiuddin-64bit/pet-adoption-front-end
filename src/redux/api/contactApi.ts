import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const contact = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createContact: build.mutation({
      query: (data) => ({
        url: "contacts",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.contacts],
    }),
    getContacts: build.query({
      query: () => ({
        url: "contacts",
        method: "GET",
      }),
      providesTags: [tagTypes.contacts],
    }),
    deleteContact: build.mutation({
      query: (id) => ({
        url: `contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.contacts],
    }),
  }),
});

export const { useCreateContactMutation, useGetContactsQuery, useDeleteContactMutation } = contact;
 