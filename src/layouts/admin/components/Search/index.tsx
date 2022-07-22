import { SearchIcon } from "@/assets/icons";
import { useCallback, useState } from "react";
import { StyledSearch, StyledSearchResult } from "./StyledSearch";
import { debounce } from "lodash";
import { ProductDto } from "@/services/dtos/Product.dto";
import productServices from "@/services/product.services";
import { Link } from "react-router-dom";

type Props = {};
type TimeOut = ReturnType<typeof setTimeout>;

const Search = (props: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchData, setSearchData] = useState<ProductDto[]>([]);

  const debounceDropDown = useCallback(
    debounce(async (nextValue) => {
      setSearchValue(nextValue);
      if (!nextValue) {
        setSearchData([]);
        return;
      }
      console.log(nextValue);

      const { data } = await productServices.search(nextValue);
      setSearchData(data);
    }, 500),
    []
  );

  return (
    <StyledSearch search={searchData.length > 0}>
      <form className="search-form">
        <input
          type="text"
          value={searchValue}
          className="search-form-input"
          placeholder="Nhập từ khóa tìm kiếm..."
          onKeyUp={(e) => debounceDropDown(e.target.value)}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className="search-form-icon">
          <SearchIcon />
        </div>
      </form>
      {searchData.length > 0 && (
        <StyledSearchResult>
          {searchData.map((product) => (
            <Link
              key={product.id}
              to={`/admin/product/${product.id}/edit`}
              onClick={() => {
                setSearchData([]);
                setSearchValue("");
              }}
            >
              {product.name}
            </Link>
          ))}
        </StyledSearchResult>
      )}
    </StyledSearch>
  );
};

export default Search;
