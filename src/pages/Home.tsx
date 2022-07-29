import Categories from "@/components/Categories";
import Menu from "@/components/Menu";
import ListProduct from "@/components/Product/List";
import Title from "@/components/Title";
import { StyledContainer } from "@/layouts/client/StyledLayout";
import { HomeDataDto } from "@/services/dtos/Product.dto";
import productServices from "@/services/product.services";
import { useEffect, useState } from "react";
import styled from "styled-components";

import banner from "../assets/images/banner/banner.png";

const HomeTop = styled.div`
  display: flex;
  gap: 50px;
  margin: 15px 0 0;

  & img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    user-select: none;
  }
`;

type Props = {};

const Home = (props: Props) => {
  const [homedatas, setHomeDatas] = useState<HomeDataDto>();

  const fetchHomeData = async () => {
    const { data } = await productServices.get_home_data();
    setHomeDatas(data);
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  return (
    <>
      <StyledContainer>
        <HomeTop>
          <Menu />
          <div style={{ flex: 1 }}>
            <img src={banner} alt="" draggable={false} />
          </div>
        </HomeTop>
      </StyledContainer>
      <div>
        {homedatas?.productsCategories.map((homedata, key) => (
          <section key={key}>
            <StyledContainer>
              <Title style={{ margin: "50px 0 20px" }}>
                {homedata.name} NỔI BẬT NHẤT
              </Title>
            </StyledContainer>
            <ListProduct col={7} products={homedata.products} />
          </section>
        ))}
      </div>
      <StyledContainer>
        <Categories title="PHỤ KIỆN" />
        <Categories title="LINH KIỆN MÁY TÍNH" />
      </StyledContainer>
    </>
  );
};

export default Home;
