import { CommentDto, CommnetRattingResponse } from "./dtos/Comment.dto";
import { baseApi } from "./httpOption";

const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    ratting: builder.mutation<CommentDto, CommentDto>({
      query: (body) => ({
        url: "/comment/ratting",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Ratting"],
    }),
    listRatting: builder.query<CommnetRattingResponse, string | undefined>({
      query: (product) => ({
        url: "/comment/list-ratting/" + product,
        method: "GET",
      }),
      providesTags: ["Ratting"],
    }),
    listAllRatting: builder.query<CommentDto[], void>({
      query: () => ({
        url: "/comment/list-all-ratting",
        method: "GET",
      }),
      providesTags: ["Ratting"],
    }),
    listCommnet: builder.query<CommentDto[], string | undefined>({
      query: (product) => ({
        url: "/comment/list-comment/" + product,
        method: "GET",
      }),
      providesTags: ["Ratting"],
    }),
  }),
});

export default commentApi;
