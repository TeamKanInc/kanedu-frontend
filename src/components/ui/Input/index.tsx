import { Dispatch, SetStateAction } from "react";
import styles from "./Input.module.css";

interface Props {
  label?: string;
  type?: string;
  slogan?: string;
  setInfo?: Dispatch<SetStateAction<string>>;
}

export const InputComponent = ({ label, type, slogan, setInfo }: Props) => {
  return (
    <>
      <div className={styles.Input}>
        <div className={styles.name}>
          <p>{label}</p>
          <p>{slogan}</p>
        </div>
        <input type={type} onChange={(e) => setInfo!(e.target.value)} />
      </div>
    </>
  );
};
