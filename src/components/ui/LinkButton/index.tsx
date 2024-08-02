import styles from "./LinkButton.module.css";

interface LinkButtonProps {
  url: string;
  label: string;
  name: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ url, label, name }) => {
  return (
    <div className={styles.footer_message}>
      <span>{label}</span>
      <button>
        <a href={url}>{name}</a>
      </button>
    </div>
  );
};

export default LinkButton;
