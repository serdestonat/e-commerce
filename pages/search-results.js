import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

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
    <section className="bg-white md:max w-full m-auto md:p-10 py-5">
      <div>
        <h1 className="underline text-3xl text-center mb-10">
          {newData.length} Products Found
        </h1>
      </div>
      {newData.length == 0 && (
        <div className="md:max mx-auto w-full bg-red-500 p-5 text-center md:text-lg text-sm rounded-lg text-white">
          No products found for your search criteria.
        </div>
      )}
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
        {newData.map((searchData) => {
          return (
            <>
              <Link href={`/products/${searchData.id}`}>
                <div className=" rounded-2xl bg-[silver] border-[8px] divide-y divide-dashed items-center justify-evenly justify-between p-8">
                  {results.length > 0 ? (
                    <div>
                      <img
                        className="h-[300px] w-[300px]"
                        src={searchData.images[0]}
                        alt="image"
                        width={300}
                        height={300}
                      ></img>
                      <h3 className="items-center font-[750]">
                        {searchData.title}
                      </h3>
                      <p>${searchData.price}</p>
                    </div>
                  ) : (
                    <p>No results found.</p>
                  )}
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default SearchResultsPage;
