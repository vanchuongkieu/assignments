import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

let apiUrl = "http://localhost:5000";

if (process.env.NODE_ENV === "production") {
  apiUrl = "https://chuong-nodejs-asm.vercel.app/";
}

export const http = axios.create({
  baseURL: apiUrl,
  timeout: 30000,
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
  }),
  tagTypes: ["Categories", "Products", "Orders", "Users"],
  endpoints: () => ({}),
});
