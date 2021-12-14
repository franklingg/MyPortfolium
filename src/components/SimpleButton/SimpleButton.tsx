import styles from "./SimpleButton.module.css";
import { useLangContext } from "~/contexts/langContext";

export enum ButtonKind {
  FIND_MORE = "findMore",
  BACK_HOME = "backHome"
}

interface SimpleButtonProps {
  kind: ButtonKind,
  href: string,
  color?: string
}

export default function SimpleButton({ kind, href, color='var(--light-blue)' } : SimpleButtonProps) {

  const { pageContent } = useLangContext();

  return (
    <a className={styles.simpleButton} href={href} style={{backgroundColor: color}}>
      {pageContent['simpleButton'][kind]}
    </a>
  );
}
