import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import Note from "../Note/index";
import { Empty } from "antd";

function Header() {
  const [lista, setLista] = useState([
    {
      cor: "#dbbdff",
      titulo: "teste 1",
      mensagem: "teste 1",
      id: 0,
    },
    {
      cor: "#dbbdff",
      titulo: "teste 2",
      mensagem: "teste 2",
      id: 1,
    },
    {
      cor: "#dbbdff",
      titulo: "teste 3",
      mensagem: "teste 3",
      id: 2,
    },
    {
      cor: "#dbbdff",
      titulo: "teste 4",
      mensagem: "teste 4",
      id: 3,
    },
  ]);


  const removerNota = id => {
    var novaLista=[];
    novaLista = lista.filter(nota => nota.id !== id);
    console.log(novaLista);
    setLista(novaLista);
  };

  return (
    <div className={style.mainContent}>
      <div className={style.divH1}>
        <h1>Notes</h1>
      </div>
      <div className={style.gridContainer}>
        {lista.length > 0 ? (
          lista.map((nota) => {
            return (
              <Note
                key={nota.id}
                cor={nota.cor}
                titulo={nota.titulo}
                mensagem={nota.mensagem}
                id={nota.id}
                removerNota={removerNota}
              />
            );
          })
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </div>
    </div>
  );
}

export default Header;
