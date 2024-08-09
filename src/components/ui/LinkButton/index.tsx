import React from "react";
import styles from "./LinkButton.module.css";

interface LinkButtonProps {
  url: (Event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  name: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ url, label, name }) => {
  return (
    <div className={styles.footer_message}>
      <span>{label}</span>
      <button onClick={url}>{name}</button>
    </div>
  );
};

export default LinkButton;
