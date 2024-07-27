import style from "./Button.module.css";

interface Props {
  label: string;
  onClick?: () => void;
}

export const ButtonComponent = ({ label, onClick }: Props) => {
  return (
    <div className={style.button}>
      <button onClick={onClick}>{label}</button>
    </div>
  );
};
