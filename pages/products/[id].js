import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Products = () => {
  const [Data, setData] = useState([]);

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  return (
    <div>
      {Data.title} {id}
    </div>
  );
};

/*function Products({ Products }) {
  return <ProductCard Product={products}></ProductCard>;
}

export const getServerSideProps = async ({ query }) => {
  let id = query.id;

  const res = await fetch(``);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};
*/
export default Products;
