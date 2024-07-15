import style from "./Button.module.css";

interface Props {
    label: string;
}

export const ButtonComponent = ({label}: Props) => {
  return (
    <div className={style.button}>
      <button>{label}</button>
    </div>
  );
};
