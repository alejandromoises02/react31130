import React from "react";
import { Navbar } from "./componentes/Navbar/Navbar";
import CustomButton  from "./componentes/CustomButton/CustomButton";
import './App.css';

const App = () => {

  //Datos a pasar a Navbar
  const name = "Alejandro";
  const lastname = "Fernandez";
  const categorias = [{link:"Camperas",tag:"#",id:1},{link:"Pantalones",tag:"#",id:2},{link:"Remeras",tag:"#",id:3}];

  return (
    <div className="App-header">
      <Navbar name={name} lastname={lastname} links={categorias} />
      <CustomButton title="Click me" color="primary" />
    </div>
  );
};

export default App;
