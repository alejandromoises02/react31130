import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import ClipLoader from "react-spinners/ClipLoader";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { categoryID } = useParams();

  useEffect(() => {
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

    getitems();
  }, [categoryID]);

  if (loading) {
    return (
      <>
        <h1>{greeting}</h1>
        <h2>
        </h2>
        <img src="" alt="" />
        <p></p>
        <span>
          <ClipLoader color={"green"} loading={loading} size={150} />
        </span>
      </>
    );
  } else if (error) {
    return (
      <>
        <h1>{greeting}</h1>
        <h2>
        </h2>
        <img src="" alt="" />
        <p></p>
        <h1>Lo sentimos hubo un error</h1>
      </>
    );
  }
  return (
    <>
      <h1>{greeting}</h1>
      <h2>
        </h2>
        <img src="" alt="" />
        <p></p>
      <ItemList products={products} />
    </>
  );
  
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
///////////////
condicion && <>cosa1</>
!condicion && <>cosa2</>
/////////
if(condicion){}
///////////////
import Comp1 from "dhjasldsadsa"
import Comp2 from "shdjahdk"

const show = condicion ? Comp1:Comp2
////////////////////
//return <show></show>
//////////////////

/*
return 
{
 condicion ? <h1 classname="rojo">Mensajefsdikfdsikflsdfikdsñlfkdslñfskdslfkdsñldsfkdsl</h1>
 :<h1 classname="negro">Mensajefsdfkldjlñsdfjksdflñsdjkfñlsdjkdsflñdsjkfñsdljds</h1>}

 <h1 classname={condicion ? "rojo":"negro"}>dasñdlkasdlñaskdalñd</h1>
*/