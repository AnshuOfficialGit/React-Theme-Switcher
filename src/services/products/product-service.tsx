import axios from "axios";
const products = async () => {
  try {
    const result = await axios.get("https://fakestoreapi.com/products");
    return result;
  } catch (error) {
    return error;
  }
};
const ProductService = {
  products,
};
export default ProductService;
