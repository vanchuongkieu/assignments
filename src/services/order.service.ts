import { OrderDto, OrderStatus } from "./dtos/Order.dto";
import { baseApi } from "./httpOption";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userOrder: builder.mutation<OrderDto, OrderDto>({
      query: (body) => ({
        url: "/order/user-order",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Orders"],
    }),
    filterOrder: builder.mutation<OrderDto[], { status: OrderStatus }>({
      query: (body) => ({
        url: "/order/filter-order",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Orders"],
    }),
    updateStatusOrder: builder.mutation<OrderDto, OrderDto>({
      query: (body) => ({
        url: "/order/update-status-order/" + body._id,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Orders"],
    }),
    listOrder: builder.query<OrderDto[], void>({
      query: () => ({
        url: "/order/list-order",
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),
  }),
});

export default orderApi;
