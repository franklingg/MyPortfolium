import Router from "next/router";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import { SimpleButton, ButtonKind } from "~/components";
import { useLangContext } from "~/contexts/langContext";

import styles from "./home.module.css";
import { BannerHome } from "~/assets";
import { IRecommendation } from "~/util/Content";

export default function Home() {
  const { pageContent } = useLangContext();

  const sliderSettings : Settings = {
    className: styles.home__recommendations__carousel,
    centerMode: true,
    infinite: false,
    centerPadding: "130px",
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: styles.home__recommendations__carousel__dots,
    // eslint-disable-next-line react/display-name
    customPaging: () => <button />,
  };

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
          <SimpleButton kind={ButtonKind.FIND_MORE} href="/about" />
        </Col>
        <Col className={styles.home__banner__image}>
          <Image src={BannerHome} alt="Banner de Franklin Regis" layout="fill" />
        </Col>
      </Row>
      <Row className={styles.home__recommendations}>
        <Row as="h3" className={styles.home__recommendations__title}>
          {pageContent.home.recommendationsTitle}
        </Row>
        <Slider {...sliderSettings}>
          {pageContent.home.recommendations.map((item, idx) => (
            <Row key={idx} className={styles.home__recommendations__carouselBox}>
              <Col className={styles.home__recommendations__carouselImg}>
                <Image 
                  src={item.icon} 
                  alt={`${item.author} recommendation for Franklin Regis`} 
                  layout="fill"
                />
              </Col>
              <Col className={styles.home__recommendations__carouselInfo}>
                <p>{item.text}</p>
                <div className={styles.home__recommendations__carouselInfo__author}>
                  <span>{item.author}</span>
                  <span>{item.occupation}</span>
                </div>
              </Col>
            </Row>
          ))}
        </Slider>
      </Row>
    </Container>
  );
}
