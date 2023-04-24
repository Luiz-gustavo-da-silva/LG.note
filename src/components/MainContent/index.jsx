import React from "react";
import style from "./index.module.css";
import Note from "../Note/index"

function Header() {
  return (
    <div className={style.mainContent}>
      <div className={style.divH1}>
        <h1>Notes</h1>
      </div>
      <div className={style.gridContainer}>
        <Note cor={"#dbbdff"}/>
        <Note cor={"#efeacd"}/>
        <Note cor={"#efeacd"}/>
        <Note cor={"#ffbdca"}/>
        <Note cor={"#ffbdca"}/>
        <Note cor={"#ddecd0"}/>
        <Note cor={"#dbbdff"}/>
      </div>
    </div>
  );
}

export default Header;
