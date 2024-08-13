import styles from "./IsLoader.module.css";

export const IsLoaderComponent = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.lds_ellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      </div>
    </>
  );
};