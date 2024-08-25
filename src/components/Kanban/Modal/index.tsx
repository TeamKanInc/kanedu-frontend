import style from "./Modal.module.css";

interface Props {
  children?: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
  label: string;
}

const Modal: React.FC<Props> = ({ label, isOpen, closeModal, children }) => {
  const handleModalContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <article
      className={`${style.modal} ${isOpen ? style.is_open : ""}`}
      onClick={closeModal}
    >
      <div
        className={style.modal_container}
        onClick={handleModalContainerClick}
      >
        <div className={style.header_form}>
          <span>{label}</span>
        </div>
        <div className={style.form_task}>
          <div className={style.form}>
            <div className={style.container_input_form}>{children}</div>
        <button className={style.modal_close} onClick={closeModal}>
          cancelar
        </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Modal;
