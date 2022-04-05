import React from "react";

export const ItemDetail = ({ product }) => {

    return (
        <div>
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <span>${product.price}</span>
            <p>{product.description}</p>
        </div>
    )
}
