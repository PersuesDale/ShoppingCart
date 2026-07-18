import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import { Products } from "../../api/products";
import SearchBar from "../SearchBar";
import useProductFilters from "../../Hooks/useProductFilters";
import { useState } from "react";
import ProductSkeleton from "../ProductSkeleton";

const ProductGrid = () => {

    const [open, setOpen] = useState(false);

    const { data,
        isLoading,
        isError
    } = useQuery({
        queryKey: ["products"],
        queryFn: Products,
    });

    const {
        search,
        setSearch,
        category,
        setCategory,
        priceFilter,
        setPriceFilter,
        filteredProducts,
        sortBy,
        setSortBy,
    } = useProductFilters(data?.products ?? []);

    if (isLoading) {
        return (
            <section className="w-[92%] py-10 mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <ProductSkeleton key={index} />
                    ))}
                </div>

            </section>
        );
    }

    if (isError) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-xl font-semibold mb-2">
                        Unable to load products
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300">
                        Please check your connection and try again.
                    </p>
                </div>
            </div>
        );
    }

    if (!data || data.products.length === 0) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <p className="text-gray-600 dark:text-gray-300">
                    No products found.
                </p>
            </div>
        );
    }

    const categories = [
        "all",
        ...new Set(data.products.map((product) => product.category)),
    ];

    return (

        <section className="w-[92%] py-10 mx-auto">

            <div className="flex justify-end">

                <div className="flex">

                    <SearchBar
                        search={search}
                        setSearch={setSearch}
                    />

                    <div className="relative">

                        <button onClick={() => setOpen(!open)}>

                            <div className="flex flex-col items-center ms-2">
                                <span className={`h-0.5 w-6 bg-[#4a5565] dark:bg-white transition-all mb-1 ${open ? "rotate-45 translate-y-2" : ""}`} />
                                <span className={`h-0.5 w-4 bg-[#4a5565] dark:bg-white transition-all mb-1 ${open ? "opacity-0" : ""}`} />
                                <span className={`h-0.5 w-2 bg-[#4a5565] dark:bg-white transition-all mb-1 ${open ? "w-6 mt-1 -rotate-45 -translate-y-2" : ""}`} />
                            </div>

                        </button>

                        {open && (
                            <div className="absolute right-0 mt-4 w-72 rounded-lg border bg-white dark:bg-gray-900 dark:text-white shadow-lg p-4 z-50">

                                <h3 className="font-semibold mb-4">
                                    Filters
                                </h3>

                                <div className="mb-4">
                                    <label className="block text-sm mb-2">
                                        Category
                                    </label>

                                    <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="w-full border bg-white text-black dark:bg-gray-900 dark:text-white rounded-md p-2"
                                    >
                                        {categories.map((cat) => (
                                            <option
                                                key={cat}
                                                value={cat}
                                            >
                                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                            </option>
                                        ))}
                                    </select>
                                </div>


                                <div className="mb-4">
                                    <label className="block text-sm mb-2">
                                        Price
                                    </label>

                                    <select
                                        value={priceFilter}
                                        onChange={(e) => setPriceFilter(e.target.value)}
                                        className="w-full border bg-white text-black dark:bg-gray-900 dark:text-white rounded-md p-2"
                                    >
                                        <option value="all">
                                            All Prices
                                        </option>

                                        <option value="under25">
                                            Under $25
                                        </option>

                                        <option value="25to50">
                                            $25 - $50
                                        </option>

                                        <option value="50plus">
                                            Over $50
                                        </option>
                                    </select>
                                </div>

                                <div className="mb-4">

                                    <label className="block text-sm mb-2">
                                        Sort By
                                    </label>

                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="w-full border bg-white text-black dark:bg-gray-900 dark:text-white rounded-md p-2"
                                    >

                                        <option value="default">
                                            Default
                                        </option>

                                        <option value="priceLow">
                                            Price: Low to High
                                        </option>

                                        <option value="priceHigh">
                                            Price: High to Low
                                        </option>

                                        <option value="ratingHigh">
                                            Rating: High to Low
                                        </option>

                                    </select>

                                </div>

                                <button
                                    onClick={() => {
                                        setSearch("");
                                        setCategory("all");
                                        setPriceFilter("all");
                                        setSortBy("default");
                                        setOpen(false);

                                    }}
                                    className="w-full rounded-md bg-black text-white py-2 hover:bg-gray-700"
                                >
                                    Clear Filters
                                </button>

                            </div>
                        )}

                    </div>

                </div>

            </div>

            <div
                className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
            >
                {filteredProducts.length === 0 ? (
                    <div className="col-span-full py-10 text-center text-gray-500 dark:text-gray-300">
                        No products match your search or filters.
                    </div>
                ) : (
                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))
                )}

            </div>

        </section>

    );
};

export default ProductGrid;