import Categories from "@/components/Categories";
import Menu from "@/components/Menu";
import ListProduct from "@/components/Product/List";
import Title from "@/components/Title";
import { StyledContainer } from "@/layouts/client/StyledLayout";
import categoryService from "@/services/category.service";
import { ProductDto } from "@/services/dtos/Product.dto";
import { useEffect, useState } from "react";
import styled from "styled-components";

import banner from "../assets/images/banner/banner.png";

const HomeTop = styled.div`
  display: flex;
  gap: 50px;
  margin: 15px 0 50px;

  & img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    user-select: none;
  }
`;

type Props = {};

const Home = (props: Props) => {
  const [products, setProducts] = useState<ProductDto[]>();

  const fetchProductData = async () => {
    const { data } = await categoryService.get_product(1);
    setProducts(data);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      <StyledContainer>
        <HomeTop>
          <Menu />
          <div style={{ flex: 1 }}>
            <img src={banner} alt="" draggable={false} />
          </div>
        </HomeTop>
      </StyledContainer>
      <div>
        <StyledContainer>
          <Title>ĐIỆN THOẠI NỔI BẬT NHẤT</Title>
        </StyledContainer>
        <ListProduct col={7} products={products} />
      </div>
      <StyledContainer>
        <Categories title="PHỤ KIỆN" />
        <Categories title="LINH KIỆN MÁY TÍNH" />
      </StyledContainer>
    </div>
  );
};

export default Home;
