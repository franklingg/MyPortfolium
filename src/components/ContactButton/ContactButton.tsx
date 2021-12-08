import { Row } from "react-bootstrap";
import Image from "next/image";

import styles from "./ContactButton.module.css";
import { useLangContext } from "~/contexts/langContext";

export default function ContactButton() {

  const { pageContent } = useLangContext();

  return (
    <button className={styles.contactButton}>
      {pageContent['contactButton']}
    </button>
  );
}
