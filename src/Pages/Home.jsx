import AllBrand from "../Components/AllBrand";

const Home = () => {
  return (
    <>
      <header>
        <img
          className="w-full"
          src="https://i.ibb.co/QX4M4Nx/Banner.png"
          alt=""
        />
      </header>
      <section className="px-4 py-10 md:px-8">
        <AllBrand></AllBrand>
      </section>
    </>
  );
};

export default Home;
