import React from "react";
import style from "./index.module.css";
import Note from "../Note/index"

function Header() {
  return (
    <div className={style.mainContent}>
      <div className={style.divH1}>
        <h1 style={{ fontSize: "2.5rem", fontFamily: "Roboto Mono" }}>Notes</h1>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent:'center' }} className={style.containerCelulas}>
        <Note cor={"#dbbdff"}/>
        <Note cor={"#efeacd"}/>
        <Note cor={"#efeacd"}/>
        <Note cor={"#ffbdca"}/>
        <Note cor={"#ffbdca"}/>
        <Note cor={"#ddecd0"}/>
        <Note cor={"#dbbdff"}/>
        <Note cor={"#ddecd0"}/>
      </div>
    </div>
  );
}

export default Header;
