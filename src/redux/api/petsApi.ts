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
    getMyPetPosts: build.query({
      query: () => ({
        url: "pets/my-pet-posts",
        method: "GET",
      }),
      providesTags: [tagTypes.pets],
    }),
    getSinglePet: build.query({
      query: (id) => ({
        url: `pets/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.pets],
    }),
    getAllPet: build.query({
      query: () => ({
        url: "pets/all",
        method: "GET",
      }),
      providesTags: [tagTypes.pets],
    }),
    updatePetPost: build.mutation({
      query: (data) => ({
        url: `pets/${data.id}/status`,
        method: "PUT",
        data,
      }),
      invalidatesTags: [tagTypes.pets],
    }),
  }),
});

export const { useCreatePetPostMutation, useGetMyPetPostsQuery, useGetAllPetQuery, useUpdatePetPostMutation, useGetSinglePetQuery } = pets;
