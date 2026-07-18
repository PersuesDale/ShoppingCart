import icon from "../../assets/Logo/NOZAMA.svg"
import shoppingCart from "../../assets/Icon/cart.svg"
import { useNavigate, Link } from "react-router-dom"
import { useCartStore } from "../../Store/cartStore"
import { useEffect, useState } from "react";

export default function Navbar() {

    const navigate = useNavigate();

    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

    useEffect(() => {

        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }

    }, [darkMode])

    const cartCount = useCartStore((state) =>
        state.cart.reduce((total, item) => total + item.quantity, 0)
    )

    return (
        <nav className="w-full bg-black  px-6 py-4 relative overflow-visible z-50">
            <div className="w-[89vw] mx-auto text-white flex items-center justify-between">

                <div className="h-12.5 w-12.5">
                    <Link to="/" className="block">
                        <img
                            src={icon}
                            alt="icon"
                            className="h-15 w-15 rounded-full hover:cursor-pointer"
                        />
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-6">

                    <div onClick={() => navigate("/Cart")} className="relative onmouseover:cursor-pointer">
                        <span className="text-lg">
                            <img className="h-7.5 w-7.5" src={shoppingCart} alt="Cart" />
                        </span>

                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-3 bg-red-600 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </div>

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="text-2xl cursor-pointer"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? "☀️" : "🌙"}
                    </button>

                </div>

                <div className={` bg-black flex flex-row items-center gap-6 py-6 transition-all duration-300 md:hidden z-50`}>
                    <div onClick={() => navigate("/Cart")} className="relative onmouseover:cursor-pointer">
                        <span className="text-lg">
                            <img className="h-7.5 w-7.5" src={shoppingCart} alt="Cart" />
                        </span>

                        <div className="w-full">

                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-3 bg-red-600 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                    </div>
                    
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="text-2xl cursor-pointer"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? "☀️" : "🌙"}
                    </button>

                </div>

            </div>

        </nav>

    );

}

