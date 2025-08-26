import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Cart from "./pages/cart";
import Products from "./pages/products";
import Checkout from "./pages/checkout";
import SignUp from "./pages/sign-up";
import About from "./pages/about";
import ContactUs from "./pages/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
