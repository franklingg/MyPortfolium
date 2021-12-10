import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import { useLangContext } from "~/contexts/langContext";
import styles from "./projects.module.css";


export default function Projects() {
  const { pageContent } = useLangContext();

  return (
    <Container fluid className={styles.projects}>
    </Container>
  );
}