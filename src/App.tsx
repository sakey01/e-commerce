import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Account from "./pages/login";
import Cart from "./pages/cart";
import Products from "./pages/products";
import Checkout from "./pages/checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/products" element={<Products />} />
      <Route path="/account" element={<Account />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
