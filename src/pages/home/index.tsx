import Router from "next/router";
import { useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import { SimpleButton, ButtonKind } from "~/components";
import { useLangContext } from "~/contexts/langContext";

import styles from "./home.module.css";
import { BannerHome } from "~/assets";
import { GetStaticProps } from "next";

export default function Home() {
  const { pageContent } = useLangContext();

  const responsiveAttr = useCallback((attr : string) => {
    if(attr == 'centerPadding'){
      if(typeof window !== 'undefined' && window.innerWidth <= 768){
        return  window.innerWidth <= 414 
              ? (window.innerWidth <= 360 ? "8px" : "0px") : "70px";
      }
      return "130px";
    }
  }, []);

  const [sliderSettings] = useState<Settings>({
    className: styles.home__recommendations__carousel,
    centerMode: true,
    infinite: false,
    centerPadding: responsiveAttr('centerPadding'),
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: styles.home__recommendations__carousel__dots,
    // eslint-disable-next-line react/display-name
    customPaging: () => <button />,
  });

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
            <h4>{pageContent.home.occupation}</h4>
          </div>
          <p>{pageContent.home.description}</p>
          <SimpleButton kind={ButtonKind.FIND_MORE} href="/about" />
        </Col>
        <Col className={styles.home__banner__image}>
          <Image src={BannerHome} alt="Banner de Franklin Regis" layout="fill" priority />
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

export const getStaticProps : GetStaticProps = async () => {
  const rev_time = process.env.REVALIDATE_TIME ? parseInt(process.env.REVALIDATE_TIME) : false;
  return {
    props: {},
    revalidate: rev_time
   }
}