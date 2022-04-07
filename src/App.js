import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./componentes/Navbar/Navbar";
import { ItemListContainer } from "./Containers/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./Containers/ItemList/ItemDetail/ItemDetailContainer";
import { Cart } from "./componentes/Cart/Cart.js";
import CustomProvider  from "./context/context";
//import { ComponenteDeEventos } from "./ComponenteDeEventos"

const App = () => {
  const branch = "Tienda Online";

  return (
    <BrowserRouter>
      <CustomProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer greeting={branch} />} />
          <Route
            path="/categories/:categoryID"
            element={<ItemListContainer greeting={branch} />}
          />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CustomProvider>
    </BrowserRouter>
  );
};

export default App;

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};
