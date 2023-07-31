import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function CategoryProducts({ Categories }) {
  const [More, setMore] = useState(8);
  const router = useRouter();

  const loadProducts = () => {
    setMore(More + 8);
  };

  useEffect(() => {
    setMore(8);
  }, [router]);

  const TitleName = router.query.id;
  const CategorySlice = Categories.slice(0, More);

  return;
}
