import { useState } from "react";
import styles from "./Login.module.css";
import { useLogin } from "../../../hooks";
import { ButtonComponent, InputComponent } from "../../../components";
import LinkButton from "../../../components/ui/LinkButton";
import { useLoginGoogle } from "../../../hooks/auth/useLoginGoogle";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const { isPending, login } = useLogin();
  const { loginGoogle } = useLoginGoogle();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login({ email, password });
  };

  const handleGoogleSuccess = async (
    credentialsResponse: CredentialResponse
  ) => {
    if (credentialsResponse.credential) {
      const token_id = credentialsResponse.credential;
      loginGoogle(token_id);
    }
  };

  const handleGoogleError = () => {};

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
        <div className={styles.social}>
          <GoogleLogin
            useOneTap
            onError={handleGoogleError}
            onSuccess={handleGoogleSuccess}
          />
        </div>
        <div className={styles.container_input}>
          <InputComponent setInfo={setEmail} label="Correo" type="email" />
          <InputComponent
            setInfo={setPassword}
            label="Contraseña"
            type="password"
          />
          <ButtonComponent
            onClick={handleLogin}
            label={isPending ? "Cargando..." : "Acceder"}
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
