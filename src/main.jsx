import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import BrandProducts from "./Components/BrandProducts";
import ProductDetails from "./Components/ProductDetails";
import ProductUpdate from "./Components/ProductUpdate";
import "./index.css";
import AddProduct from "./Pages/AddProduct";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MyCart from "./Pages/MyCart";
import Products from "./Pages/Products";
import Register from "./Pages/Register";
import AuthProvider from "./Routes/AuthProvider";
import PrivateRoute from "./Routes/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/brandProduct/:brand",
        element: (
          <PrivateRoute>
            <BrandProducts></BrandProducts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://gadget-point-server-vxg3lda8h-asmaul-hossains-projects.vercel.app/api/brand/${params.brand}`),
      },
      {
        path: "/products",
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
        loader: () => fetch("https://gadget-point-server-vxg3lda8h-asmaul-hossains-projects.vercel.app/api/products"),
      },
      {
        path: "/update/:userUID",
        element: (
          <PrivateRoute>
            <ProductUpdate></ProductUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://gadget-point-server-vxg3lda8h-asmaul-hossains-projects.vercel.app/api/products/${params.userUID}`),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://gadget-point-server-vxg3lda8h-asmaul-hossains-projects.vercel.app/api/products/${params.id}`),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart/:email",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://gadget-point-server-vxg3lda8h-asmaul-hossains-projects.vercel.app/api/cart/${params.email}`),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider scrollRestoration="manual" router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
