import icon from "../assets/Logo/NOZAMA.svg"
import shoppingCart from "../assets/Icon/cart.svg"
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
    const navigate = useNavigate();

    const [cartCount] = useState(3);

    return (
        <nav className="w-full bg-black px-6 py-4 relative overflow-visible z-50">
            <div className="w-[89vw] mx-auto text-white flex items-center justify-between">

                {/* Logo */}
                <div className="h-[50px] w-[50px]">
                    <Link to="/" className="block">
                        <img
                            src={icon}
                            alt="icon"
                            className="h-[60px] w-[60px] rounded-full hover:cursor-pointer"
                        />
                    </Link>
                </div>

                {/* Desktop Right Section */}
                <div className="hidden md:flex items-center gap-6">

                    {/* Cart Button */}
                    <div onClick={() => navigate("/Cart")} className="relative onmouseover:cursor-pointer">
                        <span className="text-lg">
                            <img className="h-[30px] w-[30px]" src={shoppingCart} alt="Cart" />
                        </span>

                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-3 bg-red-600 text-xs
                                w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </div>

                </div>

                {/* Mobile Nav */}
                <div
                    className={`absolute bg-black flex flex-row
                    items-center gap-6 py-6 transition-all duration-300 md:hidden z-50`}>
                    
                </div>

            </div>
        </nav>
    );
}

