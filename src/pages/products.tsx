import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import ProductCard from "../components/product-card";
import { supabase } from "../supabase";

type Product = {
  id: number;
  name: string;
  price: number;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch data from Supabase
  useEffect(() => {
    const fetch = async () => {
      try {
        // get the data and error
        const { data, error } = await supabase.from("products").select("id, name, price");

        if (error) {
          console.error("Error fetching products:", error.message);
          return;
        }

        // Set products if data is not null
        setProducts(data || []);
      } catch (error) {
        console.error("An unexpected error occurred:", error);
      }
    };

    fetch();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col gap-4 justify-center text-center items-center mt-30">
        <h1>Global Collection</h1>
        {/* Button List */}
        <div className="flex">
          <button className="border px-4">FILTER</button>
          <button className="border px-4">SORT BY</button>
        </div>
        {/* Map Product Listings */}
        <ul className="grid grid-cols-3 gap-2">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Products;
