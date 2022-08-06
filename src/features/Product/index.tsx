import Title from "@/components/Title";
import { StyledContainer } from "@/layouts/client/StyledLayout";
import { ProductDto } from "@/services/dtos/Product.dto";
import productServices from "@/services/product.services";
import ListProduct from "@/components/ListProduct";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartAction } from "../Cart/reducer";
import * as S from "./styled";
import Galleries from "./components/Galleries";
import utils from "@/utils";
import { Button, message } from "antd";
import { ShoppingCartIcon } from "@/assets/icons";
import productApi from "@/services/products.service";

const Product = () => {
  const { ascii } = useParams();
  const dispatch = useDispatch();
  const { data: product } = productApi.useProductSelectedAsciiQuery(ascii);
  const { data: productRelated } = productApi.useProductRelatedQuery(ascii);

  const addCart = (product: ProductDto) => {
    dispatch(cartAction.add(product));
    message.success("Thêm vào giỏ hàng thành công");
  };

  return (
    <>
      <S.Breadcrumb>
        <StyledContainer className="container">
          <Link to="/">Trang chủ</Link>
          {product && (
            <>
              <Link to="/">{product.category.name}</Link>
              <Link to={`/${product.name_ascii}`}>{product.name}</Link>
            </>
          )}
        </StyledContainer>
      </S.Breadcrumb>
      <S.Tilte>
        <StyledContainer className="container">
          {product && <Link to={product.name_ascii}>{product.name}</Link>}
        </StyledContainer>
      </S.Tilte>
      <StyledContainer>
        {product && (
          <S.Content>
            <Galleries galleries={[product.image]} />
            <S.Info>
              <div className="price">
                {product.new_price ? (
                  <>
                    <div className="price-old">
                      {utils.currency(product.new_price)}
                    </div>
                    <div className="price-sale">
                      {utils.currency(product.price)}
                    </div>
                    <div className="price-percent">
                      Giảm {utils.salePercent(product.price, product.new_price)}
                    </div>
                  </>
                ) : (
                  <div className="price-old">
                    {utils.currency(product.price)}
                  </div>
                )}
              </div>
              <S.ShortDescription
                dangerouslySetInnerHTML={{ __html: product.short_description }}
              />
              <S.ButtonGroup>
                <Button type="primary" danger>
                  Mua ngay
                </Button>
                <Button
                  icon={<ShoppingCartIcon />}
                  onClick={() => addCart(product)}
                  danger
                >
                  Thêm vào giỏ hàng
                </Button>
              </S.ButtonGroup>
            </S.Info>
          </S.Content>
        )}
        {productRelated && productRelated.length > 0 && (
          <>
            <StyledContainer>
              <Title style={{ margin: "50px 0 20px" }}>
                Sản phẩm cùng loại
              </Title>
            </StyledContainer>
            <ListProduct col={5} basic products={productRelated} />
          </>
        )}
        {product && (
          <>
            <S.OutstandingFeatures>
              <div className="title">đặc điểm nổi bật</div>
              {product.outstanding_features}
            </S.OutstandingFeatures>
            <S.Description
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </>
        )}
      </StyledContainer>
    </>
  );
};

export default Product;
