import styles from "./SimpleButton.module.css";
import { useLangContext } from "~/contexts/langContext";

export enum ButtonKind {
  FIND_MORE = "findMore"
}

interface SimpleButtonProps {
  kind: ButtonKind,
  href: string
}

export default function SimpleButton({ kind, href } : SimpleButtonProps) {

  const { pageContent } = useLangContext();

  return (
    <a className={styles.simpleButton} href={href}>
      {pageContent['simpleButton'][kind]}
    </a>
  );
}
