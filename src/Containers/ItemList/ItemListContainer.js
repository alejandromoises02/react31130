import React, { useEffect, useState } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import ClipLoader from "react-spinners/ClipLoader";
import { db } from "../../firebase/firebase";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { categoryID } = useParams();


  useEffect(() => {
    
    const productsCollection = collection(db, "productos");
    const q = query(
      productsCollection, 
      where("category", "==", "men's clothing"),
      where("price",">","100"));
    getDocs(q)
    .then((result)=>{
      const docs = result.docs;
      const lista = docs.map(producto => {
        const id = producto.id
        const product = {
          id,
          ...producto.data()
        }
        return product;
      })
      console.log(lista);
      setProducts(lista);
    })
    .catch(error => {console.log(error)})
    .finally(()=>{
      setLoading(false);
    })




/*
    const URL = categoryID
      ? `https://fakestoreapi.com/products/category/${categoryID}`
      : "https://fakestoreapi.com/products";

    const getitems = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setProducts(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getitems();*/
  }, [categoryID]);

  return (
    <>
      <h1>{greeting}</h1>
      {loading ? (
        <span>
          <ClipLoader color={"green"} loading={loading} size={150} />
        </span>
      ) : error ? (
        <h1>Lo sentimos hubo un error</h1>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

/*
const url = "";
if(name){
  url=`ulrconcantegoria${name}`;
}else{
url="urlproductosgenerales"
}
fetch(url)*/
