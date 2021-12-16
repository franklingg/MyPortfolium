import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { useLangContext } from "~/contexts/langContext";

import styles from "./about.module.css";
import { BannerAbout } from '~/assets';
import { IInformation } from "~/util/Content";

export default function About() {
  const { pageContent } = useLangContext();

  return (
    <Container fluid className={styles.about}>
      <Row className={styles.about__banner}>
        <Col className={styles.about__banner__info}>
          <h1>{pageContent.about.who}</h1>
          <p>{pageContent.about.text}</p>
        </Col>
        <Col className={styles.about__banner__img}>
          <Image src={BannerAbout} alt="Identidade visual de Franklin Regis" layout="fill" />
        </Col>
      </Row>
      <Row className={styles.about__informations}>
        <h3>{pageContent.about.informationsTitle}</h3>
        <Row className={styles.about__informations__grid}>
          {pageContent.about.informations.map((item, idx) => (
            <div key={idx} className={styles.about__informations__gridItem}>
              <span>{item.value}</span>
              <span>{item.content}</span>
            </div>
          ))}
        </Row>
      </Row>
    </Container>
  );
}
