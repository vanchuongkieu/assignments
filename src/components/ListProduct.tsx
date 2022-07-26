import { StarIcon } from "@/assets/icons";
import commentApi from "@/services/comment.service";
import { ProductDto } from "@/services/dtos/Product.dto";
import utils from "@/utils";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledList = styled.div<{ col?: number; basic?: boolean }>`
  display: inline-grid;
  ${(props) =>
    css`
      grid-template-columns: repeat(
        ${props.col ? props.col : 4},
        minmax(0, 1fr)
      );
      gap: 15px;
      margin: ${!props.basic && "0 70px"};
    `}
  @media (max-width: 1300px) {
    margin: 0 15px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  @media (max-width: 1600px) {
    margin: 0 15px;
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`;

const StyledItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  border-radius: 5px;
  box-shadow: 0px 1px 2px rgba(60, 64, 67, 0.1);
`;

const Image = styled.div`
  width: 100%;
  padding: 10px 40px;
  text-align: center;
  & img {
    max-width: 160px;
    height: 160px;
    width: 100%;
    object-fit: cover;
  }

  & a {
    display: block;
  }
`;

const Title = styled.div`
  & a {
    color: #444444;
  }
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 33px;
  word-break: break-all;
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  & span {
    &:first-child {
      color: var(--red-2);
      font-size: 16px;
    }
    color: #707070;
  }
`;

const Description = styled.div`
  border: 1px solid var(--gray-4);
  background-color: var(--gray-3);
  padding: 5px 10px 3px;
  font-size: 12px;
  line-height: 1.35;
  margin: 10px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
`;

const Ratting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  margin-top: auto;
  & .star {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & svg {
      width: 14px;
      height: 14px;
    }
  }
  & a {
    color: #444444;
  }
`;

type Props = {
  col?: number;
  products?: ProductDto[];
  basic?: boolean;
  style?: React.CSSProperties;
  cartButton?: boolean;
};

const ListProduct = ({ col, products, basic, style }: Props) => {
  const { data: ratting } = commentApi.useListAllRattingQuery();
  return (
    <StyledList style={style} col={col} basic={basic}>
      {products?.map((product) => (
        <StyledItem key={product._id}>
          <Image>
            <Link to={`/${product.name_ascii}`}>
              <img draggable={false} src={product.image} alt={product.name} />
            </Link>
          </Image>
          <Title>
            <Link to={`/${product.name_ascii}`}>{product.name}</Link>
          </Title>
          <Price>
            {product.new_price ? (
              <>
                <span>{utils.currency(product.new_price)}</span>
                <span>{utils.currency(product.price)}</span>
              </>
            ) : (
              <span>{utils.currency(product.price)}</span>
            )}
          </Price>
          {!basic && (
            <Description>
              <span>{product.short_description}</span>
            </Description>
          )}
          {ratting && (
            <Ratting>
              <div className="star">
                {[
                  ...Array(
                    Math.round(
                      utils.countStar(
                        ratting.filter((x) => x.product == product._id)
                      ).middle
                    )
                  ),
                ].map((item, key) => (
                  <StarIcon key={key} />
                ))}
              </div>
              <a>
                {utils.countStar(
                  ratting.filter((x) => x.product == product._id)
                ).count + " đánh giá"}
              </a>
            </Ratting>
          )}
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default ListProduct;
