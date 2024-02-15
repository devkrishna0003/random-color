import React, { useState } from "react";
import styles from "./ButtonComponent.module.css";

const ButtonComponent = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  const randomNum = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleHexColor = () => {
    const hex = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomNum(hex.length)];
    }
    setColor(hexColor);
  };
  const handleRgbColor = () => {
    let r = randomNum(256);
    let g = randomNum(256);
    let b = randomNum(256);
    setColor(`rgb(${r}, ${g} ,${b})`);
  };
  return (
    <div style={{ background: color }} className={styles.container}>
      <div className={styles.mainContainer}>
        <button onClick={() => setTypeOfColor("hex")} className={styles.button}>
          HEX color
        </button>
        <button onClick={() => setTypeOfColor("rgb")} className={styles.button}>
          RGB color
        </button>
        <button
          onClick={typeOfColor === "hex" ? handleHexColor : handleRgbColor}
          className={styles.button}
        >
          Random color
        </button>
      </div>
      <div className={styles.colorCode}>
        <h1
          style={{
            color: color,
            textTransform: "uppercase",
            fontFamily: "poppins",
            fontSize: "18px",
            backgroundColor: "black",
            color: "white",
            padding: '3px 8px'
          }}
        >
          Color: {color}
        </h1>
      </div>
    </div>
  );
};

export default ButtonComponent;
