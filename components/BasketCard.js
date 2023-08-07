import React, { use } from "react";
import useShop from "@/context/ShopContext";
import { useState, useEffect } from "react";
import Link from "next/link";

const BasketCard = ({ product }) => {
  const id = product.id;
  const name = product.name;
  const url = product.images;
  const price = product.price;
  const initialCount = product.count;
  const description = product.description;

  const {
    total,
    products,
    addToBasket,
    removeFromBasket,
    incrementCount,
    decreaseCount,
  } = useShop();
  const [count, setCount] = useState(initialCount);
  const [clicked, setClicked] = useState("");

  useEffect(() => {
    const product = { id, name, url, price, description, count };
    if (clicked === "plus") {
      incrementCount(product);
    } else if (clicked === "minus") {
      if (count >= 1) {
        decreaseCount(product);
      } else {
        removeFromBasket(product);
      }
    } else if (clicked === "trash") {
      removeFromBasket(product);
    }

    console.log(products);
  }, [count, clicked]);

  const handleClickPlus = () => {
    setClicked("plus");
    setCount(count + 1);
  };

  const handleClickMinus = () => {
    setClicked("minus");
    setCount(count - 1);
  };

  const handleClickTrash = () => {
    setClicked("trash");
  };

  return (
    <div className="flex shadow-[rgba(149,157,165,0.2)_0px_8px_24px] rounded-[3px] mb-5 ">
      <img
        src={product.url[0]}
        alt="product"
        className="h-auto w-[22%] rounded-l-[3px] "
      />

      <div className="flex justify-between p-5 w-[60%] flex-col">
        <div>
          <h3 className=" text-lg font-semibold">{name}</h3>
          <h3>{description}</h3>
          <h3 className="text-[12px] pt-[5px]">Unit price: ${price}</h3>
        </div>

        <div className="w-[100px] flex text-center justify-center h-[35px]   border-[#00000046] rounded-[3px] border-[1px]">
          <button
            className="w-[30%] font-bold  flex items-center justify-center text-4xl"
            onClick={handleClickMinus}
          >
            <img src="/minus.png" className="w-[50%]" />
          </button>
          <div className="flex justify-center items-center text-xl w-[40%]">
            <p className="mb-[5px]">{count}</p>
          </div>
          <button
            className="  w-[30%] flex items-center  justify-center text-4xl"
            onClick={handleClickPlus}
          >
            <img src="/plus.png" className="w-[50%]" />
          </button>
        </div>
      </div>
      <div className="flex flex-col w-[20%] justify-between items-center pb-5">
        <div className="w-full flex items-end justify-end pr-7 pt-7">
          <button onClick={handleClickTrash}>
            <img
              src="/trash.png"
              className="h-[25px] hover:h-[26px] ease-in duration-100"
              alt="bin"
            />
          </button>
        </div>

        <h3 className="text-center text-xl font-semibold text-[#D3825F]">
          ${product.price * product.count}
        </h3>
      </div>
    </div>
  );
};

export default BasketCard;
