import React from "react";
import { Navbar } from "./componentes/Navbar/Navbar";
import "./App.css";
import { ItemListContainer } from "./Containers/ItemList/ItemListContainer";

const App = () => {

  //Datos a pasar a Navbar
  const name = "Alejandro";

  

  return (
    <div style={styles}>
      <Navbar name={name} />
      <ItemListContainer greeting={"Fruteria Online"} />
    </div>
  );
};

export default App;

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};
