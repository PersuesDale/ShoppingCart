import { Link } from "react-router-dom"
import icon from "../../assets/Logo/NOZAMA.svg"

const NavMin = () => {
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
            </div>
               
        </nav>
    )
}

export default NavMin