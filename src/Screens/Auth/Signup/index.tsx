import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "../../../components/ui/Button";
import Header from "../../../components/ui/Header";
import { InputComponent } from "../../../components/ui/Input";
import LinkButton from "../../../components/ui/LinkButton";
import style from "./Signup.module.css";

const Signup = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login")
  }
  return (
    <>  
    <Header/>
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
