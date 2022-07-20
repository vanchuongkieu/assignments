import http from "./httpOption";
import { ProductDto } from "./dtos/Product.dto";

class ProductService {
  all() {
    return http.get<ProductDto[]>("/products");
  }
  all_active() {
    return http.get<ProductDto[]>("/products?status=true");
  }
  all_by_category(id: number) {
    return http.get<ProductDto[]>(`/products?category=${id}&status=true`);
  }
  get(id?: string) {
    return http.get<ProductDto>(`/products/${id}`);
  }
  add(payload: ProductDto) {
    return http.post<ProductDto>(`/products`, payload);
  }
  edit(payload: ProductDto) {
    return http.put<ProductDto>(`/products/${payload.id}`, payload);
  }
}

export default new ProductService();
