import style from "./Modal.module.css";

interface Props {
  children?: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ isOpen, closeModal, children }) => {
  const handleModalContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <article className={`${style.modal} ${isOpen ? style.is_open : ""}`} onClick={closeModal}>
      <div className={style.modal_container} onClick={handleModalContainerClick}>
        <button className={style.modal_close} onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;