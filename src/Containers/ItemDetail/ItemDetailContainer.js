import React, { useEffect, useState } from "react";
import { doc, getDoc, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { ItemDetail } from "./ItemDetail.js";
import { db } from "../../firebase/firebase";


export const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    
    const productSCollection = collection(db, "productos");
    const refDoc = doc(productSCollection,id)
    getDoc(refDoc)
    .then((result)=>{
      setProduct(result.data());
    })




    const URL = `https://fakestoreapi.com/products/${id}`;

    const getitem = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setProduct({...data,stock:Math.floor((Math.random() * (100 - 1 + 1)) + 1)});
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
