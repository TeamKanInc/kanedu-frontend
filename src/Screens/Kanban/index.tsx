import { useState } from "react";
import { InputComponent } from "../../components";
import Modal from "../../components/Kanban/Modal";
import { useModal } from "../../hooks";
import style from "./Kanban.module.css";

const Kanban = () => {
  const {isOpen, openModal, closeModal} = useModal(false);
  const [email, setEmail] = useState ("");
  return (
    <div className={style.container}>
      <h2>Brutooo</h2>
      <div className={style.button}>
        <button onClick={openModal}>add</button>
        <Modal isOpen={isOpen} closeModal={closeModal} >
        <InputComponent setInfo={setEmail} label="Correo" type="email" />
             
        </Modal>
      </div>
      <div className={style.column}></div>
    </div>
  );
};

export default Kanban;
