
const BackToTop = () => {

    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>

            <div className="bg-black text-center py-3 text-sm hover:bg-gray-700 text-white cursor-pointer" onClick={handleBackToTop}>
                Back to top
            </div>

        </div>
    )
}

export default BackToTop