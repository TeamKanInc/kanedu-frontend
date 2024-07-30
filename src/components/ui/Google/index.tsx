import styles from "./Google.module.css";

export const GoogleComponent = () => {
  const url = "https://accounts.google.com";
  return (
    <div className={styles.container_input_social}>
      <button
        className={styles.btn_google}
        onClick={() => window.open(url, "_blank")}
      >
        <img
          src="/img/google.svg"
          alt="Google logo"
          height={14}
          className={styles.button_logo}
        />

        <b>Continua con Google</b>
      </button>
    </div>
  );
};
