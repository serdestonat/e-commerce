import useShop from "@/context/ShopContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import basket from "../basket";

export const getStaticPaths = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await res.json();
  const paths = data.map((item) => ({ params: { id: item.id.toString() } }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  const data = await res.json();

  return {
    props: { category: data },
  };
};
const Products = ({ category }) => {
  const id = category.id;
  const name = category.title;
  const url = category.images;
  const price = category.price;
  const description = category.description;

  const {
    total,
    products,
    addToBasket,
    removeFromBasket,
    incrementCount,
    decreaseCount,
  } = useShop();
  const [count, setCount] = useState(1);

  const handleClickPlus = () => {
    setCount(count + 1);
  };

  const handleClickMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    const product = { id, name, url, price, description, count };

    console.log(product);
    addToBasket(product);
    setCount(1);
  };
  return (
    <div className="flex p-10">
      <img
        className="h-[500px] w-[500px]"
        src={category.images[0]}
        alt="image"
        width={200}
        height={200}
      ></img>
      <div className="pl-10 ">
        <h1 className="text-[x-large] font-[750]">{category.title}</h1>
        <p>${category.price}</p>
        <p className="md:container md:mx-auto pt-6">{category.description}</p>
        <p className="md:container md:mx-auto pt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          expedita amet quibusdam explicabo ipsam, praesentium voluptates
          voluptate ipsum iusto in reiciendis est eius cumque, magni aliquid
          delectus provident libero ut?
        </p>
        <div className="pt-6">
          <button
            onClick={handleAdd}
            className="flex md:mx-auto bg-[rgb(40,51,52,0.75)] hover:bg-[black] hover:transition-[0.2s] text-[white] p-2 rounded-[25px] justify-around w-[10]"
          >
            Add To Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
