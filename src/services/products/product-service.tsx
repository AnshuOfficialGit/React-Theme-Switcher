import axios from "axios";

// Define the Product interface
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Define the response type (array of products)
export type ProductListResponse = Product[];

export const ProductService = async (): Promise<ProductListResponse> => {
  const response = await axios.get<ProductListResponse>("https://fakestoreapi.com/products");
  return response.data;
};


