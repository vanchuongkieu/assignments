import Menu from "@/components/Menu";
import Title from "@/components/Title";
import Categories from "@/components/Categories";
import ListProduct from "@/components/ListProduct";
import banner from "@/assets/images/banner/banner.png";
import { StyledContainer } from "@/layouts/client/StyledLayout";
import productApi from "@/services/products.service";
import { HomeTop } from "./styled";
import img from "@/assets/images/category/category.png";
import img1 from "@/assets/images/category/category-1.png";
import img2 from "@/assets/images/category/category-2.png";
import img3 from "@/assets/images/category/category-3.png";
import img4 from "@/assets/images/category/category-4.png";
import img5 from "@/assets/images/category/category-5.png";
import img6 from "@/assets/images/category/category-6.png";
import img7 from "@/assets/images/category/category-7.png";
import img8 from "@/assets/images/category/category-8.png";
import img9 from "@/assets/images/category/category-9.png";
import img10 from "@/assets/images/category/category-10.png";
import img11 from "@/assets/images/category/category-11.png";
import img12 from "@/assets/images/category/category-12.png";
import img13 from "@/assets/images/category/category-13.png";
import img14 from "@/assets/images/category/category-14.png";
import img15 from "@/assets/images/category/category-15.png";
import img16 from "@/assets/images/category/category-16.png";
import img17 from "@/assets/images/category/category-17.png";
import img18 from "@/assets/images/category/category-18.png";
import img19 from "@/assets/images/category/category-19.png";
import img20 from "@/assets/images/category/category-20.png";
import img21 from "@/assets/images/category/category-21.png";
import img22 from "@/assets/images/category/category-22.png";
import img23 from "@/assets/images/category/category-23.png";
import img24 from "@/assets/images/category/category-24.png";
import img25 from "@/assets/images/category/category-25.png";
import img26 from "@/assets/images/category/category-26.png";

const phukiens = [
  {
    name: "Nổi bật",
    image: img,
  },
  {
    name: "Phụ kiện Apple",
    image: img1,
  },
  {
    name: "Dán màn hình",
    image: img2,
  },
  {
    name: "Ốp lưng - Bao da",
    image: img3,
  },
  {
    name: "Cáp, sạc",
    image: img4,
  },
  {
    name: "Pin dự phòng",
    image: img5,
  },
  {
    name: "Thiết bị mạng",
    image: img6,
  },
  {
    name: "Camera",
    image: img7,
  },
  {
    name: "Chuột, bàn phím",
    image: img8,
  },
  {
    name: "Thẻ nhớ, USB",
    image: img9,
  },
  {
    name: "Dây đeo Airtag",
    image: img10,
  },
  {
    name: "Apple Care",
    image: img11,
  },
  {
    name: "Gaming Gear",
    image: img12,
  },
  {
    name: "Phụ kiện chụp ảnh",
    image: img13,
  },
  {
    name: "Phụ kiện Laptop",
    image: img14,
  },
  {
    name: "Quạt mini",
    image: img15,
  },
  {
    name: "Balo, túi chống sốc",
    image: img16,
  },
  {
    name: "Dây đeo đồng hồ",
    image: img17,
  },
  {
    name: "Ổ cứng đi động",
    image: img18,
  },
];

const linhkiens = [
  {
    name: "PC ráp sẵn CellphoneS",
    image: img19,
  },
  {
    name: "CPU",
    image: img20,
  },
  {
    name: "Mainboard",
    image: img21,
  },
  {
    name: "RAM",
    image: img22,
  },
  {
    name: "Ổ cứng",
    image: img23,
  },
  {
    name: "Card màn hình",
    image: img24,
  },
  {
    name: "Nguồn máy tính",
    image: img25,
  },
  {
    name: "Tản nhiệt",
    image: img26,
  },
];

const Home = () => {
  const { data: homeData } = productApi.useHomeDataQuery();
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
      {homeData?.productsCategories.map((homedata, key) => (
        <section key={key}>
          <StyledContainer key={key}>
            <Title style={{ margin: "50px 0 20px" }}>
              {homedata.name} NỔI BẬT NHẤT
            </Title>
          </StyledContainer>
          <ListProduct col={7} products={homedata.products} />
        </section>
      ))}
      <StyledContainer>
        <Categories bg data={phukiens} title="PHỤ KIỆN" />
        <Categories data={linhkiens} title="LINH KIỆN MÁY TÍNH" />
      </StyledContainer>
    </>
  );
};

export default Home;
