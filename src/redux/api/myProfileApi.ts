import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const profile = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyProfile: build.query({
      query: () => ({
        url: "user/profile/me",
        method: "GET",
      }),
      providesTags: [tagTypes.profile],
    }),
    updateMyProfile: build.mutation({
      query: (data) => ({
        url: "user/profile/update-my-profile",
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.profile],
    }),
  }),
});

export const { useGetMyProfileQuery, useUpdateMyProfileMutation } = profile;
