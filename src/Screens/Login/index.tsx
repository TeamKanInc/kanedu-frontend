import { useState } from "react";
import { ButtonComponent } from "../../components/ui/Button";
import { GoogleComponent } from "../../components/ui/Google";
import { InputComponent } from "../../components/ui/Input";
import { useLogin } from "../../hooks";
import styles from "./Login.module.css";

const Login = () => {
  const { login } = useLogin();

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
          <InputComponent setInfo={setEmail} label="Correo" type="text" />
          <InputComponent
            setInfo={setPassword}
            label="Contraseña"
            type="password"
          />
          <ButtonComponent onClick={handleLogin} label="Acceder" />
        </div>
        <div className={styles.footer_message}>
          <span>Aun no tienes cuenta</span>
          <button>registrate aqui</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
