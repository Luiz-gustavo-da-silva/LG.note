import React, { useState } from "react";
import { Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import style from "./index.module.css";

const ButtonPlus = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} className={style.buttonPlus}>
        <PlusOutlined />
      </Button>
      <Modal
        title="Add note"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{padding:'1rem'}}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input type="text" placeholder="Título"  className={style.input}/>
          <textarea name="texto" cols="30" rows="10" placeholder="Seu texto :)" className={style.input} style={{resize: 'none'}}></textarea>
        </div>
        
        <div style={{display:'flex', flexDirection:'row', gap:'1rem', alignItems:'center', justifyContent:'center', padding:'1rem'}}>
            <button className={style.buttonCircle} id={style.b1}></button>
            <button className={style.buttonCircle} id={style.b2}></button>
            <button className={style.buttonCircle} id={style.b3}></button>
            <button className={style.buttonCircle} id={style.b4}></button>
            <button className={style.buttonCircle} id={style.b5}></button>
        </div>
      </Modal>
    </>
  );
};

export default ButtonPlus;
