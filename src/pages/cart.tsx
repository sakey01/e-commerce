import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const Cart = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-1 gap-4 justify-center text-center items-center">
        <Link to="/checkout">Checkout</Link>
      </main>
    </div>
  );
};

export default Cart;
