import { useState } from "react";
import styles from "./Login.module.css";
import { useLogin } from "../../../hooks";
import {
  ButtonComponent,
  GoogleComponent,
  InputComponent,
} from "../../../components";
import LinkButton from "../../../components/ui/LinkButton";

const Login = () => {
  const { isLoading, login } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);

  const handleLogin = () => {
    login({ email, password });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.img_logo_container}>
          <img className={styles.img_logo} src="/img/logo.png" alt="logo" />
        </div>
        <div className={styles.header_form}>
          <h2>Bienvenido</h2>
          <span>Encantado de verte nuevamente, ¡inicia sesion!</span>
        </div>
        <GoogleComponent />
        <div className={styles.container_input}>
          <InputComponent setInfo={setEmail} label="Correo" type="email" />
          <InputComponent
            setInfo={setPassword}
            label="Contraseña"
            type="password"
          />
          <ButtonComponent
            onClick={handleLogin}
            label={isLoading ? "Cargando..." : "Acceder"}
          />
        </div>
        <LinkButton
          url={"http://localhost:5173/registrarse"}
          label="¿No tienes una cuenta?"
          name="Registrate aqui"
        />
      </div>
    </div>
  );
};

export default Login;
