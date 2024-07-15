import { baseApi } from "./baseApi";

const newPetPost = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPetPost: build.mutation({
      query: (data) => ({
        url: "pets/add-a-pet",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
    }),
  }),
});

export const { useCreatePetPostMutation } = newPetPost;
