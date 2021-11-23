import Router from "next/router";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Banner from "~/assets/banner.svg";

import styles from "./home.module.css";
import { SimpleButton, ButtonKind } from "~/components";

export default function Home() {
  useEffect(() => {
    if (Router.pathname === "/home") {
      Router.push("/");
    }
  }, []);

  return (
    <Container fluid className={styles.home}>
      <Row className={styles.home__banner}>
        <Col className={styles.home__banner__text}>
          <div className={styles.home__banner__text__headings}>
            <h1>Franklin Regis</h1>
            <h4>Front-end developer</h4>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <SimpleButton kind={ButtonKind.FIND_MORE} />
        </Col>
        <Col className={styles.home__banner__image}>
          <Image
            src={Banner}
            alt="Banner de Franklin Regis"
            width={588}
            height={598}
          />
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
}
