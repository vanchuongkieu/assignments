import React from "react";
import {
  StyledContainer,
  StyledGrid,
  StyledList,
  StyledListItem,
  StyledMark,
} from "../../StyledLayout";
import {
  StyledCopyright,
  StyledFooter,
  StyledFooterBottom,
  StyledFooterTop,
} from "./StyledFooter";

import Image1 from "@/assets/images/footer/footer-icon-1.png";
import Image2 from "@/assets/images/footer/footer-icon-2.png";
import Image3 from "@/assets/images/footer/footer-icon-3.png";
import Image4 from "@/assets/images/footer/footer-icon-4.png";
import Image5 from "@/assets/images/footer/footer-icon-5.png";
import Image6 from "@/assets/images/footer/footer-icon-6.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterTop>
        <StyledContainer>
          <StyledGrid col={4}>
            <StyledList>
              <StyledListItem isTitle style={{ marginBottom: "10px" }}>
                Tìm cửa hàng
              </StyledListItem>
              <StyledListItem>
                <Link to="/">Tìm cửa hàng gần nhất</Link>
              </StyledListItem>
              <StyledListItem>
                <Link to="/">Mua hàng từ xa</Link>
              </StyledListItem>
              <StyledListItem isActive>
                <Link to="/">
                  Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)
                </Link>
              </StyledListItem>
              <StyledListItem isTitle style={{ margin: "10px 0 8px 0" }}>
                <Link to="/">Phương thức thanh toán</Link>
              </StyledListItem>
              <StyledListItem>
                <div className="image">
                  <img src={Image2} alt="" />
                  <img src={Image4} alt="" />
                  <img src={Image3} alt="" />
                  <img src={Image5} alt="" />
                  <img src={Image6} alt="" />
                </div>
              </StyledListItem>
            </StyledList>
            <StyledList>
              <StyledListItem>
                <a href="tel:18002044">
                  Gọi mua hàng: 1800.2044 (8h00 - 22h00)
                </a>
              </StyledListItem>
              <StyledListItem>
                <a href="tel:18002063">
                  Gọi khiếu nại: 1800.2063 (8h00 - 21h30)
                </a>
              </StyledListItem>
              <StyledListItem>
                <a href="tel:18002064">
                  Gọi bảo hành: 1800.2064 (8h00 - 21h00)
                </a>
              </StyledListItem>
              <StyledListItem isTitle style={{ marginTop: "10px" }}>
                Đối tác dịch vụ bảo hành
              </StyledListItem>
              <StyledListItem>
                <Link to="/">Điện Thoại - Máy tính</Link>
              </StyledListItem>
              <StyledListItem isTitle style={{ marginTop: "20px" }}>
                Trung tâm bảo hành uỷ quyền Apple
              </StyledListItem>
              <StyledListItem>
                <div className="image">
                  <img src={Image1} alt="" />
                </div>
              </StyledListItem>
            </StyledList>
            <StyledList>
              <StyledListItem>
                <Link to="/">Mua hàng và thanh toán Online</Link>
              </StyledListItem>
              <StyledListItem>
                <Link to="/">Mua hàng trả góp Online</Link>
              </StyledListItem>
              <StyledListItem>
                <Link to="/">Tra thông tin đơn hàng</Link>
              </StyledListItem>
              <StyledListItem>
                <Link to="/">Tra điểm Smember</Link>
              </StyledListItem>
              <StyledListItem>
                <Link to="/">Tra thông tin bảo hành</Link>
              </StyledListItem>
              <StyledListItem>
                <Link to="/">Tra cứu hoá đơn VAT điện tử</Link>
              </StyledListItem>
              <StyledListItem>
                <Link to="/">Trung tâm bảo hành chính hãng</Link>
              </StyledListItem>
              <StyledListItem>
                <Link to="/">Quy định về việc sao lưu dữ liệu</Link>
              </StyledListItem>
              <StyledListItem isActive>
                <Link to="/">Dịch vụ bảo hành điện thoại</Link>
              </StyledListItem>
            </StyledList>
            <StyledList>
              <StyledListItem>
                <Link to="/">Quy chế hoạt động</Link>
              </StyledListItem>
              <StyledListItem>
                <Link to="/">Chính sách Bảo hành</Link>
              </StyledListItem>
              <StyledListItem>
                <Link to="/">Liên hệ hợp tác kinh doanh</Link>
              </StyledListItem>
              <StyledListItem>
                <Link to="/">Khách hàng doanh nghiệp (B2B)</Link>
              </StyledListItem>
              <StyledListItem isActive>
                <Link to="/">Ưu đãi thanh toán</Link>
              </StyledListItem>
              <StyledListItem>
                <Link to="/">Tuyển dụng</Link>
              </StyledListItem>
            </StyledList>
          </StyledGrid>
        </StyledContainer>
      </StyledFooterTop>
      <StyledFooterBottom>
        <StyledContainer>
          <StyledGrid col={3} gap={20}>
            <StyledList flex>
              <StyledListItem>
                <Link to="/">Điện thoại iPhone 13</Link>
              </StyledListItem>
              <StyledListItem>
                <StyledMark /> <Link to="/">Điện thoại iPhone 12</Link>
              </StyledListItem>
              <StyledListItem>
                <StyledMark /> <Link to="/">Điện thoại iPhone 11</Link>
              </StyledListItem>
              <StyledListItem>
                <Link to="/">Điện thoại iPhone 13 Pro Max</Link>
              </StyledListItem>
              <StyledListItem>
                <StyledMark /> <Link to="/">Điện thoại iPhone 11 Pro Max</Link>
              </StyledListItem>
              <StyledListItem>
                <Link to="/">iPhone cũ giá rẻ</Link>
              </StyledListItem>
              <StyledListItem>
                <StyledMark /> <Link to="/">iPhone 13 cũ</Link>
              </StyledListItem>
              <StyledListItem>
                <StyledMark />
                <Link to="/">iPhone 12 cũ</Link>
              </StyledListItem>
              <StyledListItem>
                <StyledMark /> <Link to="/">iPhone 11 cũ</Link>
              </StyledListItem>
            </StyledList>
            <StyledList flex>
              <StyledListItem>
                <Link to="/">Điện thoại iPhone</Link>
              </StyledListItem>
              <StyledListItem>
                <StyledMark /> <Link to="/">Điện thoại Samsung</Link>
              </StyledListItem>
              <StyledListItem>
                <StyledMark /> <Link to="/">Điện thoại Samsung A</Link>
              </StyledListItem>
              <StyledListItem>
                <Link to="/">Điện thoại OPPO</Link>
              </StyledListItem>
              <StyledListItem>
                <StyledMark /> <Link to="/">Điện thoại Xiaomi</Link>
              </StyledListItem>
              <StyledListItem>
                <StyledMark /> <Link to="/">Điện thoại Vivo</Link>
              </StyledListItem>
              <StyledListItem>
                <StyledMark /> <Link to="/">Điện thoại Nokia</Link>
              </StyledListItem>
              <StyledListItem>
                <Link to="/">Samsung Fold 3</Link>
              </StyledListItem>
              <StyledListItem>
                <StyledMark /> <Link to="/">Samsung S22</Link>
              </StyledListItem>
              <StyledListItem>
                <StyledMark />
                <Link to="/">Samsung A73</Link>
              </StyledListItem>
              <StyledListItem>
                <StyledMark />
                <Link to="/">Samsung A53</Link>
              </StyledListItem>
            </StyledList>
            <StyledList flex>
              <StyledListItem>
                <Link to="/">Laptop</Link>
              </StyledListItem>
              <StyledListItem>
                <StyledMark /> <Link to="/">Laptop HP</Link>
              </StyledListItem>
              <StyledListItem>
                <StyledMark /> <Link to="/">Laptop Dell</Link>
              </StyledListItem>
              <StyledListItem>
                <StyledMark /> <Link to="/">Laptop Acer</Link>
              </StyledListItem>
              <StyledListItem>
                <StyledMark /> <Link to="/">Microsoft Surface</Link>
              </StyledListItem>
              <StyledListItem>
                <Link to="/">Laptop Lenovo</Link>
              </StyledListItem>
              <StyledListItem>
                <StyledMark /> <Link to="/">Laptop Asus</Link>
              </StyledListItem>
              <StyledListItem>
                <StyledMark /> <Link to="/">Máy tính để bàn</Link>
              </StyledListItem>
              <StyledListItem>
                <StyledMark /> <Link to="/">Màn hình máy tính</Link>
              </StyledListItem>
              <StyledListItem>
                <Link to="/">Camera</Link>
              </StyledListItem>
              <StyledListItem>
                <StyledMark /> <Link to="/">Camera hành trình</Link>
              </StyledListItem>
            </StyledList>
          </StyledGrid>
          <StyledCopyright>
            Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD:
            0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ:
            350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh,
            Việt Nam. Điện thoại: 028.7108.9666.
          </StyledCopyright>
        </StyledContainer>
      </StyledFooterBottom>
    </StyledFooter>
  );
};

export default Footer;
