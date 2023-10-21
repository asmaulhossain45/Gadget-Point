import { Helmet } from "react-helmet-async";
import AllBrand from "../Components/AllBrand";
import CustomerRating from "../Components/CustomerRating";
import HeaderCarousel from "../Components/HeaderCarousel/HeaderCarousel";
import HotProducts from "../Components/HotProducts";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HeaderCarousel></HeaderCarousel>
      <section className="mx-4 md:mx-10 lg:mx-20 my-4 md:my-8 lg:my-12">
        <AllBrand></AllBrand>
      </section>
      <section className="mx-4 md:mx-10 lg:mx-20 my-4 md:my-8 lg:my-12">
        <HotProducts></HotProducts>
      </section>
      <section>
        <img
          className="w-full"
          src="https://i.ibb.co/QX4M4Nx/Banner.png"
          alt=""
        />
      </section>
      <section className="mx-4 md:mx-10 lg:mx-20 my-4 md:my-8 lg:my-12">
        <CustomerRating></CustomerRating>
      </section>
    </>
  );
};

export default Home;
