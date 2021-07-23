import { useState, useEffect } from "react";
import "../styles/BlueBack.css";
import { useGlobalContext } from "../context/context";
function BlueBack() {
  const { intro, parted } = useGlobalContext();

  return (
    <div className="no-overflow">
      <div className="relative">
        <div className="back">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <div
          className={`block1 ${intro && "pushup-1"} ${
            parted && "part-left"
          }`}
        ></div>
        <div
          className={`block2 ${intro && "pushup-2"} ${
            parted && "part-right"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default BlueBack;
