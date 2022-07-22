import { ProductDto } from "@/services/dtos/Product.dto";
import styled, { css } from "styled-components";
import Item from "./Item";

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

type Props = {
  col?: number;
  products?: ProductDto[];
  basic?: boolean;
};

const List = ({ col, products, basic }: Props) => {
  return (
    <StyledList col={col} basic={basic}>
      {products?.map((product) => (
        <Item product={product} key={product._id} basic={basic} />
      ))}
    </StyledList>
  );
};

export default List;
