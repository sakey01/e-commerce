import Navbar from "../components/navbar";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";
import Footer from "../components/footer";

const Landing = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Newsletter
  const handleSubmission = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const { error } = await supabase.from("subscribers").insert([{ email }]);

      if (error) throw error;

      setMessage("Thanks for subscribing!");
      setEmail("");
    } catch (err) {
      const error = err as Error;
      console.error(error);
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col px-4 py-20 max-w-6xl gap-4 mt-[10vh] mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 max-w-150">
          URBANARC <span className="text-red-600 decoration-red-300"> NEW CLOTHES IN STOCK</span>
        </h1>
        <p className="text-neutral-900 mb-4">Wether you're looking for a quick fix or a fancy wardrobe, we've got you covered</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            to="/products"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
          >
            SHOP NOW <ArrowRight className="ml-2 w-5 h-5"/>
          </Link>
        </div>
      </section>

      {/* Email Newsletter */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Get 15% Off Your First Order</h2>
          <p className="text-xl mb-8">Join our money savers and never miss a deal</p>

          <form onSubmit={handleSubmission} className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-gray-100 rounded-l-lg sm:rounded-r-none rounded-r-lg border focus:outline-none focus:ring-2 focus:ring-red-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-gray-900 hover:bg-gray-800 px-8 py-4 font-bold rounded-r-lg sm:rounded-l-none rounded-l-lg transition-colors"
              disabled={!!message}
            >
              GET 15% OFF
            </button>
          </form>

          <p className="text-red-200 text-sm mt-4">
            No spam, just delicious deals. Unsubscribe anytime.
          </p>
          {message && <div>{message}</div>}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
