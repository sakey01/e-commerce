// src/components/product-card.tsx

type Product = {
  id: string;
  name: string;
  price: number;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="cursor-pointer relative p-12 shadow-sm bg-red-600 group hover:bg-red-700 ">
      <h2 className="text-xl text-white font-semibold">{product.name}</h2>
      <p className="text-lg text-gray-200">£{product.price}</p>
      <div className="absolute right-2 bottom-[-40px] opacity-0 text-white text-xl group-hover:bottom-2 group-hover:opacity-100 transition-all duration-250 ease-in-out">
        +
      </div>
    </div>
  );
};

export default ProductCard;
