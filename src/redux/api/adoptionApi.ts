import { baseApi } from "./baseApi";

const adoption = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllAdoptionRequests: build.query({
      query: () => ({
        url: "adoption-request/all-adoption-request",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllAdoptionRequestsQuery } = adoption;