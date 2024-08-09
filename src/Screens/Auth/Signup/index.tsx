import { useState } from "react";
import { ButtonComponent } from "../../../components/ui/Button";
import { InputComponent } from "../../../components/ui/Input";
import { useSingup } from "../../../hooks";
import style from "./Signup.module.css";

const Signup = () => {
  const { isPending, signup } = useSingup();
 

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSingup = () => {
    signup({ name, email, password });
  };

  return (
    <div className={style.container}>
      <div className={style.container_form}>
        <h1>Registrarse</h1>
        <span>Ingresa los detalles para crear tu cuenta</span>
        <div className={style.form}>
          <div className={style.container_input}>
            <InputComponent setInfo={setName} label={"Nombre"} type={"text"} />
            <InputComponent setInfo={setEmail} label={"Email"} type={"email"} />
            <InputComponent setInfo={setPassword} label={"Password"} type={"password"} />
            <ButtonComponent 
            onClick={handleSingup}
            label={"Confirmar"} />
          </div>
          <div className={style.passwordR}>
            <button>¿Has olvidado tu contraseña?</button>
          </div>
          <div className={style.footer_message}>
            <span></span>
            <button>registrate aqui</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
