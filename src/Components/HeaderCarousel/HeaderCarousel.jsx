import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./HeaderSwiper.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

const HeaderCarousel = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/mzDL5pt/banner6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/wykWy0z/banner1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/9bbGbGG/banner3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/2NwzgKW/banner4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/6HjXWFH/banner2.jpg" alt="" />
        </SwiperSlide>
        <div className="hidden">
          <span ref={progressCircle}></span>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default HeaderCarousel;
