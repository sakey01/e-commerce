import { useState } from "react";
import { Menu, X, User, ShoppingCart, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-red-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>

            {/* Desktop Navigation Links - Left */}
            <div className="hidden md:flex items-center space-x-8 text-md">
              <Link
                to="/products"
                className="text-white hover:text-red-200 font-medium transition-colors duration-200 relative group"
              >
                Shop All
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-200 transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-red-200 font-medium transition-colors duration-200 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-200 transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-red-200 font-medium transition-colors duration-200 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-200 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Brand Name - Center */}
            <Link
              to="/"
              className="absolute left-1/2 transform -translate-x-1/2 text-xl scale-y-120 font-bold text-white hover:text-red-100 transition-colors duration-200"
            >
              URBANARC
            </Link>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <button className="hidden sm:flex p-2 rounded-lg hover:bg-red-700 transition-colors duration-200 group">
                <Search className="w-5 h-5 text-white group-hover:text-red-100" />
              </button>

              {/* Account Icon */}
              <Link
                to="/login"
                className="p-2 rounded-lg hover:bg-red-700 transition-colors duration-200 group"
                aria-label="Account"
              >
                <User className="w-5 h-5 text-white group-hover:text-red-100" />
              </Link>

              {/* Cart Icon with Badge */}
              <Link
                to="/cart"
                className="relative p-2 rounded-lg hover:bg-red-700 transition-colors duration-200 group"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-5 h-5 text-white group-hover:text-red-100" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-white text-red-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-red-700`}
        >
          <div className="px-4 py-6 space-y-4">
            <Link
              to="/products"
              className="block py-3 px-4 text-white hover:text-red-200 hover:bg-red-600 rounded-lg font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop All
            </Link>
            <Link
              to="/about"
              className="block py-3 px-4 text-white hover:text-red-200 hover:bg-red-600 rounded-lg font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-3 px-4 text-white hover:text-red-200 hover:bg-red-600 rounded-lg font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-red-500">
              <Link
                to="/products"
                className="block w-full text-center bg-white text-red-600 font-bold py-3 px-6 rounded-lg hover:bg-red-50 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
