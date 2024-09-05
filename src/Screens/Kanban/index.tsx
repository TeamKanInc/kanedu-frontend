import { useState } from "react";
import {
  ButtonComponent,
  InputComponent,
  IsLoaderComponent,
} from "../../components";
import Modal from "../../components/Kanban/Modal";
import { useModal, useTask } from "../../hooks";
import style from "./Kanban.module.css";

const Kanban = () => {
  const { isOpen, openModal, closeModal } = useModal(false);
  const { isPending, task } = useTask();
  const [title, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [reporter, setReporter] = useState("");
  const [urgency, setUrgency] = useState("");
  const [statusTask, setStatusTask] = useState("");

  const handleForm = () => {
    task({ title, description, assignedTo, reporter, urgency, statusTask });
  };
  return (
    <>
      {isPending ? <IsLoaderComponent /> : null}
      <div className={style.container}>
        <h2>Kanban</h2>
        <div>
          <div className={style.button_task}>
            <button onClick={openModal}>add task</button>
          </div>
          <Modal
            label="Agregar nueva tarea en: name project"
            isOpen={isOpen}
            closeModal={closeModal}
          >
            <div className={style.formulary}>
              <InputComponent setInfo={setTittle} label="titulo" />
              <InputComponent setInfo={setDescription} label="Descripcion" />
              <InputComponent setInfo={setAssignedTo} label="Asignado a" />
              <InputComponent setInfo={setReporter} label="asignado por" />
              <InputComponent setInfo={setUrgency} label="urgencia" />
              <InputComponent setInfo={setStatusTask} label="esatado inicial" />
            </div>

            <div
              style={{ marginLeft: "15.5rem", width: "0.8rem" }}
              className={style.button}
            >
              <ButtonComponent onClick={handleForm} label={"confirmar"} />
            </div>
          </Modal>
        </div>
        <div className={style.column}></div>
      </div>
    </>
  );
};

export default Kanban;
