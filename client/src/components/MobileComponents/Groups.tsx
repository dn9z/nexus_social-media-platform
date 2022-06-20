import * as React from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




const Group = styled.div`
  border: 1px solid black;
  width: 50px;
  height: 50px;
  
  border-radius: 50%;
  margin: 12px;
`;




const Groups: React.FC = () => {
  const context = React.useContext(Context);

  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination]}
    spaceBetween={2}
    slidesPerView={6}
    navigation
    // pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  
  >
    <SwiperSlide><Group></Group></SwiperSlide>
    <SwiperSlide><Group></Group></SwiperSlide>
    <SwiperSlide><Group></Group></SwiperSlide>
    <SwiperSlide><Group></Group></SwiperSlide>
    <SwiperSlide><Group></Group></SwiperSlide>
    <SwiperSlide><Group></Group></SwiperSlide>
    <SwiperSlide><Group></Group></SwiperSlide>
    <SwiperSlide><Group></Group></SwiperSlide>
    <SwiperSlide><Group></Group></SwiperSlide>
    <SwiperSlide><Group></Group></SwiperSlide>
    <SwiperSlide><Group></Group></SwiperSlide>
    <SwiperSlide><Group></Group></SwiperSlide>
    <SwiperSlide><Group></Group></SwiperSlide>
    <SwiperSlide><Group></Group></SwiperSlide>
    <SwiperSlide><Group></Group></SwiperSlide>
    <SwiperSlide><Group></Group></SwiperSlide>
    <SwiperSlide><Group></Group></SwiperSlide>
    <SwiperSlide><Group></Group></SwiperSlide>
    <SwiperSlide><Group></Group></SwiperSlide>
    <SwiperSlide><Group></Group></SwiperSlide>
    <SwiperSlide><Group></Group></SwiperSlide>
    <SwiperSlide><Group></Group></SwiperSlide>
  </Swiper>

  );
};

export default Groups;
