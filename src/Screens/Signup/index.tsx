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
        
          <div className={style.select}>
            <p>Rol</p>
            <label htmlFor="Rol-select">Elige una opcion</label>
            <select name="Rol-select" id="Rol-select">
            <option value="">Selecciona un...</option>
                <option value="administrador">Administrador</option>
                <option value="invitado">Invitado</option>
            </select>
          </div>
         <ButtonComponent label="Confirmar"/>
        </div>
      </div>
    </div>
  );
};

export default Signup;
