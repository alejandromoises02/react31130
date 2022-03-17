import React from "react";
import { Navbar } from "./componentes/Navbar/Navbar";

const App = () => {

  //Datos a pasar a Navbar
  const name = "Alejandro";
  const lastname = "Fernandez";
  const categorias = [{link:"Camperas",tag:"#",id:1},{link:"Pantalones",tag:"#",id:2},{link:"Remeras",tag:"#",id:3}];

  return (
    <>
      <Navbar name={name} lastname={lastname} links={categorias} />
    </>
  );
};

export default App;
