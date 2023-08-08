import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import "@/pages/categories/[id]";

const SearchBar = ({ Data }) => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [Search, setSearch] = useState("");

  /*let newData = Data.filter((item) =>
    item.title.toLowerCase().includes(Router.query.searchText)
  );*/

  // const handleInputChange = (event) => {
  //   setQuery(event.target.value);
  // };

  // const handleSearch = () => {
  //   router.push(`/search-results?query=${encodeURIComponent(query)}`);
  // };

  return (
    <>
      <div className="searchbar">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearch("");
            router.push({
              pathname: "/search-results",
              query: {
                searchText: Search,
              },
            });
          }}
        >
          <input
            type="text"
            value={Search}
            onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          />
          <button type="submit" className="items-center flex-wrap absolute">
            <Image
              src="/search-icon.png"
              alt="search"
              height={25}
              width={25}
            ></Image>
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
