import icon from "../../assets/Logo/NOZAMA.png"

const LandingNav = () => {

    return (

        <div>

            <nav className="w-full bg-black px-6 py-4 relative overflow-visible">
                <div className="mx-auto text-white flex items-center justify-between">

                    <div className="h-[50px] w-[50px]">
                        <a href="/" className="block">
                            <img 
                                src={icon}
                                alt="icon"
                                className="h-full w-full"
                            />
                        </a>

                    </div>

                </div>
            </nav>

        </div>

    )

}

export default LandingNav