import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const adoption = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllAdoptionRequests: build.query({
      query: () => ({
        url: "adoption-request/all-adoption-request",
        method: "GET",
      }),
      providesTags: [tagTypes.adoption],
    }),
    createAdoptionRequest: build.mutation({
      query: (data) => ({
        url: "adoption-request/post-a-request",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.adoption],
    }),
    // change status of adoption request
    updateAdoptionRequestStatus: build.mutation({
      query: (data) => ({
        url: `adoption-request/adoption-requests/${data.id}`,
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        data,
      }),
      invalidatesTags: [tagTypes.adoption],
    }),
  }),
});

export const {
  useGetAllAdoptionRequestsQuery,
  useCreateAdoptionRequestMutation,
  useUpdateAdoptionRequestStatusMutation,
} = adoption;
