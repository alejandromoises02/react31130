import React, { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  
  const [count, setCount] = useState(initial);

  const handlerAdd = () => {
    console.log(count);
    console.log(stock);
    if(count < stock) setCount(count + 1);
  };

  const handlerSubtract = () => {
    if(count > 0) setCount(count - 1);
  };

  const handlerAddToCart = () => {
    if(count > 0) onAdd(count);
  };

  return (
    <div>
      <button onClick={handlerSubtract}>-</button>
      <span>{count}</span>
      <button onClick={handlerAdd}>+</button>
      <button onClick={handlerAddToCart}>Agregar al Carrito</button>
    </div>
  );
};
