import { Container, Row } from "react-bootstrap";

import styles from "./projects.module.css";
import { ProjectSlider } from '~/components';

export default function Projects() {

  return (
    <Container fluid className={styles.projects}>
      <h1 className={styles.projects__title}>
        Meus Projetos
      </h1>
      <ProjectSlider kind="web" />
      <ProjectSlider kind="software" />
    </Container>
  );
}