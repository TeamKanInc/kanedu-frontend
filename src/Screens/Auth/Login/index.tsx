import { useState } from "react";
import styles from "./Login.module.css";
import { useLogin } from "../../../hooks";
import LinkButton from "../../../components/ui/LinkButton";
import { useLoginGoogle } from "../../../hooks/auth/useLoginGoogle";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { IsLoaderComponent } from "../../../components/ui/IsLoader";
import { useNavigate } from "react-router-dom";
import { ButtonComponent, InputComponent } from "../../../components";

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

  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate("/registrarse");
  };
  return (
    <>
      {isPending ? <IsLoaderComponent /> : null}
      <div className={styles.container}>
        <div className={styles.form_login_google}>
          <div className={styles.form}>
            <div className={styles.img_logo_container}>
              <img className={styles.img_logo} src="/img/logo.png" alt="logo" />
            </div>
            <div className={styles.header_form}>
              <h2>Bienvenido</h2>
              <span>Encantado de verte nuevamente</span>
            </div>

            <div className={styles.container_input}>
              <InputComponent setInfo={setEmail} label="Correo" type="email" />
              <InputComponent
                setInfo={setPassword}
                label="Contraseña"
                type="password"
              />
              <ButtonComponent onClick={handleLogin} label={"Acceder"} />
            </div>
            <div className={styles.O}>
              <span>o</span>
            </div>
          </div>

          <div className={styles.social}>
            <GoogleLogin
              useOneTap
              onError={handleGoogleError}
              onSuccess={handleGoogleSuccess}
            />
          </div>
          <LinkButton
            url={handleSignupClick}
            label="¿No tienes una cuenta?"
            name="Regístrate aquí"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
