import http from "./httpOption";
import { ProductDto } from "./dtos/Product.dto";

class ProductService {
  all() {
    return http.get<ProductDto[]>("/products");
  }
  search(keyword: string) {
    return http.get<ProductDto[]>(
      "/products?name_like=" + keyword + "&_limit=10"
    );
  }
  all_active() {
    return http.get<ProductDto[]>("/products?status=true");
  }
  filter_by_category(id: number) {
    return http.get<ProductDto[]>(`/products?category=${id}`);
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
