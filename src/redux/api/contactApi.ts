import { baseApi } from "./baseApi";

const contact = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createContact: build.mutation({
      query: (data) => ({
        url: "contacts",
        method: "POST",
        data,
      }),
    }),
  }),
});

export const {useCreateContactMutation} = contact;