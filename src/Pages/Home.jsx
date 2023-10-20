import { Helmet } from "react-helmet-async";
import AllBrand from "../Components/AllBrand";
import CustomerRating from "../Components/CustomerRating";
import HeaderCarousel from "../Components/HeaderCarousel/HeaderCarousel";
import HotProducts from "../Components/HotProducts";

const Home = () => {
  return (
    <>
    <Helmet><title>Home</title></Helmet>
      <header>
        <HeaderCarousel></HeaderCarousel>
      </header>
      <section className="my-6 md:my-10 lg:my-14 px-4 md:px-8">
        <AllBrand></AllBrand>
      </section>
      <section>
        <HotProducts></HotProducts>
      </section>
      <section className="my-6 md:my-10 lg:my-14">
        <img
          className="w-full"
          src="https://i.ibb.co/QX4M4Nx/Banner.png"
          alt=""
        />
      </section>
      <section>
        <CustomerRating></CustomerRating>
      </section>
    </>
  );
};

export default Home;
