import styles from "./SimpleButton.module.css";
import { useLangContext } from "~/contexts/langContext";

export enum ButtonKind {
  FIND_MORE = "findMore"
}

interface SimpleButtonProps {
  kind: ButtonKind
}

export default function SimpleButton({ kind } : SimpleButtonProps) {

  const { pageContent } = useLangContext();

  return (
    <button className={styles.simpleButton}>
      {pageContent['simpleButton'][kind]}
    </button>
  );
}
