import { useNavigate } from "react-router-dom";
import { useCartStore } from "../Store/cartStore";
import trashIcon from "../assets/Icon/trash.svg";

export default function Cart() {

    const navigate = useNavigate();

    const cart = useCartStore((state) => state.cart);

    const increaseQuantity = useCartStore(
        (state) => state.increaseQuantity
    );

    const decreaseQuantity = useCartStore(
        (state) => state.decreaseQuantity
    );

    const removeFromCart = useCartStore(
        (state) => state.removeFromCart
    );

    const clearCart = useCartStore(
        (state) => state.clearCart
    );

    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const tax = subtotal * 0.05;

    const discount = subtotal > 100 ? subtotal * 0.10 : 0;

    const total = subtotal + tax + discount;

    const checkout = total >= 10;

    return (
        <div className="min-h-screen bg-gray-100 p-6 ">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-row mb-6 items-center justify-between w-full">
                    <h1 className="text-2xl font-semibold ">My Cart</h1>

                    <button className={`text-xl flex flex-row justify-center items-center rounded rounded-lg p-2 pb-3 bg-red-700 hover:bg-red-600 text-white ${cart.length === 0 ? "opacity-0" : ""}`}
                        onClick={clearCart}>
                        <img className="h-[20px] w-[20px]" src={trashIcon} alt="trash" />
                        <span className="flex flex-col items-center">
                            Empty Cart
                        </span>
                    </button>
                </div>

                {cart.length === 0 ? (
                    <p className="text-gray-600">Your cart is empty.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Cart Items */}
                        <div className="md:col-span-2 space-y-4">
                            {cart.map(item => (
                                <div
                                    key={item.id}
                                    className="bg-white p-4 rounded shadow flex gap-4"
                                >
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="w-24 h-24 object-cover rounded"
                                    />

                                    <div className="flex-1">
                                        <h2 className="font-medium">{item.title}</h2>
                                        <p className="text-gray-600">
                                            ${(item.price).toFixed(2)}
                                        </p>

                                        <div className="flex items-center mt-2 gap-3">
                                            <button
                                                onClick={() => decreaseQuantity(item.id)}
                                                className="px-2 pb-1 border rounded disabled:opacity-40 disabled:cursor-not-allowed"
                                                disabled={item.quantity === 1}
                                            >
                                                −
                                            </button>

                                            <span>{item.quantity}</span>

                                            <button
                                                onClick={() => increaseQuantity(item.id)}
                                                className="px-2 pb-1 border rounded disabled:opacity-40 disabled:cursor-not-allowed"
                                                disabled={item.quantity === 5}

                                            >
                                                +
                                            </button>

                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="ml-4 text-red-600 text-sm"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>

                                    <div className="font-medium">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Summary */}
                        <div className="bg-white p-5 rounded shadow h-fit">
                            <h2 className="text-lg font-medium mb-4">
                                Order Summary
                            </h2>

                            <div className="flex justify-between mb-2">
                                <span>Subtotal</span>
                                <span>${(subtotal).toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between mb-2">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>

                            <div className="flex justify-between mb-2">
                                <span>Tax (5%)</span>
                                <span>
                                    ${(tax).toFixed(2)}
                                </span>
                            </div>

                            {total > 100 ?
                                <>
                                    <div className="flex justify-between mb-2">
                                        <span>Discount (10%)</span>
                                        <span>
                                            -${(discount).toFixed(2)}
                                        </span>
                                    </div>

                                    <hr className="my-3" />

                                    <div className="flex justify-between font-semibold">
                                        <span>Total</span>
                                        <span>${(total).toFixed(2)}</span>
                                    </div>

                                </>
                                :
                                <>
                                    <hr className="my-3" />

                                    <div className="flex justify-between font-semibold">
                                        <span>Total</span>
                                        <span>${(total).toFixed(2)}</span>
                                    </div>

                                </>
                            }

                            <button
                            onClick={() => navigate("/ShippingDetails")}
                                disabled={!checkout}
                                className="mt-5 w-full px-4 py-2 bg-black hover:bg-gray-700 cursor-pointer text-white rounded rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed">
                                Proceed to Checkout
                            </button>

                            {!checkout && (
                                <p>Minimum order of $10 is required to checkout.</p>
                            )}

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
