import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src="public/bat2.png" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="/bat3.png" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="/bat4.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
