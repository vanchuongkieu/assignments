import { ProductDto } from "./Product.dto";

export type OrderStatus =
  | "pending"
  | "progress"
  | "shipping"
  | "remove"
  | "done";

export interface OrderDto {
  _id?: string;
  name: string;
  phone: string;
  email: string;
  address: number;
  note: string;
  total: number;
  status: OrderStatus;
  carts: {
    product: ProductDto;
    quantity: number;
    total: number;
  }[];
}
