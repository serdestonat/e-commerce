import React from "react";

const ProductCard = ({ url, name, price }) => {
  return (
    <div className="pcard">
      <img
        className="object-cover object-center"
        src={url}
        width={750}
        height={750}
      />
      <h2 className=" ">{name}</h2>
      <p className="font-semibold">${price}</p>
    </div>
  );
};

export default ProductCard;
