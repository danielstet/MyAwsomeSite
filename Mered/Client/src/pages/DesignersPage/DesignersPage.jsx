/**
 * @fileoverview DesignersPage component showcasing a designer's collection.
 */

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import custom styles
import './DesignersPage.css';

// Import temporary photos
// @ts-ignore
import photo1 from "../../assets/1.jpg";
// @ts-ignore
import photo2 from "../../assets/2.jpg";
// @ts-ignore
import photo3 from "../../assets/3.webp";
// @ts-ignore
import photo4 from "../../assets/4.webp";


import example1 from "../../assets/forExample1.webp";
// @ts-ignore
import example2 from "../../assets/forExample2.jpg";
// @ts-ignore
import example3 from "../../assets/forExample3.webp";
// @ts-ignore
import example4 from "../../assets/forExample4.webp";

// Item Component
import Item from '../../components/Item/Item';

const imagesArray = [example1, example2, example3, example4];

function getRandomNumber() {
  return Math.floor(Math.random() * imagesArray.length);
}

/**
 * The `DesignersPage` component showcases a specific designer's
 * collection with a Swiper carousel and a grid of products.
 *
 * @component
 * @example
 * return (
 *   <DesignersPage />
 * )
 */
const DesignersPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div id="HeroSection">
        <h1>Explore the Collection</h1>
        <p>Discover the exquisite designs of our featured designer.</p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide><img src={photo1} alt="Designer Collection 1" /></SwiperSlide>
        <SwiperSlide><img src={photo2} alt="Designer Collection 2" /></SwiperSlide>
        <SwiperSlide><img src={photo3} alt="Designer Collection 3" /></SwiperSlide>
        <SwiperSlide><img src={photo4} alt="Designer Collection 4" /></SwiperSlide>
      </Swiper>

      {/* Product Grid Section */}
      <div id='Header'>Featured Products</div>
      <div id='Items'>
        {Array.from({ length: 20 }).map((_, index) => (
          <Item
            key={index}
            ProductImage={imagesArray[getRandomNumber()]}
            ProductName={`Product ${index + 1}`}
            ProductPrice={200 + index * 10}
          />
        ))}
      </div>
    </>
  );
};

export default DesignersPage;