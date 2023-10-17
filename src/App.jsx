import { useContext } from "react";
import { Outlet } from "react-router-dom";
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
    <section className="max-w-screen-2xl mx-auto bg-slate-900">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </section>
  );
}

export default App;
