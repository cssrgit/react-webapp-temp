import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import "./testimonial.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

import image1 from "../../images/portfolio1.jpg";

export default function Testimonial() {
  return (
    <section className="section section-testimonial">
      <div className="container">
        <h2 className="common-heading">Happy client works</h2>

        <Swiper
          slidesPerView={2}
          spaceBetween={50}
          autoplay={{ delay: 2000 }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={image1} alt="images" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image1} alt="images" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image1} alt="images" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image1} alt="images" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image1} alt="images" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image1} alt="images" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image1} alt="images" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image1} alt="images" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image1} alt="images" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
