import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "../../../components/ui/Button";
import Header from "../../../components/ui/Header";
import { InputComponent } from "../../../components/ui/Input";
import { useSingup } from "../../../hooks";
import style from "./Signup.module.css";
import LinkButton from "../../../components/ui/LinkButton";
import { IsLoaderComponent } from "../../../components/ui/IsLoader";

const Signup = () => {
  const { isPending, signup } = useSingup();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSingup = () => {
    signup({ name, email, password });
  };

  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <>
      <Header />
      {isPending ? <IsLoaderComponent /> : null}
      <div className={style.container}>
        <div className={style.container_form}>
          <div className={style.img_logo_container}>
            <img className={style.img_logo} src="/img/logo.png" alt="logo" />
          </div>
          <h1>Registrarse</h1>
          <span>Ingresa los detalles para crear tu cuenta</span>
          <div className={style.form}>
            <div className={style.container_input}>
              <InputComponent
                setInfo={setName}
                label={"Nombre"}
                type={"text"}
              />
              <InputComponent
                setInfo={setEmail}
                label={"Email"}
                type={"email"}
              />
              <InputComponent
                setInfo={setPassword}
                label={"Password"}
                type={"password"}
              />
              <ButtonComponent onClick={handleSingup} label={"Confirmar"} />
            </div>
            <div className={style.passwordR}>
              <button>¿Has olvidado tu contraseña?</button>
            </div>
            <LinkButton
              url={handleLoginClick}
              label="¿Ya tienes una cuenta?"
              name="Inicia sesión aqui"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
