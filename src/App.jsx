import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { AuthContext } from "./Routes/AuthProvider";

function App() {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="h-screen flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <section className="bg-slate-900">
      <section className="lg:w-[1024px] mx-auto">
        <section className="sticky z-10 top-0 border-b border-sky-400">
          <Navbar></Navbar>
        </section>
        <Outlet></Outlet>
        <Footer></Footer>
      </section>
    </section>
  );
}

export default App;
