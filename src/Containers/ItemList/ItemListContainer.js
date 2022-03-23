import React from "react";
import { ItemCount } from "../../componentes/ItemCount/ItemCount";

export const ItemListContainer = ({ greeting }) => {
  const onAdd = (count) => {
    console.log(`Estas comprando ${count}`);
  };

  return (
    <>
      <h1>{greeting}</h1>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </>
  );
};
