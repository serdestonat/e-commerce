import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export const getStaticPaths = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  const data = await res.json();
  const paths = data.map((item) => ({ params: { id: item.id.toString() } }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${id}/products`
  );
  const data = await res.json();

  return {
    props: { category: data },
  };
};

const categories = ({ category }) => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <ProductCard data={category} />
    </div>
  );
};

export default categories;
