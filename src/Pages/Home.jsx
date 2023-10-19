import AllBrand from "../Components/AllBrand";
import HeaderCarousel from "../Components/HeaderCarousel/HeaderCarousel";

const Home = () => {
  return (
    <>
      <header>
        <HeaderCarousel></HeaderCarousel>
      </header>
      <section
        className="my-6 md:my-10 lg:my-14 px-4 md:px-8"
      >
        <AllBrand></AllBrand>
      </section>
      <div>
        <img
          className="w-full"
          src="https://i.ibb.co/QX4M4Nx/Banner.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Home;
