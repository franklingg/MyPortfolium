import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { useLangContext } from "~/contexts/langContext";

import styles from "./about.module.css";
import { BannerAbout } from "~/assets";
import { GetStaticProps } from "next";

export default function About() {
  const { pageContent } = useLangContext();

  return (
    <Container fluid className={styles.about}>
      <Row className={styles.about__banner}>
        <Col className={styles.about__banner__info}>
          <h1>{pageContent.about.who}</h1>
          <p>
            {pageContent.about.text.map((line, idx) => (
              <span key={idx}>{line}</span>
            ))}
          </p>
        </Col>
        <Col className={styles.about__banner__img}>
          <Image src={BannerAbout} alt="Identidade visual de Franklin Regis" />
        </Col>
      </Row>
      <Row className={styles.about__informations}>
        <h3>{pageContent.about.informationsTitle}</h3>
        <Row className={styles.about__informations__grid}>
          {pageContent.about.informations.map((item, idx) => (
            <div key={idx} className={styles.about__informations__gridItem}>
              <h4>{item.type}</h4>
              <div>
                <span>{item.value}</span>
                <span>{item.content}</span>
              </div>
            </div>
          ))}
        </Row>
      </Row>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const rev_time = process.env.REVALIDATE_TIME
    ? parseInt(process.env.REVALIDATE_TIME)
    : false;
  return {
    props: {},
    revalidate: rev_time,
  };
};
