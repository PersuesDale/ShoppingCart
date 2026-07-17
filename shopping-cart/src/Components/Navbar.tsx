import icon from "../assets/Logo/NOZAMA.svg"
import search from "../assets/Icon/search.svg"
import shoppingCart from "../assets/Icon/cart.svg"
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [searchOpen, setSearchOpen] = useState(false);

    const [cartCount] = useState(3);

    const handleSearch = () => {
        
        setOpen(false);

    };

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

                    {/* Desktop Search */}
                    <div className="relative">

                        {/* Search Icon */}
                        {!searchOpen && (
                            <button
                                onClick={() => setSearchOpen(true)}
                                className="text-xl hover:cursor-pointer mt-2"
                                title="Search"
                            >
                                <img className="h-[30px] w-[30px]" src={search} alt="Search"></img>
                            </button>
                        )}

                        {/* Expanded Search Bar */}
                        {searchOpen && (
                            <form
                                onSubmit={() => {
                                    handleSearch();
                                    setSearchOpen(false);
                                }}
                                className="flex items-center gap-2"
                            >
                                <input
                                    type="text"
                                    autoFocus
                                    placeholder="Search..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="px-3 py-1 rounded bg-white text-black outline-none w-48"
                                />

                                <button
                                    type="submit"
                                    className="px-2 py-1 bg-gray-700 rounded"
                                >
                                    Go
                                </button>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setSearchOpen(false);
                                        setQuery("");
                                    }}
                                    className="text-sm text-gray-300"
                                >
                                    ✕
                                </button>
                            </form>
                        )}
                    </div>

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

                {/* Borger */}
                <button
                    onClick={() => setOpen(!open)}
                    className="flex flex-col md:hidden gap-[6px] z-50"
                >
                    <span className={`h-[3px] w-7 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`h-[3px] w-7 bg-white transition-all ${open ? "opacity-0" : ""}`} />
                    <span className={`h-[3px] w-7 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>

                {/* Mobile Menu */}
                <div
                    className={`absolute top-full left-0 w-full bg-black flex flex-col
                    items-center gap-6 py-6 transition-all duration-300 md:hidden z-50
                    ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
                >
                    <Link to="/About">Category</Link>
                    <Link to="/Service">Service</Link>
                    <Link to="/Contact">Contact</Link>

                    {/* Mobile Search */}
                    <div className="relative">

                        {!searchOpen && (
                            <button
                                onClick={() => setSearchOpen(true)}
                                className="text-xl"
                            >
                                <img className="" src={search} alt="Search" />
                            </button>
                        )}

                        {searchOpen && (
                            <form
                                onSubmit={() => {
                                    handleSearch();
                                    setSearchOpen(false);
                                }}
                                className="flex gap-2 w-full justify-center"
                            >
                                <input
                                    type="text"
                                    autoFocus
                                    placeholder="Search..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="px-3 py-1 rounded bg-white text-black outline-none w-[60%]"
                                />

                                <button
                                    type="submit"
                                    className="px-3 py-1 bg-gray-700 rounded"
                                >
                                    Go
                                </button>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setSearchOpen(false);
                                        setQuery("");
                                    }}
                                    className="text-white"
                                >
                                    ✕
                                </button>
                            </form>
                        )}
                    </div>


                    {/* Mobile Cart */}
                    <div onClick={() => navigate("/Cart")} className="relative text-lg">
                        🛒 Cart
                        {cartCount > 0 && (
                            <span className="ml-2 bg-red-600 text-xs px-2 py-1 rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </div>

                    <div className="flex gap-4">
                        <Link to="/Login">Login</Link>
                        <p>Signup</p>
                    </div>
                </div>

            </div>
        </nav>
    );
}

