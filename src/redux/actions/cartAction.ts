import { ProductDto } from "@/services/dtos/Product.dto";

export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_CART = "UPDATE_CART";
export const INCREASE_UPDATE_CART = "INCREASE_UPDATE_CART";
export const DECREASE_UPDATE_CART = "DECREASE_UPDATE_CART";

export interface CartProduct extends ProductDto {
  quantity: number;
}

export type CartAction = {
  type: string;
  payload: CartProduct;
};

export const addCart = (payload: ProductDto) => {
  return {
    type: ADD_TO_CART,
    payload: { ...payload, quantity: 1 },
  };
};

export const updateCart = (payload: CartProduct) => {
  return {
    type: UPDATE_CART,
    payload,
  };
};

export const increaseUpdateCart = (payload: CartProduct) => {
  return {
    type: INCREASE_UPDATE_CART,
    payload,
  };
};

export const decreaseUpdateCart = (payload: CartProduct) => {
  return {
    type: DECREASE_UPDATE_CART,
    payload,
  };
};
