import categories from "@/pages/categories/[id]";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data }) => {
  return (
    <>
      <div className="ml-11 flex flex-wrap items-center">
        {data.map((item) => {
          return (
            <>
              <Link href={`/products/${item.id}`}>
                <div className=" rounded-2xl bg-[silver] border-[8px] divide-y divide-dashed items-center justify-evenly justify-between p-20">
                  <img
                    className="h-[300px] w-[300px]"
                    src={item.images[0]}
                    alt="image"
                    width={200}
                    height={200}
                  ></img>
                  <h3 className="items-center font-[750]">{item.title}</h3>
                  <p className="items-center">${item.price}</p>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductCard;
