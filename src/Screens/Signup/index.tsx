import { ButtonComponent } from "../../components/ui/Button";
import { InputComponent } from "../../components/ui/Input";
import style from "./Signup.module.css";

const Signup = () => {
  return (
    <div className={style.container}>
      <div className={style.form}>
        <h1>Registrarse</h1>
        <span>Ingresa los detalles para crear tu cuenta</span>
        <div className={style.container_input}>
          <InputComponent label={"Nombre"} type={"text"} />
          <InputComponent label={"Email"} type={"text"} />
          <InputComponent label={"Password"} type={"text"} />
    
         <ButtonComponent label="Confirmar"/>
        </div>
        <div className={style.restore_password}>
          <button>Has olvidado tu contraseña</button>
        </div>
        
        <div  className= {style.footer_message}>
          <span>¿Ya tienes una cuenta?</span>
          <button>Inicia sesiòn aquì</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
