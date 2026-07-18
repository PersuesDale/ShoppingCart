import BackToTop from "./BackToTop";

const Footer = () => {
    return (
        <footer className="bg-[#abafb4] text-black ">

            <BackToTop />

            {/* Main columns */}
            <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">

                {/* Column uno */}
                <div>
                    <h3 className="font-semibold mb-2 hover:cursor-default">Get to Know Us</h3>
                    <ul className="space-y-1 text-sm">
                        <li className="hover:cursor-pointer hover:underline">About Nozama</li>
                        <li className="hover:cursor-pointer hover:underline">Careers</li>
                        <li className="hover:cursor-pointer hover:underline">Press Releases</li>
                        <li className="hover:cursor-pointer hover:underline">Nozama Science</li>
                    </ul>
                </div>

                {/* Column dos */}
                <div>
                    <h3 className="font-semibold mb-2 hover:cursor-default">Connect with Us</h3>
                    <ul className="space-y-1 text-sm">
                        <li className="hover:cursor-pointer hover:underline">Facebook</li>
                        <li className="hover:cursor-pointer hover:underline">Twitter</li>
                        <li className="hover:cursor-pointer hover:underline">Instagram</li>
                    </ul>
                </div>

                {/* Column tres */}
                <div>
                    <h3 className="font-semibold mb-2 hover:cursor-default">Make Money with Us</h3>
                    <ul className="space-y-1 text-sm">
                        <li className="hover:cursor-pointer hover:underline">Sell on Nozama</li>
                        <li className="hover:cursor-pointer hover:underline">Nozama Global Selling</li>
                        <li className="hover:cursor-pointer hover:underline">Become an Affiliate</li>
                        <li className="hover:cursor-pointer hover:underline">Advertise Your Products</li>
                        <li className="hover:cursor-pointer hover:underline">Nozama Pay on Merchants</li>
                    </ul>
                </div>

                {/* Column cuatro */}
                <div>
                    <h3 className="font-semibold mb-2 hover:cursor-default">Let Us Help You</h3>
                    <ul className="space-y-1 text-sm">
                        <li className="hover:cursor-pointer hover:underline">Your Account</li>
                        <li className="hover:cursor-pointer hover:underline">Returns Centre</li>
                        <li className="hover:cursor-pointer hover:underline">100% Purchase Protection</li>
                        <li className="hover:cursor-pointer hover:underline">Nozama App Download</li>
                        <li className="hover:cursor-pointer hover:underline">Help</li>
                    </ul>
                </div>

            </div>

            {/* divider */}
            <div className="border-t border-gray-600"></div>

        </footer>
    );
};

export default Footer;
