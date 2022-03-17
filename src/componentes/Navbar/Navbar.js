import React from "react";
import "./Navbar.css";
import logo from "../../imgs/logoTienda.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Navbar = ({ name, lastname, links }) => {
  return (
    <div>
      <img src={logo} alt="logo" />
      <h1>
        Bienvenido a tu tienda online {name} {lastname}
      </h1>
      <nav>
        {links.map((element) => {
          return (
            <a key={element.id} href={element.tag}>
              {element.link}
            </a>
          );
        })}
      </nav>
      <ShoppingCartIcon color="disabled" />
    </div>
  );
};
