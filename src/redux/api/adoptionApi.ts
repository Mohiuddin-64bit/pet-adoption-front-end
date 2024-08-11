import { create } from "domain";
import { baseApi } from "./baseApi";

const adoption = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllAdoptionRequests: build.query({
      query: () => ({
        url: "adoption-request/all-adoption-request",
        method: "GET",
      }),
    }),
    createAdoptionRequest: build.mutation({
      query: (data) => ({
        url: "adoption-request/post-a-request",
        method: "POST",
        data,
      }),
      // invalidatesTags: ["AdoptionRequest"],
    }),
  }),
});

export const { useGetAllAdoptionRequestsQuery, useCreateAdoptionRequestMutation } = adoption;
