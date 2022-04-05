/*import React, { useState } from "react";
import { ListaUsuarios } from "./ListaUsuarios.js";
import { uid } from "uid";

export const ComponenteDeEventos = () => {
  const [user, setUser] = useState("");
  const [users, setUsers] = useState([]);
  const [finalizar, setFinalizar] = useState(false);


  const manejarClick = (event) => {
    //console.log(event.target);
    //event.stopPropagation();
    //console.log("Click en el boton");
    //const copia = users.slice(0);
    //copia.push(user);
    //setUsers(copia);

    setUsers([...users, { nombre: user, id: uid() }]);
  };

  const manejarChange = (event) => {
    setUser(event.target.value);

    //console.log(event.target.value);
  };

  const prevenirDefault = (event) => {
    event.preventDefault();
    console.log("Prevenido");
  };

  const manejarClickDiv = (event) => {
    console.log("click en div");
  };

  const manejarEliminarUsuario = (id) => {
    //console.log("desde el padre: ", id);
    const filtrado = users.filter(user => user.id !== id);
    setUsers(filtrado);
  };


  return (
    <div>
        <h1>ComponenteDeEventos</h1>
      <input type="text" onChange={manejarChange} />
      <button id="btn" onClic={manejarClick}>
        Boton
      </button>
      <ListaUsuarios
        users={users}
        manejarEliminarUsuario={manejarEliminarUsuario}
      />
    </div>
  );
};*/
