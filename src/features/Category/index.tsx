import { StyledContainer } from "@/layouts/client/StyledLayout";
import Title from "@/components/Title";
import { useParams } from "react-router-dom";
import ListProduct from "@/components/ListProduct";
import categoryApi from "@/services/categories.service";

type Props = {};

const Category = (props: Props) => {
  const { ascii } = useParams();
  const { data } = categoryApi.useCategoryAsciiProductQuery(ascii);
  return (
    <StyledContainer>
      <Title style={{ margin: "20px 0 20px" }}>{data?.category.name}</Title>
      <ListProduct col={5} basic products={data?.products} />
    </StyledContainer>
  );
};

export default Category;
