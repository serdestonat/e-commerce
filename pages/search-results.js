import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "@/components/ProductCard";

const SearchResultsPage = ({ Data }) => {
  const router = useRouter();
  const { query } = router.query;
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products`)
      .then((response) => setResults(response.data))
      .catch((error) => console.error("Error fetching search results:", error));
  }, [query]);

  console.log(results);

  let newData = results.filter((item) =>
    item.title.toLowerCase().includes(router.query.searchText)
  );

  console.log(router);

  return (
    <section className="bg-white md:max-w-7xl w-full m-auto md:py-10 py-5">
      <div>
        <h1 className="underline text-3xl text-center mb-10">
          {newData.length} Products Found
        </h1>
      </div>
      {newData.length == 0 && (
        <div className="md:max-w-xl mx-auto w-full bg-red-500 p-5 text-center md:text-lg text-sm rounded-lg text-white">
          No products found for your search criteria!
        </div>
      )}
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
        {newData.map((searchData) => {
          return (
            <>
              <div>
                {results.length > 0 ? (
                  <ul>
                    <li>{searchData.title}</li>
                  </ul>
                ) : (
                  <p>No results found.</p>
                )}
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

<ProductCard></ProductCard>;

export default SearchResultsPage;
