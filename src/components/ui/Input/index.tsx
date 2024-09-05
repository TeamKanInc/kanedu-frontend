import { Dispatch, SetStateAction } from "react";
import styles from "./Input.module.css";

interface Props {
  label?: string;
  type?: string;
  slogan?: string;
  setInfo?: Dispatch<SetStateAction<string>>;
  options?: string[];
  setInfoList?: Dispatch<SetStateAction<string[]>>;
}

<<<<<<< HEAD
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
=======
export const InputComponent = ({
  label,
  type,
  options,
  setInfo,
  setInfoList,
}: Props) => {
  return (
    <>
      {"agregar logica de lo que haga cuando recive un array "}
      {setInfoList!.length > 1 ? (
        "siii"
      ) : (
        <div className={styles.Input}>
          <p>{label}</p>
          <input
            type={type}
            onChange={(e) => setInfo!(e.target.value)}
            list={options ? "datalist-options" : undefined}
          />
        </div>
      )}
      {options && (
        <datalist id="datalist-options">
          {options.map((option, index) => (
            <option key={index} value={option} />
          ))}
        </datalist>
      )}
>>>>>>> b4a2b46f33cd78aef0c746f55a39e981acf9f0b7
    </>
  );
};
