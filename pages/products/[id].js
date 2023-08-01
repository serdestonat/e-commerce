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
        <h1 className="text-[1000] font-[750]">{category.title}</h1>
        <p>${category.price}</p>
        <p className="md:container md:mx-auto pt-6">{category.description}</p>
        <p className="md:container md:mx-auto pt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          expedita amet quibusdam explicabo ipsam, praesentium voluptates
          voluptate ipsum iusto in reiciendis est eius cumque, magni aliquid
          delectus provident libero ut?
        </p>
        <div className="pt-6">
          <button className="flex md:mx-auto hover:bg-[#264f4a] text-[white] p-2 rounded-[25px] justify-around w-[10]">
            Add To Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
