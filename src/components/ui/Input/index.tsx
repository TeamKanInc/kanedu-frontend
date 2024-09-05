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

interface Props {
  label?: string;
  type?: string;
  slogan?: string;
  setInfo?: Dispatch<SetStateAction<string>>;
  options?: string[];
  setInfoList?: Dispatch<SetStateAction<string[]>>;
}

export const InputComponent = ({ label, type, setInfo }: Props) => {
  return (
    <div className={styles.Input}>
      <span>{label}</span>
      <input type={type} onChange={(e) => setInfo!(e.target.value)} />
    </div>
  );
};

/*export const InputComponent = ({
  label,
  slogan,
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
          <p>{slogan}</p>
          <input
            type={type}
            onChange={(e) => setInfo!(e.target.value)}
            //list={options ? "datalist-options" : undefined}
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
    </>
  );
};*/
