import styles from "./Input.module.css";

interface Props {
  label: string;
  type: string;
}

export const InputComponent = ({ label, type }: Props) => {
  return (
    <div className={styles.Input}>
      <span>{label}</span>
      <input type={type} />
    </div>
  );
};
