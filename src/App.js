import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Home,
  Product,
  Products,
  AboutPage,
  ContactPage,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
} from "./pages";
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/Home");
  }, []);

  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/product" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/product/*" element={<PageNotFound />} />
    </Routes>
  );
}
export default App;
