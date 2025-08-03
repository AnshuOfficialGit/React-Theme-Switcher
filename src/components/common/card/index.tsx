import { Star } from "lucide-react";

interface Product {
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Card = ({ product }: { product: Product }) => {
  const theme = document.documentElement.getAttribute("data-theme");
  const isTheme3 = theme === "theme3";

  return (
    <div
      className={`p-4 rounded shadow transition hover:shadow-lg ${
        isTheme3
          ? "bg-pink-100 p-6 rounded-lg shadow-lg"
          : "border bg-white dark:bg-gray-800"
      }`}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-60 object-contain p-4 bg-gray-50 rounded"
      />

      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
          {product.title}
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>

          <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
            <Star className="h-4 w-4 fill-current" />
            {product.rating.rate} ({product.rating.count})
          </div>
        </div>

        <button
          className={`mt-2 w-full py-2 rounded transition ${
            isTheme3
              ? "bg-pink-500 hover:bg-pink-600 text-white"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
