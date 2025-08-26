import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const updateQuantity = (id, newQuantity) => {
    // Update item quantity logic
  };

  const removeItem = (id) => {
    // Remove item logic
  };

  const getTotalPrice = () => {
    // Calculate total price
    return 0;
  };

  const getTotalItems = () => {
    // Calculate total items
    return 0;
  };

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
            <div className="md:col-span-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center p-4 border-b">
                  <img src={item.image} alt={item.name} className="w-16 h-16" />
                  <div className="flex-1 ml-4">
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white p-6">
                <h2>Order Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Items ({getTotalItems()})</span>
                    <span>${getTotalPrice()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>$5.99</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${getTotalPrice() + 5.99}</span>
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
