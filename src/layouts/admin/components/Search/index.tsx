import { SearchIcon } from "@/assets/icons";
import { useEffect, useState } from "react";
import { StyledSearch, StyledSearchResult } from "./StyledSearch";
import { debounce } from "lodash";
import { ProductDto } from "@/services/dtos/Product.dto";
import productServices from "@/services/product.services";
import { Link } from "react-router-dom";

type Props = {};
type TimeOut = ReturnType<typeof setTimeout>;

const Search = (props: Props) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchData, setSearchData] = useState<ProductDto[]>([]);

  const debounceDropDown = debounce(setSearchValue, 500);

  const fetchDataSearch = async () => {
    setOpen(!!searchValue);
    setLoading(!searchValue);
    if (!searchValue) return setSearchData([]);
    productServices.search(searchValue).then(({ data }) => {
      setSearchData(data);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
  };

  useEffect(() => {
    fetchDataSearch();
  }, [searchValue]);

  useEffect(() => {
    document.addEventListener("click", (e: any) => {
      const search = document.getElementById("searchId");
      if (!search?.contains(e.target)) {
        setOpen(false);
      }
    });
  }, []);

  return (
    <StyledSearch search={isOpen} id="searchId">
      <form className="search-form">
        <input
          type="text"
          className="search-form-input"
          placeholder="Nhập từ khóa tìm kiếm..."
          onFocus={() => setOpen(!!searchValue)}
          onKeyUp={(e) => debounceDropDown(e.target.value)}
        />
        <div className="search-form-icon">
          <SearchIcon />
        </div>
      </form>
      {isOpen && (
        <StyledSearchResult>
          {isLoading ? (
            <a>Đang tìm kiếm...</a>
          ) : searchData.length ? (
            searchData.map((product) => (
              <Link
                key={product._id}
                to={`/admin/product/${product._id}/edit`}
                onClick={() => setOpen(false)}
              >
                {product.name}
              </Link>
            ))
          ) : (
            <a>Không có kết quả với từ khóa: "{searchValue}"</a>
          )}
        </StyledSearchResult>
      )}
    </StyledSearch>
  );
};

export default Search;
