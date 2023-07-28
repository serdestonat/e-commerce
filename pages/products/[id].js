import ProductCard from "@/components/ProductCard";

function Products({ Products }) {
  return <ProductCard Product={products}></ProductCard>;
}

export const getSercerSideProps = async ({ query }) => {
  let id = query.id;

  const res = await fetch("https://api.escuelajs.co/api/v1/products" + id);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};

export default Products;
