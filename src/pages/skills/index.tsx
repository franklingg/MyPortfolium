import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { useLangContext } from "~/contexts/langContext";

import styles from "./skills.module.css";
export default function Skills() {
  const { pageContent } = useLangContext();

  return (
    <Container fluid className={styles.skills}>
      <Row className={styles.skills__tops}>
        <Row className={styles.skills__topsTitle}>
          <h1>{pageContent['skills']['tops'][0]}</h1>
          <h1>{pageContent['skills']['tops'][1]}</h1>
        </Row>
        <Row className={styles.skills__topsList}>
          { pageContent['skills']['topsList'].map( (skill, idx:number) => (
            <div className={styles.skills__topsList__item} key={idx}>
              <div className={styles.skills__topsList__itemImg}>
                <Image src={skill.icon} alt="" layout="fill" />
              </div>
              <div>
                <span>Habilidade {idx + 1}</span>
                <span>{skill.text}</span>
              </div>
            </div>
          ))}
        </Row>
      </Row>
    </Container>
  );
}