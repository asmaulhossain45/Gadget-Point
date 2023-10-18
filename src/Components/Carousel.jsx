const Carousel = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/wykWy0z/banner1.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide6" className="btn btn-ghost text-orange-600">
            ❮
          </a>
          <a href="#slide2" className="btn btn-ghost text-orange-600">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/6HjXWFH/banner2.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-ghost text-orange-600">
            ❮
          </a>
          <a href="#slide3" className="btn btn-ghost text-orange-600">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/9bbGbGG/banner3.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-ghost text-orange-600">
            ❮
          </a>
          <a href="#slide4" className="btn btn-ghost text-orange-600">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/2NwzgKW/banner4.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-ghost text-orange-600">
            ❮
          </a>
          <a href="#slide5" className="btn btn-ghost text-orange-600">
            ❯
          </a>
        </div>
      </div>

      <div id="slide5" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/yprt5f5/banner5.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-ghost text-orange-600">
            ❮
          </a>
          <a href="#slide6" className="btn btn-ghost text-orange-600">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/mzDL5pt/banner6.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide5" className="btn btn-ghost text-orange-600">
            ❮
          </a>
          <a href="#slide1" className="btn btn-ghost text-orange-600">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
