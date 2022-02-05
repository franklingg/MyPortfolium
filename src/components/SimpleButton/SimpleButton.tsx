import styles from "./SimpleButton.module.css";
import { useLangContext } from "~/contexts/langContext";
import Link from 'next/link';

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
    <Link href={href} prefetch={false}>
      <a className={styles.simpleButton} style={{backgroundColor: color}}>
        {pageContent['simpleButton'][kind]}
      </a>
    </Link>
  );
}
