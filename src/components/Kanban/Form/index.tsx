import { Dispatch, SetStateAction } from "react";
import style from "./Form.module.css";

interface Props {
  setInfo: Dispatch<SetStateAction<string>>;
};


const FormComponent = ({ setInfo }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInfo!(e.target.value);
      };
  return (
    <div className={style.containerForm_input}>
      <div className={style.Input}>
        <p>titulo</p>
        <input type="text" onChange={handleChange} />

        <p>descripcion</p>
        <input type="text" onChange={handleChange} />

        <p>urgencia</p>
        <input type="text" onChange={handleChange} />

        <p>asignado a:</p>
        <input type="text" onChange={handleChange} />
      </div>
    </div>
  );
};

export default FormComponent;
