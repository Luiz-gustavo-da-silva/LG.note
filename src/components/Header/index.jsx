import React from "react";
import style from "./index.module.css";
import { SearchOutlined } from "@ant-design/icons";

function Header() {
  return (
      <header className={style.header}>
        <div className={style.container}>
          <div>
            <button className={style.buttonSearch}>
            <SearchOutlined style={{color:'#808080'}} />
            </button>
          </div>
          <div>
            <input type="text" className={style.input} placeholder="Search" />
          </div>
        </div>
      </header>
  );
}

export default Header;
