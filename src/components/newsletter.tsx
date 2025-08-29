import { useState } from "react";
import { supabase } from "../supabase";

const Newsletter = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string | null>("");

  const handleSubscription = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      await supabase.from("subscibers").insert(email);
      setEmail("");
      setMessage("Subscribed!");
    } catch (err) {
      setMessage("sorry, " + err);
      console.error(err);
    }
  };

  if (message) {
    return <p className="text-2xl font-bold text-gray-900 text-center mb-4 py-16">{message}</p>;
  }

  return (
    <section className="py-16 bg-red-600 text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Get 15% Off Your First Order</h2>
        <p className="text-xl mb-8">Join our money savers and never miss a deal</p>

        <form onSubmit={handleSubscription} className="flex flex-col sm:flex-row max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-l-lg sm:rounded-r-none rounded-r-lg border focus:outline-none focus:ring-2 focus:ring-red-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-gray-900 hover:bg-gray-800 px-8 py-4 font-bold rounded-r-lg sm:rounded-l-none rounded-l-lg transition-colors"
          >
            GET 15% OFF
          </button>
        </form>
        <p className="text-red-200 text-sm mt-4">
          No spam, just deals that save you money. Unsubscribe anytime.
        </p>
        {message && <div className="mt-4 text-red-200">{message}</div>}
      </div>
    </section>
  );
};

export default Newsletter;
