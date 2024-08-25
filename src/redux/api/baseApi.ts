import { axiosBaseQuery } from "@/helpers/axios/axiosbaseQuery";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/v1/" }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
