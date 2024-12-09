import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProductDetails from "../customer/Components/Product/ProductDetails/ProductDetails";
import Product from "../customer/Components/Product/Product/Product";
import Contact from "../Pages/Contact";
import TearmsCondition from "../Pages/TearmsCondition";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import About from "../Pages/About";
import Homepage from "../Pages/Homepage";
import Navigation from "../customer/Components/Navbar/Navigation";
import Cart from "../customer/Components/Cart/Cart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import { customTheme, customerTheme } from "../Admin/them/customeThem";
import Order from "../customer/Components/orders/Order";
import OrderDetails from "../customer/Components/orders/OrderDetails";
import Checkout from "../customer/Components/Checkout/Checkout";
import Footer from "../customer/Components/footer/Footer";
import PaymentSuccess from "../customer/Components/paymentSuccess/PaymentSuccess";
import RateProduct from "../customer/Components/ReviewProduct/RateProduct";
import NotFound from "../Pages/Notfound";

import Login from "../customer/Components/Auth/LoginPage";
import RegisterPage from "../customer/Components/Auth/RegisterPage";

import HeaderTop from "../customer/Components/Navbar/HeaderTop";
import ShoppingCart from "../customer/Components/Navbar/ShoppingCartModel";
import NewArrivals from "../Pages/NewArrivals";
import SunglassClp from "../Pages/SunglassClp";
import Profile from "../customer/Components/Auth/Profile";
import NewNavbar from "../customer/Components/Navbar/NewNavbar";
import DeliveryCard from "../customer/Components/Navbar/DeliveryCard";
import Dashboard from "../Pages/Dashboard";
import App from "../customer/Components/App";

const CustomerRoutes = () => {
  const location = useLocation();

  // Only show Navigation component when not on the NotFound page
  const showNavigation = location.pathname !== "*";

  // const path=["/","/home","/about","/privacy-policy","/terms-condition","/contact","/men",`/product/${productId}`]
  return (
    <div>
      <ThemeProvider theme={customerTheme}>
        <div className="-z-40">
          {" "}
          <HeaderTop />
        </div>
        <NewNavbar />
        {/* {showNavigation && <Navigation />} */}
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign-up" element={<RegisterPage />}></Route>
          <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
          <Route path="/profile" element={<Dashboard />}></Route>

          <Route path="/" element={<Homepage />}></Route>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/privaciy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="/sunglass-clp" element={<SunglassClp />}></Route>
          <Route path="/my-account" element={<Profile />}></Route>
          <Route path="/terms-condition" element={<TearmsCondition />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/:lavelOne/:lavelTwo/:lavelThree"
            element={<Product />}
          ></Route>
          <Route
            path="/product/:productId"
            element={<ProductDetails />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/account/order" element={<Order />}></Route>
          <Route
            path="/orderDetails/:orderId"
            element={<OrderDetails />}
          ></Route>
          <Route
            path="/account/rate/:productId"
            element={<RateProduct />}
          ></Route>
          <Route path="/checkout" element={<Checkout />}></Route>

          <Route
            path="/payment/success/:orderId"
            element={<PaymentSuccess />}
          ></Route>
          <Route path="/shops" element={<Product />}></Route>
          <Route path="/search" element={<App />}></Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default CustomerRoutes;
