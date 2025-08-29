import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import ProductCard from "../components/product-card";
import { supabase } from "../supabase";
import Loader from "../components/loader";

type Product = {
  id: string;
  name: string;
  price: number;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // Fetch data from Supabase
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError("");

        // Get the data and error
        const { data, error } = await supabase.from("products").select("id, name, price");

        if (error) {
          console.error("Error fetching products:", error.message);
          setError("Failed to load products. Please try again.");
          return;
        }

        // Set products if is not null
        setProducts(data || []);
      } catch (error) {
        console.error("An error occurred:", error);
        setError("An error occurred. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <Loader />
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Global Collection</h1>
          <p className="text-gray-600">Discover our curated selection of premium products</p>
        </div>

        {/* Filters and Sort options -- in progress */}
        <div className="flex justify-center gap-4 mb-8">
          <button className="border border-gray-300 bg-white px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            FILTER
          </button>
          <button className="border border-gray-300 bg-white px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            SORT BY
          </button>
        </div>

        {/* Products List */}
        {products.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="w-full">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;
