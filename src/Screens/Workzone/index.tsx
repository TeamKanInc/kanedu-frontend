import { ButtonComponent, InputComponent } from "../../components";
import Modal from "../../components/Kanban/Modal";
import Header from "../../components/ui/Header";
import { useModal } from "../../hooks";
import styles from "./Workzone.module.css";
import add from "/public/img/add.svg";

const Workzone = () => {
  const { isOpen, openModal, closeModal } = useModal(false);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.form}>
          <button onClick={openModal}>
            <img src={add} alt="" />
            <div className={styles.button_open}>Nuevo Lugar</div>
          </button>
        </div>
        <div>
          <Modal
            label="Agrega Una Nueva Zona De Trabajo"
            isOpen={isOpen}
            closeModal={closeModal}
          >
            <div className={styles.formulary}>
              <InputComponent label="Administrador" />
              <InputComponent label="Nombre" />
              <InputComponent label="Codigo unico o Contraseña" type="number" />
              <div>
                <InputComponent
                  label="Miembros"
                  slogan="(Cargue un archivo .xlsx) con todos los correos"
                  type="file"
                />
              </div>
            </div>
            <div
              className={styles.button}
              style={{ marginLeft: "15.5rem", width: "0.8rem" }}
            >
              <ButtonComponent label={"confirmar"} />
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Workzone;
