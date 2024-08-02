import { ButtonComponent } from "../../components/ui/Button";
import { InputComponent } from "../../components/ui/Input";
import style from "./Signup.module.css";

const Signup = () => {
  return (
    <div className={style.container}>
      <div className={style.container_form}>
        <h1>Registrarse</h1>
        <span>Ingresa los detalles para crear tu cuenta</span>
        <div className={style.form}>
          <div className={style.container_input}>
            <InputComponent label={"Nombre"} type={"text"} />
            <InputComponent label={"Email"} type={"text"} />
            <InputComponent label={"Password"} type={"text"} />
            <ButtonComponent label="Confirmar" />
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
