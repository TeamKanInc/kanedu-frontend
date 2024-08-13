import { Dispatch, SetStateAction } from "react";
import styles from "./Input.module.css";

interface Props {
  label?: string;
  type?: string;
  setInfo?: Dispatch<SetStateAction<string>>;
}

export const InputComponent = ({ label, type, setInfo }: Props) => {
  return (
    <div className={styles.Input}>
      <p>{label}</p>
      <input type={type} onChange={(e) => setInfo!(e.target.value)} />
    </div>
  );
};
