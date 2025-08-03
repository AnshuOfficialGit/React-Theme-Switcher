import { useTheme } from "../../context/ThemeContext";
import Sidebar from "../master/sidebar";
import Card from "../common/card";
import { Sparkles, Blocks, Codesandbox } from "lucide-react";
import {
  ProductService,
  type Product,
} from "../../services/products/product-service";
import { useEffect, useState } from "react";

const Layout = () => {
  const { theme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [activePage, setActivePage] = useState("Dashboard");

  const fetchProduct = async () => {
    try {
      const data = await ProductService();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const sharedContent = (
    <>
      <h1>
        <Codesandbox className="inline-block mr-2 h-8 w-8 text-primary" />
      </h1>
      <h2 className="text-2xl font-bold">Clean Aesthetic</h2>
      <h3 className="text-xl">Design that speaks softly</h3>
    </>
  );

  const renderContent = () => {
    switch (activePage) {
      case "Dashboard":
        return (
          <section className="space-y-6">
            {sharedContent}
            <div className="flex justify-center gap-4">
              <button
                className={`${
                  theme === "theme3"
                    ? "bg-pink-400 hover:bg-pink-600 text-white px-5 py-2 rounded-full shadow-md"
                    : "bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                }`}
              >
                <Sparkles className="inline-block mr-2" /> Explore 
              </button>
              <button
                className={`${
                  theme === "theme3"
                    ? "bg-pink-400 hover:bg-pink-600 text-white px-5 py-2 rounded-full shadow-md"
                    : "bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition"
                }`}
              >
                <Blocks className="inline-block mr-2" />  More
              </button>
            </div>
          </section>
        );

      case "Products":
        return (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <div
              className={`grid ${
                theme === "theme3"
                  ? "gap-6 sm:grid-cols-2 lg:grid-cols-3"
                  : "md:grid-cols-3 gap-4"
              }`}
            >
              {products?.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </section>
        );

      case "Profile":
        return (
          <section className="max-w-xl mx-auto bg-white dark:bg-black rounded-xl shadow-md p-6 space-y-6 border dark:border-gray-700">
            <div className="flex items-center space-x-4">
              <img
                src="https://ui-avatars.com/api/?name=Anshu+Sharma&background=random"
                alt="User Avatar"
                className="w-16 h-16 rounded-full border-2 border-blue-500"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Anshu Sharma
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  anshusharma1298@gmail.com
                </p>
                <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full mt-1 inline-block">
                  Backend Focussed Full Stack Developer with Node.js, React.js &
                  Laravel
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <p className="mt-1 text-gray-900 dark:text-white">
                  Anshu Sharma
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <p className="mt-1 text-gray-900 dark:text-white">
                  anshusharma1298@gmail.com
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Phone
                </label>
                <p className="mt-1 text-gray-900 dark:text-white">
                  +91 7007976332
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Location
                </label>
                <p className="mt-1 text-gray-900 dark:text-white">
                  Lucknow, Uttar Pradesh, 226002 India
                </p>
              </div>
            </div>
          </section>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  /**
   * Theme Two with Sidebar and its Content
   */
  if (theme === "theme2") {
    return (
      <div className="flex pt-20 px-4 gap-4">
        <Sidebar onSelect={setActivePage} activePage={activePage} />
        <main className="flex-1 space-y-6">{renderContent()}</main>
      </div>
    );
  }

  /**
   * This Content will Display on to the both Theme 1 & 3
   */
  return (
    <div
      className={`pt-20 px-4 ${theme === "theme1" ? "max-w-8xl mx-auto" : ""}`}
    >
      <section className="space-y-6">
        {sharedContent}
        <div className="flex justify-center gap-4">
          <button
            className={`${
              theme === "theme3"
                ? "bg-pink-400 hover:bg-pink-600 text-white px-5 py-2 rounded-full shadow-md"
                : "bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            }`}
          >
            <Sparkles className="inline-block mr-2" /> Explore 
          </button>
          <button
            className={`${
              theme === "theme3"
                ? "bg-pink-400 hover:bg-pink-600 text-white px-5 py-2 rounded-full shadow-md"
                : "bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition"
            }`}
          >
            <Blocks className="inline-block mr-2" /> More
          </button>
        </div>

        <h4>Featured Products</h4>
        <div
          className={`grid ${
            theme === "theme3"
              ? "gap-6 sm:grid-cols-2 lg:grid-cols-3"
              : "md:grid-cols-3 gap-4"
          }`}
        >
          {products?.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Layout;
