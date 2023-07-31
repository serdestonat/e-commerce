import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBar";

/*export const getStaticProps = async () => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/categories`);
  const data = await res.json();

  return {
    props: { categories: data },
  };
};*/

const Navbar = ({ categories }) => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image
            src="/scremove.png"
            alt="cart"
            width={100}
            height={120}
          ></Image>
        </Link>
      </div>
      <ul className="categorul">
        {Data.map((category, index) => {
          if (index < 4) {
            return (
              <li className="categorli" key={index}>
                <div key={category.id}>
                  <Link href={`/categories/${category.id}`} className="link">
                    <h3>{category.name}</h3>
                  </Link>
                </div>
              </li>
            );
          }
        })}
      </ul>

      <div>
        <SearchBar></SearchBar>
      </div>
    </nav>
  );
};

export default Navbar;
