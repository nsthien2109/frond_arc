import React, { useRef, useState } from "react";
// Import Swiper React components
import img1 from '../../../assets/img/slider/001.jpg';
import img2 from '../../../assets/img/slider/002.jpg';
import img3 from '../../../assets/img/slider/003.jpg';
import img4 from '../../../assets/img/slider/004.jpg';
import img5 from '../../../assets/img/slider/005.jpg';
import img6 from '../../../assets/img/slider/006.jpg';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import '../../../assets/css/styles.css';


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

function Slider() {
  return (
    <>
    <div className="SliderContainer">
    <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{
        "clickable": true
        }} navigation={true} className="mySwiper">
        <SwiperSlide>
            <img src={img1} className="Slider_img"/>
            <div className="SliderContent">
                <div className="SliderContentInfo">
                    <span className="SliderNumber">01 .</span><br/>
                    <span className="SliderType">Project</span><br/>
                    <span className="SliderLocation">City Plaza,USA</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} className="Slider_img"/>
            <div className="SliderContent">
                <div className="SliderContentInfo">
                    <span className="SliderNumber">01 .</span><br/>
                    <span className="SliderType">Project</span><br/>
                    <span className="SliderLocation">City Plaza,USA</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} className="Slider_img"/>
            <div className="SliderContent">
                <div className="SliderContentInfo">
                    <span className="SliderNumber">01 .</span><br/>
                    <span className="SliderType">Project</span><br/>
                    <span className="SliderLocation">City Plaza,USA</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} className="Slider_img"/>
            <div className="SliderContent">
                <div className="SliderContentInfo">
                    <span className="SliderNumber">01 .</span><br/>
                    <span className="SliderType">Project</span><br/>
                    <span className="SliderLocation">City Plaza,USA</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} className="Slider_img"/>
            <div className="SliderContent">
                <div className="SliderContentInfo">
                    <span className="SliderNumber">01 .</span><br/>
                    <span className="SliderType">Project</span><br/>
                    <span className="SliderLocation">City Plaza,USA</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img6} className="Slider_img"/>
            <div className="SliderContent">
                <div className="SliderContentInfo">
                    <span className="SliderNumber">01 .</span><br/>
                    <span className="SliderType">Project</span><br/>
                    <span className="SliderLocation">City Plaza,USA</span>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
    </div>
    </>
  );
}

export default Slider;