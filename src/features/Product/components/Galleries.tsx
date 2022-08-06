import { useState } from "react";
import * as S from "../styled";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/bundle";
import { Navigation, Thumbs } from "swiper";
import { StarOutlineIcon } from "@/assets/icons";

type Props = {
  galleries?: string[];
};

const Galleries = ({ galleries }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();
  return (
    <S.SwiperWrapper>
      <Swiper
        spaceBetween={10}
        navigation={false}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Thumbs]}
        className="main-swiper"
      >
        {galleries?.map((gallery, index) => (
          <SwiperSlide key={index}>
            <img src={gallery} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        cssMode={true}
        navigation={true}
        modules={[Navigation, Thumbs]}
        className="thumbs"
      >
        {galleries?.map((gallery, index) => (
          <SwiperSlide key={index}>
            <img src={gallery} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <StarOutlineIcon />
          <span>Tình năng nổi bật</span>
        </SwiperSlide>
      </Swiper>
    </S.SwiperWrapper>
  );
};

export default Galleries;
