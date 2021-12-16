import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import { useLangContext } from "~/contexts/langContext";
import styles from "./projects.module.css";
import Slider, { Settings } from "react-slick";


export default function Projects() {
  const { pageContent } = useLangContext();

  const sliderSettings : Settings = {
    className: styles.projects__carousel,
    infinite: true,
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <Container fluid className={styles.projects}>
      <h1 className={styles.projects__title}>
        Meus Projetos
      </h1>
      <Row className={styles.projects__row}>
        <h3>Web</h3>
        <Slider {...sliderSettings}>
          <div>
            PROJETO 1
          </div>
          <div>
            PROJETO 2
          </div>
          <div>
            PROJETO 3
          </div>
        </Slider>
      </Row>
      <Row className={styles.projects__row}>
        <h3>Software</h3>
      </Row>
    </Container>
  );
}