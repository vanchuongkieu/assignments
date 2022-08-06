import { type } from "os";
import { CategoryDto } from "./Category.dto";

export interface ProductDto {
  _id?: string;
  name: string;
  image: string;
  price: number;
  new_price: number;
  name_ascii: string;
  description: string;
  short_description: string;
  outstanding_features: string;
  category: CategoryDto;
  status: boolean;
}

type CategoyProduct = CategoryDto & {
  products: ProductDto[];
};

export interface HomeDataDto {
  productsCategories: CategoyProduct[];
}
