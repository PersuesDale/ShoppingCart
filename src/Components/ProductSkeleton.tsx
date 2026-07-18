const ProductSkeleton = () => {
    return (
        <div className="bg-white dark:bg-black rounded-lg shadow p-4 animate-pulse">

            <div className="h-48 bg-gray-200 dark:bg-gray-900 rounded-md mb-4" />

            <div className="h-5 bg-gray-200 dark:bg-gray-900 rounded w-3/4 mb-3" />

            <div className="h-4 bg-gray-200 dark:bg-gray-900 rounded w-1/2 mb-3" />

            <div className="h-5 bg-gray-200 dark:bg-gray-900 rounded w-1/4 mb-4" />

            <div className="h-10 bg-gray-200 dark:bg-gray-900 rounded w-full" />

        </div>
    );
};

export default ProductSkeleton;