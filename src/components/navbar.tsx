import { useState } from "react";
import { Menu, X, User, ShoppingCart, Search } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

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
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/collections"
                className="text-white hover:text-red-200 font-medium transition-colors duration-200 relative group"
              >
                Shop All
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-200 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="/bestsellers"
                className="text-white hover:text-red-200 font-medium transition-colors duration-200 relative group"
              >
                Best Sellers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-200 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="/new-arrivals"
                className="text-white hover:text-red-200 font-medium transition-colors duration-200 relative group"
              >
                New Arrivals
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-200 transition-all duration-200 group-hover:w-full"></span>
              </a>
            </div>

            {/* Brand Name - Center */}
            <a
              href="/"
              className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-white hover:text-red-100 transition-colors duration-200"
            >
              Soupreme
            </a>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <button className="hidden sm:flex p-2 rounded-lg hover:bg-red-700 transition-colors duration-200 group">
                <Search className="w-5 h-5 text-white group-hover:text-red-100" />
              </button>

              {/* Account Icon */}
              <a
                href="/account"
                className="p-2 rounded-lg hover:bg-red-700 transition-colors duration-200 group"
                aria-label="Account"
              >
                <User className="w-5 h-5 text-white group-hover:text-red-100" />
              </a>

              {/* Cart Icon with Badge */}
              <a
                href="/cart"
                className="relative p-2 rounded-lg hover:bg-red-700 transition-colors duration-200 group"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-5 h-5 text-white group-hover:text-red-100" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-white text-red-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </a>
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
            {/* Search Bar - Mobile */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-red-300 focus:outline-none"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            <a
              href="/collections"
              className="block py-3 px-4 text-white hover:text-red-200 hover:bg-red-600 rounded-lg font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop All
            </a>
            <a
              href="/bestsellers"
              className="block py-3 px-4 text-white hover:text-red-200 hover:bg-red-600 rounded-lg font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Best Sellers
            </a>
            <a
              href="/new-arrivals"
              className="block py-3 px-4 text-white hover:text-red-200 hover:bg-red-600 rounded-lg font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              New Arrivals
            </a>
            <a
              href="/about"
              className="block py-3 px-4 text-white hover:text-red-200 hover:bg-red-600 rounded-lg font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/contact"
              className="block py-3 px-4 text-white hover:text-red-200 hover:bg-red-600 rounded-lg font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-red-500">
              <a
                href="/collections"
                className="block w-full text-center bg-white text-red-600 font-bold py-3 px-6 rounded-lg hover:bg-red-50 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop Now - 25% Off
              </a>
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
