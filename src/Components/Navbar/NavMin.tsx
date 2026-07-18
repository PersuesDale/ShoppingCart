import { Link } from "react-router-dom"
import icon from "../../assets/Logo/NOZAMA.svg"
import { useEffect, useState } from "react";

const NavMin = () => {

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
    return (
        <nav className="w-full bg-black px-6 py-4 relative overflow-visible z-50">
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

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="text-2xl cursor-pointer"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? "☀️" : "🌙"}
                    </button>

                </div>

                <div className={` bg-black flex flex-row items-center gap-6 py-6 transition-all duration-300 md:hidden z-50`}>

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
    )
}

export default NavMin