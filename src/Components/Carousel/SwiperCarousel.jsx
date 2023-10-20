/* eslint-disable react/prop-types */
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperCarousel = ({ loadedProducts }) => {

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
        {loadedProducts.map((products) => (
          <div key={products._id}>
            <SwiperSlide className="h-[20vh] md:h-[30vh]">
              <div className="card items-center w-full card-side px-2 md:px-14">
                <figure className="h-[15vh] md:h-[25vh]">
                  <img src={products.photoURL} alt="Movie" />
                </figure>
                <div className="card-body gap-1">
                  <h2 className="text-sm md:text-xl lg:text-3xl font-bold text-orange-500">
                    {products.brand} Product
                  </h2>
                  <h2 className="text-xl md:text-4xl lg:text-7xl font-bold">
                    {products.name}
                  </h2>
                  <p className="text-xs md:text-lg lg:text-2xl">
                    {products.brand}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default SwiperCarousel;
