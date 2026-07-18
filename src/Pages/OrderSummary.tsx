import { Navigate, useLocation, useNavigate } from "react-router-dom";
import type { Shipping } from "../Schema/ShippingSchema"
import { useCartStore } from "../Store/cartStore";
import { useState } from "react";

type LocationState = {
    shipping?: Shipping;
};

const OrderSummary = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [orderPlaced, setOrderPlaced] = useState(false)

    const { shipping } = (location.state as LocationState | null) ?? {};

    const cart = useCartStore(
        (state) => state.cart
    );

    const clearCart = useCartStore(
        (state) => state.clearCart
    );

    const subtotal = cart.reduce((sum, item) =>
        sum + item.price * item.quantity, 0
    );

    const tax = subtotal * 0.05;

    const discount = subtotal > 100 ? subtotal * 0.10 : 0;

    const finalTotal = subtotal + tax - discount;

    const handlePlaceOrder = () => {
        setOrderPlaced(true);
        clearCart();
    };

    if (orderPlaced) {

        return (

            <section className="min-h-screen bg-gray-100 dark:text-white dark:bg-gray-950 flex items-center justify-center">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-8 text-center">
                    <h1 className="text-2xl font-semibold mb-3">
                        Order Placed Successfully!
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Thank you for your order.
                    </p>
                    <button
                        onClick={() => navigate("/")}
                        className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                    >
                        Continue Shopping
                    </button>
                </div>
            </section>

        );

    }

    if (cart.length === 0) {
        return <Navigate to="/cart" replace />
    }

    if (!shipping) {
        return <Navigate to="/shipping" replace />
    }

    return (

        <section className="min-h-screen bg-gray-100 dark:bg-gray-950 dark:text-white pt-10 pb-50 ">

            <div className="max-w-4xl mx-auto">

                <h1 className="text-2xl font-semibold mb-6 mx-5">
                    Order Summary
                </h1>

                <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 mb-6">

                    <h2 className="text-lg font-semibold mb-4">
                        Shipping Details
                    </h2>
                    <p>
                        {shipping.fullName}
                    </p>
                    <p>
                        {shipping.email}
                    </p>
                    <p>
                        {shipping.phNo}
                    </p>
                    <p>
                        {shipping.address}
                    </p>
                    <p>
                        {shipping.city}
                    </p>
                    <p>
                        {shipping.postalCode}
                    </p>

                </div>

                <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 mb-6">

                    <h2 className="text-lg font-semibold mb-4">
                        Your Order
                    </h2>

                    {cart.map((item) => (

                        <div
                            key={item.id}
                            className="flex justify-between items-center py-3 border-b"
                        >

                            <div>

                                <p className="font-medium">
                                    {item.title}
                                </p>

                                <p className="text-sm text-gray-500 dark:text-gray-300">
                                    Quantity: {item.quantity}
                                </p>

                                <p className="text-sm text-gray-500 dark:text-gray-300">
                                    ${item.price.toFixed(2)} each
                                </p>

                            </div>

                            <span className="font-medium">

                                $
                                {(
                                    item.price *
                                    item.quantity
                                ).toFixed(2)}

                            </span>

                        </div>

                    ))}

                </div>

                <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">

                    <h2 className="text-lg font-semibold mb-4">
                        Payment Summary
                    </h2>

                    <div className="flex justify-between mb-2">

                        <span>
                            Subtotal
                        </span>
                        <span>
                            ${subtotal.toFixed(2)}
                        </span>

                    </div>

                    <div className="flex justify-between mb-2">

                        <span>
                            Tax (5%)
                        </span>
                        <span>
                            ${tax.toFixed(2)}
                        </span>

                    </div>

                    <div className="flex justify-between mb-2">

                        <span>
                            Discount (10%)
                        </span>
                        <span>
                            -${discount.toFixed(2)}
                        </span>

                    </div>

                    <hr className="my-4" />

                    <div className="flex justify-between text-lg font-semibold">

                        <span>
                            Final Total
                        </span>
                        <span>
                            ${finalTotal.toFixed(2)}
                        </span>

                    </div>

                    <button
                        onClick={handlePlaceOrder}
                        className="mt-6 w-full px-4 py-3 bg-black text-white rounded-md hover:bg-gray-800"
                    >
                        Place Order
                    </button>

                </div>

            </div>

        </section>
    )

}

export default OrderSummary;