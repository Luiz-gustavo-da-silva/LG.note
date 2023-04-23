import React from "react";
import style from "./index.module.css";
import { PlusOutlined } from "@ant-design/icons";

function Footer() {
  return (
    <div className={style.footer}>
        <div className={style.container}>
            <p> Create by Luiz Gustavo </p>
        </div>
    </div>
  );
}

export default Footer;
