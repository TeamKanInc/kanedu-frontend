import { GoogleComponent } from "../../components/ui/Google";
import { InputComponent } from "../../components/ui/Input";
import styles from "./Login.module.css";

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
       <GoogleComponent/>
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
