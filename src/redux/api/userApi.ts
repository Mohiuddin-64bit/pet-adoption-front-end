import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUser: build.query({
      query: () => ({
        url: "user",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    updateUserRole: build.mutation({
      query: (data: { userId: string; role: string }) => ({
        url: `user/update-role-status/${data.userId}`,
        method: "PATCH",
        data: { role: data?.role },
        // data: data?.role,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    deleteUser: build.mutation({
      query: (userId: string) => ({
        url: `user/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useUpdateUserRoleMutation,
  useDeleteUserMutation,
} = userApi;
