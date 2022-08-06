import { http } from "./httpOption";
import { ProductDto } from "./dtos/Product.dto";

class ProductService {
  search(keyword: string) {
    return http.post<ProductDto[]>("/products/search-products", { keyword });
  }
  upload(payload: FormData) {
    return http.post<string>(`/upload/single-upload`, payload);
  }
}

export default new ProductService();
