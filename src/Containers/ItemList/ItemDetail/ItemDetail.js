import React, { useState } from "react";
import { ItemCount } from "../../../componentes/ItemCount/ItemCount";
import { Link } from "react-router-dom";

export const ItemDetail = ({ product }) => {
  const [finalized, setFinalized] = useState(false);

  const onAdd = (count) => {
    console.log(`Se agregaran ${count} productos al carrito`);
    setFinalized(true);
  };

  return (
      <div style={styles.infoContainer}>
        <img style={styles.img} src={product.image} alt={product.title} />
        <div style={styles.infoTextContainer}>
        <div style={styles.infoText}>
          <h1>{product.title}</h1>
          <span>${product.price}</span>
          <p>{product.description}</p>
        </div>

        {!finalized ? (
          <ItemCount onAdd={onAdd} stock={product.stock} initial={1} />
        ) : (
          <Link to="/cart">
            <button>Finalizar compra</button>
          </Link>
        )}
        </div>
      </div>
  );
};

const styles = {
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: "40%"
  },
  infoTextContainer:{
    display: "flex",
    flexDirection: "column",
  },
  infoText: {
    padding: "10px",
    marging: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  }
};
