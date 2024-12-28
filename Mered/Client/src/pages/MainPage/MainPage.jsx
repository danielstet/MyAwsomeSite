/**
 * @fileoverview MainPage component showcasing a Swiper carousel and a grid of recommended items.
 */

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import temporary photos
// @ts-ignore
import photo1 from "../../assets/1.jpg";
// @ts-ignore
import photo2 from "../../assets/2.jpg";
// @ts-ignore
import photo3 from "../../assets/3.webp";
// @ts-ignore
import photo4 from "../../assets/4.webp";
// @ts-ignore
import shirt from '../../assets/ShirtForShowCase.png';
// @ts-ignore
import example1 from "../../assets/forExample1.webp";
// @ts-ignore
import example2 from "../../assets/forExample2.jpg";
// @ts-ignore
import example3 from "../../assets/forExample3.webp";
// @ts-ignore
import example4 from "../../assets/forExample4.webp";

// Import custom styles
import './MainPage.css';

// Item Component
import Item from '../../components/Item/Item';


const imagesArray = [example1, example2, example3, example4];
function getRandomNumber() {
  return Math.floor(Math.random() * 4);
}

/**
 * The `MainPage` component is the main entry point for displaying
 * a Swiper carousel followed by a grid of recommended products.
 *
 * @component
 * @example
 * return (
 *   <MainPage />
 * )
 */
const MainPage = () => {
  return (
    <>
      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img src={photo1} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={photo2} alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img src={photo3} alt="Slide 3" /></SwiperSlide>
        <SwiperSlide><img src={photo4} alt="Slide 4" /></SwiperSlide>
      </Swiper>

      {/* Recommended Items Section */}
      <div id='Header'>Recommended</div>
      <div id='Items'>
        {Array.from({ length: 20 }).map((_, index) => (
          <Item
            key={index}
            ProductImage={imagesArray[getRandomNumber()]}
            ProductName="Shirt"
            ProductPrice={150}
          />
        ))}
      </div>
      <div id='PageList'>
        <button>{'<'}</button>
        <button disabled>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>{">"}</button>
      </div>
    </>
  );
};

export default MainPage;
