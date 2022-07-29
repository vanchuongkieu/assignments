import { StarIcon, ShoppingCartIcon } from "@/assets/icons";
import { addCart } from "@/redux/actions/cartAction";
import { useAppDispatch } from "@/redux/hooks";
import { ProductDto } from "@/services/dtos/Product.dto";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  padding: 8px 10px;
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

const AddToCartButton = styled.button`
  margin-top: auto;
  width: 30px;
  height: 30px;
  background-color: red;
  border: 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  cursor: pointer;
  svg {
    fill: #fff;
    width: 22px;
    height: 22px;
  }
`;

type Props = {
  product: ProductDto;
  basic?: boolean;
  cartButton?: boolean;
};

const Item = ({ product, basic, cartButton }: Props) => {
  const dispatch = useAppDispatch();

  const currency = (value: number) => {
    return value.toLocaleString("it-IT") + " đ";
  };

  return (
    <StyledItem>
      <Image>
        <Link to={`/product/${product.name_ascii}`}>
          <img draggable={false} src={product.image} alt={product.name} />
        </Link>
      </Image>
      <Title>
        <Link to={`/product/${product.name_ascii}`}>{product.name}</Link>
      </Title>
      <Price>
        {product.new_price ? (
          <>
            <span>{currency(product.new_price)}</span>
            <span>{currency(product.price)}</span>
          </>
        ) : (
          <span>{currency(product.price)}</span>
        )}
      </Price>
      {!cartButton ? (
        <>
          {!basic && (
            <Description>
              <span>{product.short_description}</span>
            </Description>
          )}
          <Ratting>
            <div className="star">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <a>{Math.floor(Math.random() * 70)} đánh giá</a>
          </Ratting>
        </>
      ) : (
        <AddToCartButton onClick={() => dispatch(addCart(product))}>
          <ShoppingCartIcon />
        </AddToCartButton>
      )}
    </StyledItem>
  );
};

export default Item;
