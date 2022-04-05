import React from "react";
import logo from "../../imgs/logoTienda.png";
import { CartWidget } from "../CartWidget/CartWidget";
import styles from "./Navbar.Styles";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const categorys = [
    { name: "Electronics", route: "categories/electronics", id: "electronics" },
    { name: "Jewelery", route: "categories/jewelery", id: "jewelery" },
    { name: "Men's clothing", route: "categories/men's clothing", id: "men's clothing" },
    { name: "Women's clothing", route: "categories/women's clothing", id: "women's clothing" }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.branchContainer}>
        <NavLink to="/">
          <img style={styles.logo} src={logo} alt="logo" />
        </NavLink>
        <h1 style={styles.title}>Bienvenido</h1>
      </div>
      <div style={styles.links}>
        <nav>
         
         
          })}
        </nav>
        <NavLink to="/cart">
          <CartWidget />
        </NavLink>
      </div>
    </div>
  );
};
