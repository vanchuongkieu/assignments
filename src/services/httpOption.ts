import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const http = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 30000,
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["Categories", "Products", "Orders", "Users"],
  endpoints: () => ({}),
});
