import React from "react";
import style from "./index.module.css";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";

function Note({ cor }) {
  return (
    <div className={style.gridItem}>
      <div className={style.celula} style={{ background: `${cor}` }}>
        <div className={style.header}>
          Título
          <button
            style={{
              background: "none",
              border: "none",
              padding: "0px",
              display: "flex",
              alignItems: "flex-start",
              cursor: "pointer",
            }}
          >
            <CloseOutlined style={{ fontSize: "0.7rem" }} />
          </button>
        </div>
        <div className={style.body}> Seu texto</div>
        <div className={style.footer}>
          <button className={style.buttonPlus}>
            <EditOutlined />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
