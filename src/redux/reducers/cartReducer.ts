import {
  CartProduct,
  DECREASE_UPDATE_CART,
  INCREASE_UPDATE_CART,
} from "@/redux/actions/cartAction";
import { RootState } from "./../store";
import { CartAction, ADD_TO_CART, UPDATE_CART } from "./../actions/cartAction";

export type CartState = {
  carts: CartProduct[];
  total: number;
};

const initialState: CartState = {
  carts: [],
  total: 0,
};

const totalPrice = (carts: CartProduct[]) => {
  return carts.reduce((price: number, current: CartProduct) => {
    if (current.new_price) {
      return price + current.new_price * current.quantity;
    }
    return price + current.price * current.quantity;
  }, 0);
};

const cartReducer = function (state = initialState, action: CartAction) {
  switch (action.type) {
    case ADD_TO_CART:
      const findIndex = state.carts.findIndex(
        (item) => item._id === action.payload._id
      );
      if (findIndex < 0) {
        state.carts.push(action.payload);
      } else {
        state.carts[findIndex].quantity++;
      }
      return { ...state, total: totalPrice(state.carts) };
    case UPDATE_CART:
      const findgUpdateIndex = state.carts.findIndex(
        (item) => item._id === action.payload._id
      );
      state.carts[findgUpdateIndex] = action.payload;
      if (state.carts[findgUpdateIndex].quantity < 1) {
        state.carts.splice(findgUpdateIndex, 1);
      }
      return {
        ...state,
        total: totalPrice(state.carts),
      };
    case DECREASE_UPDATE_CART:
      const findgDecreaseIndex = state.carts.findIndex(
        (item) => item._id === action.payload._id
      );
      state.carts[findgDecreaseIndex].quantity--;
      if (state.carts[findgDecreaseIndex].quantity < 1) {
        state.carts.splice(findgDecreaseIndex, 1);
      }
      return {
        ...state,
        total: totalPrice(state.carts),
      };
    case INCREASE_UPDATE_CART:
      const findgIncreaseIndex = state.carts.findIndex(
        (item) => item._id === action.payload._id
      );
      state.carts[findgIncreaseIndex].quantity++;
      return {
        ...state,
        total: totalPrice(state.carts),
      };
    default:
      return state;
  }
};

export const cart = (state: RootState) => state.cart;
export const cartLength = (state: RootState) => state.cart.carts.length;
export default cartReducer;
