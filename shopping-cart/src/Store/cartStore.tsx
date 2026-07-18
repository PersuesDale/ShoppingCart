import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../Schema/ProductSchema";

type CartItem = Product & {
    quantity: number;
}

type CartStore = {

    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    clearCart: () => void;

};

export const useCartStore = create<CartStore>()(
    persist(
        (set) => (
            {
                cart: [],

                // add to cart functino
                addToCart: (product) => set((state) => {
                    const existingItem = state.cart.find(
                        (item) => item.id === product.id
                    );
                    if (existingItem) {
                        return {
                            cart: state.cart.map((item) =>
                                item.id === product.id ? {
                                    ...item,
                                    quantity: Math.min(item.quantity + 1, 5),
                                } : item

                            ),
                        };
                    }
                    return {
                        cart: [
                            ...state.cart,
                            {
                                ...product,
                                quantity: 1,
                            },
                        ],
                    };
                }),

                // remove from cart function
                removeFromCart: (id) => set((state) => ({
                    cart: state.cart.filter(
                        (item => item.id !== id)
                    ),
                })),

                // increase no of proudcts
                increaseQuantity: (id) => set((state) => ({
                    cart: state.cart.map((item) =>
                        item.id === id
                            ? {
                                ...item,
                                quantity: Math.min(item.quantity + 1, 5)
                            } : item
                    ),
                })),

                // decrease teh no of products
                decreaseQuantity: (id) => set((state) => ({
                    cart: state.cart.map((item) =>
                        item.id === id
                            ? {
                                ...item,
                                quantity: Math.max(item.quantity - 1, 1)
                            } : item
                    )
                })),

                // empty thew cart
                clearCart: () => set({
                    cart: [],
                }),
            }),
        {
            name: "cart-storage"
        }
    )


);
