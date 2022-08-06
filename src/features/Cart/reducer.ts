import { ProductDto } from "./../../services/dtos/Product.dto";
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";

type CartState = {
  carts: {
    product: ProductDto;
    quantity: number;
    total: number;
  }[];
  total: number;
};

const initialState: CartState = {
  carts: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<ProductDto | undefined>) => {
      const cartExist = state.carts.find(
        ({ product }) => product._id === payload?._id
      );
      if (cartExist) {
        cartExist.quantity++;
        const { new_price, price } = cartExist.product;
        cartExist.total =
          new_price > 0
            ? cartExist.quantity * new_price
            : cartExist.quantity * price;
      } else {
        state.carts.push({
          product: payload!,
          quantity: 1,
          total: payload?.new_price! || payload?.price!,
        });
      }
      state.total = state.carts.reduce((total, current) => {
        return total + current.total;
      }, 0);
    },
    increase: (state, { payload }: PayloadAction<string | undefined>) => {
      const current = state.carts.find(
        ({ product }) => product._id === payload
      );
      if (current) {
        current.quantity++;
        const { new_price, price } = current.product;
        current.total =
          new_price > 0
            ? current.quantity * new_price
            : current.quantity * price;
      }
      state.total = state.carts.reduce((total, current) => {
        return total + current.total;
      }, 0);
    },
    change: (
      state,
      { payload }: PayloadAction<{ id?: string; quantity: number }>
    ) => {
      const current = state.carts.find(
        ({ product }) => product._id === payload?.id
      );
      if (current) {
        current.quantity = payload.quantity < 1 ? 1 : payload.quantity;
        const { new_price, price } = current.product;
        current.total =
          new_price > 0
            ? current.quantity * new_price
            : current.quantity * price;
      }
      state.total = state.carts.reduce((total, current) => {
        return total + current.total;
      }, 0);
    },
    decrease: (state, { payload }: PayloadAction<string | undefined>) => {
      const current = state.carts.find(
        ({ product }) => product._id === payload
      );
      if (current) {
        current.quantity--;
        if (current.quantity < 1) current.quantity = 0;
        const { new_price, price } = current.product;
        current.total =
          new_price > 0
            ? current.quantity * new_price
            : current.quantity * price;
      }
      state.total = state.carts.reduce((total, current) => {
        return total + current.total;
      }, 0);
    },
    remove: (state, { payload }: PayloadAction<string | undefined>) => {
      const currentIndex = state.carts.findIndex(
        ({ product }) => product._id === payload
      );
      state.carts.splice(currentIndex, 1);
      state.total = state.carts.reduce((total, current) => {
        return total + current.total;
      }, 0);
    },
  },
});

export const CartTotalSelector = (state: RootState) => state.cart.carts.length;
export const CartSelector = (state: RootState) => state.cart;
export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
