import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const Cart = () => {
  const [cartItems] = useState([]);

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex flex-col flex-1 gap-4 justify-center text-center items-center">
          <h2>Your cart is empty</h2>
          <Link to="/">Continue Shopping</Link>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1>Shopping Cart</h1>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2"></div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white p-6">
                <h2>Order Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between"></div>
                  <div className="flex justify-between">
                    
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                  </div>
                </div>
                
                <Link
                  to="/checkout"
                  className="block w-full text-center bg-blue-600 text-white py-2 mt-4"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
