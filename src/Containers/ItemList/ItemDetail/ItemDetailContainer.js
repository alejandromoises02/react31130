import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { ItemDetail } from "./ItemDetail.js";


export const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const URL = `https://fakestoreapi.com/products/${id}`;

    const getitem = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setProduct(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getitem();
  }, [id]);

  return (
    <>
      {loading ? (
        <span>
          <ClipLoader color={"green"} loading={loading} size={150} />
        </span>
      ) : error ? (
        <h1>Lo sentimos hubo un error</h1>
      ) : (
        <ItemDetail product={product} />
      )}
    </>
  );
};
