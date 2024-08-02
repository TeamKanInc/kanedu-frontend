import { useState } from "react";
import { ButtonComponent } from "../../components/ui/Button";
import { InputComponent } from "../../components/ui/Input";
import { useSingup } from "../../hooks";
import style from "./Signup.module.css";
import LinkButton from "../../components/ui/LinkButton";

const Signup = () => {

  const {signup} = useSingup();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [code_university, setCode_university] = useState("");
  const [phone, setPhone] = useState("");  
  const [password, setPassword] = useState("");

  console.log(email);

  const handleSingup = () => {
    signup({ email, password, name, code_university, phone });
  };
  
  return (
    <div className={style.container}>
      <div className={style.container_form}>
        <h1>Registrarse</h1>
        <span>Ingresa los detalles para crear tu cuenta</span>
      <div className={style.form}>
        <div className={style.container_input}>
          <InputComponent setInfo={setName} label={"Nombre"} type={"text"}/>
          <InputComponent setInfo={setEmail} label={"Email"} type={"text"} />
          <InputComponent setInfo={setPassword} label={"Password"} type={"password"} />
          <InputComponent setInfo={setPhone} label={"Telefono"} type={"number"} />
          <InputComponent setInfo={setCode_university} label={"Code University"} type={"number"} />
         <ButtonComponent onClick={handleSingup} label="Confirmar"/>
        </div>
        <div className={style.passwordR}>
        <button>¿Has olvidado tu contraseña?</button>
        </div>

        <LinkButton url={'http://localhost:5173'} label="¿Ya tienes cuenta?" name="Inicia sesion aqui"/>
     
        </div>
      </div>
      </div>
  );
};

export default Signup;