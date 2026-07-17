import { ProductsResponseSchema } from "../Schema/ProductResponseSchema";

export const Products = async () => {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    const json = await response.json();

    return ProductsResponseSchema.parse(json);
}
