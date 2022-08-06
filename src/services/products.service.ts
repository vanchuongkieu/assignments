import { HomeDataDto, ProductDto } from "@/services/dtos/Product.dto";
import { baseApi } from "./httpOption";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    productList: builder.query<ProductDto[], void>({
      query: () => "/products",
      providesTags: ["Products"],
    }),
    homeData: builder.query<HomeDataDto, void>({
      query: () => "/products/home-data",
      providesTags: ["Products"],
    }),
    productRelated: builder.query<ProductDto[], string | undefined>({
      query: (ascii) => `/products/get-product-related/${ascii}`,
      providesTags: ["Products"],
    }),
    filterProducts: builder.query<ProductDto[], string>({
      query: (ascii) => `/products/find-product-by-category/${ascii}`,
      providesTags: ["Products"],
    }),
    productSelectedAscii: builder.query<ProductDto, string | undefined>({
      query: (ascii) => `/products/find-product-by-ascii/${ascii}`,
      providesTags: ["Products"],
    }),
    productSelectedId: builder.query<ProductDto, string | undefined>({
      query: (id) => `/products/find-product-by-id/${id}`,
      providesTags: ["Products"],
    }),
    updateStatus: builder.mutation<ProductDto, ProductDto>({
      query: (body) => ({
        url: `/products/update-status-product/${body._id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Products"],
    }),
    updateProduct: builder.mutation<ProductDto, ProductDto>({
      query: (body) => ({
        url: `/products/update-product/${body._id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Products"],
    }),
    createProduct: builder.mutation<ProductDto, ProductDto>({
      query: (body) => ({
        url: "/products/create-product",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export default productApi;
