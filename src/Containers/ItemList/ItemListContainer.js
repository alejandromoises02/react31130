import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { InitialProducts } from "../../mock/InitialProducts";
import ClipLoader from "react-spinners/ClipLoader";

const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res(InitialProducts);
  }, 1000);
});

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    promise
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.error("error: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>{greeting}</h1>
      {loading ? (
        <span>
          <ClipLoader color={"green"} loading={loading} size={150} />
        </span>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};
