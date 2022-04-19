import React, { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (product, qty) => {
     const newProduct = {
       ...product,
       qty
     };
     if(IsinCart(product.id)){
       const productFind = cart.find(product => product.id === newProduct.id);
       const index = cart.indexOf(productFind);
       const aux = [...cart];
       aux[index].qty += qty;//aux[index].qty = aux[index].qty + qty;
       setCart(aux);
     }else{
       setCart([...cart,newProduct]);
       /*
       const copia = cart.slice(0);
       copia.push(newProduct);
       setCart(copia);
       //setCart(cart.slice(0).push(newPruct));
       */ 
     }
  };

  const deleteProduct = (id) => {
    console.log();
      //Usar un filter para eliminar el id indicado
    console.log("esta funcion borra usuarios");
  };
  
  const IsinCart = (id) => {
      return false;
  };

  const getProductsQty = () => {
      //foraech
    console.log("esta funcion devuelve la cantidad de usarios");
  };

  const clearCart = () => {
    setCart([]);
  }

  const ContextValue = {
    cart,
    addProduct,
    deleteProduct,
    IsinCart,
    getProductsQty,
    clearCart
  }

  return (
    <Provider value={ContextValue}>
      {children}
    </Provider>
  );
};

export default CustomProvider;





