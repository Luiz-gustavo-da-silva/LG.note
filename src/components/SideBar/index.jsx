import React from "react";
import style from "./index.module.css";
import ButtonPlus from "../Modal/index";

function SideBar() {
  return (
    <div className={style.sidebar}>
      <div className={style.container}>
        <div>
          <h1 className={style.logo}>EJECT.note</h1>
        </div>
        <div>
          <ButtonPlus />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
