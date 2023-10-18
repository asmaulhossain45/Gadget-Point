import AllBrand from "../Components/AllBrand";
import Carousel from "../Components/Carousel";

const Home = () => {
  return (
    <>
      <header>
        <Carousel></Carousel>
      </header>
      <AllBrand></AllBrand>
      <div>
        <img
          className="w-full"
          src="https://i.ibb.co/QX4M4Nx/Banner.png"
          alt=""
        />
      </div>
      <section className="px-4 py-10 md:px-8"></section>
    </>
  );
};

export default Home;
