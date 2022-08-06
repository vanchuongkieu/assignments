import { LoginResponse, UserDto } from "./dtos/User.dto";
import { baseApi } from "./httpOption";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, { email: string; password: string }>(
      {
        query: (body) => ({
          url: "/auth/login",
          method: "POST",
          body,
        }),
      }
    ),
    register: builder.mutation<UserDto, UserDto>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export default authApi;
