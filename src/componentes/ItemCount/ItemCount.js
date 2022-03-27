import React, { useState, useEffect } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  
  const [count, setCount] = useState(initial);

  const handlerAdd = () => {
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
      <button onClick={handlerAdd}>+</button>
      <span>{count}</span>
      <button onClick={handlerSubtract}>-</button>
      <button onClick={handlerAddToCart}>Agregar al Carrito</button>
    </div>
  );
};
