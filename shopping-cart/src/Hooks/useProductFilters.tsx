import { useState } from 'react'
import type { Product } from "../Schema/ProductSchema";
const useProductFilters = (products: Product[]) => {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [priceFilter, setPriceFilter] = useState("all")

    let filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    if (category !== "all") {
        filteredProducts = filteredProducts.filter(
            (product) => product.category === category
        );
    }

    if (priceFilter === "under25") {

        filteredProducts = filteredProducts.filter(
            (product) => product.price < 25
        );

    }

    if (priceFilter === "25to50") {
        filteredProducts = filteredProducts.filter(
            (product) => product.price >= 25 && product.price <= 50
        );
    }

    if (priceFilter === "50plus") {
        filteredProducts = filteredProducts.filter(
            (product) => product.price > 50
        );
    }

    return {
        search,
        setSearch,
        category,
        setCategory,
        priceFilter,
        setPriceFilter,
        filteredProducts,

    }
}

export default useProductFilters