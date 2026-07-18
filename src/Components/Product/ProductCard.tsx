import { useCartStore } from "../../Store/cartStore";
import type { Product } from "../../Schema/ProductSchema";

type ProductProps = {
    product: Product;
};

export default function ProductCard({ product }: ProductProps) {

    const addToCart = useCartStore((state) => state.addToCart);

    return (

        <div className="bg-white dark:bg-gray-900 dark:text-white rounded-xl shadow-lg  hover:shadow-2xl transition-all duration-300" >

            <div className="w-full h-auto overflow-hidden" >
                <img
                    src={product.thumbnail}
                    alt="Sample Product"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="p-4 flex flex-col gap-2" >

                <h2 className="text-lg h-14 font-semibold line-clamp-2">
                    {product.title}
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-300 capitalize">
                    {product.category}
                </p>

                <div className="flex items-center justify-between">

                    <span className="text-xl font-bold text-black dark:text-white">
                        ${product.price}
                    </span>

                    <span className="text-yellow-500 font-medium">
                        ⭐ {product.rating}
                    </span>

                </div>

                <button
                    onClick={() => addToCart(product)}
                    className="mt-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800 active:bg-gray-800 transition-colors duration-200"
                >
                    Add to Cart
                </button>

            </div>

        </div>
    )
    
}

   