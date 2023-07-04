import React from 'react';
import './sliderCss.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation } from 'swiper';


import img2 from '../../assets/img/black-back-sweater.jpg';
import img3 from '../../assets/img/closeup.jpg';
import img4 from '../../assets/img/blue-t-shirt.jpg';
import img5 from '../../assets/img/pink-sweater-front.jpg';

SwiperCore.use([Navigation]);



export default function Slider() {
  return (
    <div className="ss_container">
      <div className="s_swiper">
        <Swiper
          spaceBetween={2}
          loop={true}
          slidesPerView={2}
          navigation={true} // Enable navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
        
          <SwiperSlide>
            <img src={img2} alt="Slide 1" className="s_slide-image"  />
            <div className="sslide-description">black-back-sweater</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="Slide 2" className="s_slide-image" />
            <div className="sslide-description">Men's Denim</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="Slide 3" className="s_slide-image" />
            <div className="sslide-description">blue-t-shirt</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="Slide 4" className="s_slide-image" />
            <div className="sslide-description">pink-sweater</div>
          </SwiperSlide>
        </Swiper>
        
      </div>
    </div>
  );
}

