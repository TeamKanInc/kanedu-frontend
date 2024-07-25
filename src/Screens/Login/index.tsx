import { InputComponent } from "../../components/ui/Input";
import styles from "./Login.module.css";

const url = "https://accounts.google.com";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>

        <div className={styles.img_logo_container}>
          <img 
          
          className={styles.img_logo}
          src="/img/logo.png" alt="logo"
          
          />
        </div>



        <div className={styles.header_form}>
          <h2>Bienvenido</h2>
          <span>
            Encantado de verte nuevamente, ¡inicia sesion!
          </span>
        </div>
        <div className={styles.container_input_social}>
          <button onClick={() => window.open(url, "_blank")}>
            <img
              src="/img/google.svg"
              alt="Google logo"
              className={styles.button_logo}
            />

            <b>Continua con Google</b>
          </button>
        </div>
        <div className={styles.container_input}>
          <InputComponent label="Correo" type="text" />
          <InputComponent label="Contraseña" type="password" />
          <button>Acceder</button>
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
