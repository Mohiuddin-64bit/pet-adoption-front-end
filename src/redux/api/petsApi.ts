import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const pets = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPetPost: build.mutation({
      query: (data) => ({
        url: "pets/add-a-pet",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.pets],
    }),
    getAllPetPosts: build.query({
      query: () => ({
        url: "pets/my-pet-posts",
        method: "GET",
      }),
      providesTags: [tagTypes.pets],
    }),
  }),
});

export const { useCreatePetPostMutation, useGetAllPetPostsQuery } = pets;
