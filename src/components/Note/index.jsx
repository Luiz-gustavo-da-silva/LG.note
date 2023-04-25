import React from "react";
import style from "./index.module.css";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";

function Note({ cor, titulo, mensagem, id, removerNota }) {

  return (
    <div className={style.gridItem}>
      <div className={style.celula} style={{ background: `${cor}` }}>
        <div className={style.header}>
          {titulo}
          <button onClick={() => removerNota(id)}
            style={{
              background: "none",
              border: "none",
              padding: "0px",
              display: "flex",
              alignItems: "flex-start",
              cursor: "pointer",
            }}
          >
            <CloseOutlined  style={{ fontSize: "0.7rem" }} />
          </button>
        </div>
        <div className={style.body}>{mensagem}</div>
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
