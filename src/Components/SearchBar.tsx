import searchicon from "../assets/Icon/search.svg"

type SearchBarProps = {

    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;

};

const SearchBar = ({ search, setSearch }: SearchBarProps) => {
    return (
        <div className="relative flex justify-center items-center w-62.5">

            <img
                src={searchicon}
                alt="Search"
                className="absolute left-3 mt-0.5  h-5 w-5"
            />

            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full py-3 border dark:text-white rounded-lg  pl-10 pr-3"
            />

        </div>
    )
}

export default SearchBar;