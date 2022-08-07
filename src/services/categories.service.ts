import { CategoryDto } from "./dtos/Category.dto";
import { baseApi } from "./httpOption";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    categoryList: builder.query<CategoryDto[], void>({
      query: () => "/categories",
      providesTags: ["Categories"],
    }),
    updateCategory: builder.mutation<CategoryDto, CategoryDto>({
      query: (body) => ({
        url: `/categories/update-category/${body._id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Categories"],
    }),
    createCategory: builder.mutation<CategoryDto, CategoryDto>({
      query: (body) => ({
        url: "/categories/create-category",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Categories"],
    }),
    updateCategoryStatus: builder.mutation<CategoryDto, CategoryDto>({
      query: (body) => {
        return {
          url: `/categories/update-status-category/${body._id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Categories"],
    }),
  }),
});

export default categoryApi;
