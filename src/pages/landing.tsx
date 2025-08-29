import Navbar from "../components/navbar";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col px-4 py-20 max-w-6xl gap-4 mt-[10vh] mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 max-w-150">
          URBANARC:<span className="text-red-600 decoration-red-300"> NEW CLOTHES IN STOCK</span>
        </h1>
        <p className="text-neutral-900 mb-4">
          Shop stylish urban streetwear – hoodies, cargo pants, sneakers, accessories and more...
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            to="/products"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
          >
            SHOP NOW <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Brief About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-18">
            Urban Style, Redefined
          </h2>
          <div className="grid md:grid-cols-3 gap-18 text-left">
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-3">What We Do</h3>
              <p className="text-gray-700">
                We curate the latest urban fashion trends, bringing you high-quality streetwear and
                contemporary clothing that makes a statement.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-3">Who We Are</h3>
              <p className="text-gray-700">
                A passionate team of fashion enthusiasts dedicated to making premium urban style
                accessible to everyone, without compromising on quality or price.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-3">Who It's For</h3>
              <p className="text-gray-700">
                Style-conscious individuals who want to express their personality through fashion -
                from streetwear lovers to professionals seeking that urban edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
