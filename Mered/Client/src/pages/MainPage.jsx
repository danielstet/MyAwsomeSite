import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//photos
import photo1 from "../assets/1.jpg";
import photo2 from "../assets/2.jpg";
import photo3 from "../assets/3.webp";
import photo4 from "../assets/4.webp";

// My css
import './MainPage.css'

const MainPage = () => {
  return (

    <>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={photo1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={photo2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={photo3} alt="" /></SwiperSlide>
      <SwiperSlide><img src={photo4} alt="" /></SwiperSlide>
    </Swiper>
      <div>Recommended</div>
      
    </>
  )
}

export default MainPage