import React, { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CustomProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([
    { nombre: "Ale", id: 1 },
    { nombre: "Juan", id: 2 }
  ]);

  const addUsuario = (info) => {
      //opcion 1, copiar el array por algun metodo valido, hacer un push a la copia y asignarlo con el setEstado
      //opcion 2 (MEJOR OPCION) hacer uso de spread
    console.log("esta funcion añade usuarios");
  };

  const deleteUsuario = (id) => {
      //Usar un filter para eliminar el id indicado
    console.log("esta funcion borra usuarios");
  };

  const IsinUsuarios = (id) => {
      //usar un Find para determinar si un objeto existe dentro del array
  };

  const getCantidadUsuarios = () => {
      //foraech
    console.log("esta funcion devuelve la cantidad de usarios");
  };

  const clearLista = () => {
    setUsuarios([]);
  }

  return (
    <Provider
      value={{ usuarios, addUsuario, deleteUsuario, getCantidadUsuarios, clearLista }}
    >
      {children}
    </Provider>
  );
};

export default CustomProvider;
