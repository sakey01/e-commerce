import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { Heart, Users, Award, Truck } from "lucide-react";
import Footer from "../components/footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-red-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About Soupreme</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              We're passionate about bringing you the finest selection of premium products,
              carefully curated to enhance your lifestyle and exceed your expectations.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Founded in 2025, Soupreme began with a simple mission: to make premium,
                  high-quality products accessible to everyone. What started as a small passion
                  project has grown into a trusted brand that serves thousands of satisfied
                  customers worldwide.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our commitment to excellence drives everything we do, from carefully selecting our
                  products to providing exceptional customer service. We believe that everyone
                  deserves access to products that make their daily life better.
                </p>
              </div>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <img src="" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Quality */}
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                <p className="text-gray-600">
                  Every product is carefully vetted to meet our high standards of excellence.
                </p>
              </div>

              {/* Customer Focus */}
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Care</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We're here to support you every step of the
                  way.
                </p>
              </div>

              {/* Community */}
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">
                  We believe in building lasting relationships with our customers and partners.
                </p>
              </div>

              {/* Reliability */}
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                <p className="text-gray-600">
                  Fast shipping, secure payments, and consistent quality you can count on.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Experience Soupreme?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made Soupreme their go-to destination
              for premium products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Shop Now
              </Link>
              <Link
                to="/contact"
                className="border border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
