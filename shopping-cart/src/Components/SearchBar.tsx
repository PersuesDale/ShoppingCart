import searchico from "../assets/Icon/search.svg"

type SearchBarProps = {

    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;

};

const SearchBar = ({ search, setSearch }: SearchBarProps) => {
    return (
        <div className="relative w-[250px]">
            <img
                src={searchico}
                alt="Search"
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5"
            />

            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border rounded-lg py-3 pl-10 pr-3"
            />

        </div>
    )
}

export default SearchBar;