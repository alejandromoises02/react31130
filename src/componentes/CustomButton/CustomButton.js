import React from "react";

const CustomButton = ({ title, color, letra }) => {

    const buttonColor = color === "primary" 
        ? ("blue")
        :(color === "secondary" 
            ? ("green")
            :(color === "danger" 
                ? ("red")
                :("yellow")
        )
    )

    const sizeLetra = letra || 16;

  const buttonStyles = {
    backgroundColor: buttonColor,
    fontSize: sizeLetra,
    padding: 5,
    height: 40,
    width: 120
  };

  return <button style={buttonStyles}>{title}</button>;
};

export default CustomButton;
