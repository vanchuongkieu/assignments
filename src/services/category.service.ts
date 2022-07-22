import { ProductDto } from "@/services/dtos/Product.dto";
import { CategoryDto } from "./dtos/Category.dto";
import http from "./httpOption";

class CategoryService {
  all() {
    return http.get<CategoryDto[]>("/categories");
  }
  get(id: number): Promise<CategoryDto> {
    return http.get(`/categories/${id}`);
  }
  get_product(id: number) {
    return http.get<ProductDto[]>(`/categories/${id}/products?status=true`);
  }
  add(payload: CategoryDto) {
    return http.post<CategoryDto>(`/categories`, payload);
  }
  edit(payload: CategoryDto) {
    return http.put<CategoryDto>(`/categories/${payload.id}`, payload);
  }
}

export default new CategoryService();
