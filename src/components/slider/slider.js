import React from 'react';
import './sliderCss.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation } from 'swiper';

import img from '../../assets/img/(11).png';

SwiperCore.use([Navigation]);



export default function Slider() {
  return (
    <div className="s_container">
      <div className="swiper">
        <Swiper
          spaceBetween={6}
          loop={true}
          slidesPerView={2}
          navigation={true} // Enable navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={img} alt="Slide 1" className="slide-image" />
            <div className="slide-description">Description 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} alt="Slide 2" className="slide-image" />
            <div className="slide-description">Description 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} alt="Slide 3" className="slide-image" />
            <div className="slide-description">Description 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} alt="Slide 4" className="slide-image" />
            <div className="slide-description">Description 4</div>
          </SwiperSlide>
        </Swiper>
        
      </div>
    </div>
  );
}

