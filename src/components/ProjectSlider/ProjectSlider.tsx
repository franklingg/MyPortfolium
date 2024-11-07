import { useCallback, useState } from "react";
import Slider, { Settings } from "react-slick";
import { Row } from "react-bootstrap";
import Image from "next/image";

import styles from "./ProjectSlider.module.css";
import { useLangContext } from "~/contexts/langContext";
import SliderArrow from "./SliderArrow";
import { IPage } from "~/util/Content";

type ProjectSliderProps = {
  kind: Exclude<keyof IPage["projects"], "title">;
};

export default function ProjectSlider({ kind }: ProjectSliderProps) {
  const { pageContent } = useLangContext();

  const responsiveAttr = useCallback((attr: string) => {
    if (attr == "slidesToShow") {
      return typeof window !== "undefined" && window.innerWidth <= 480 ? 1 : 2;
    }
  }, []);

  const [sliderSettings] = useState<Settings>({
    className: styles.projects__carousel,
    infinite: false,
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: responsiveAttr("slidesToShow"),
    slidesToScroll: 1,
    nextArrow: (
      <SliderArrow
        direction="right"
        slidesShowing={responsiveAttr("slidesToShow")}
      />
    ),
    prevArrow: (
      <SliderArrow
        direction="left"
        slidesShowing={responsiveAttr("slidesToShow")}
      />
    ),
  });

  return (
    <Row className={styles.projects__slider}>
      <h3>{kind}</h3>
      <Slider {...sliderSettings}>
        {pageContent.projects[kind].map((project, idx) => (
          <a
            href={project.link}
            key={idx}
            target="_blank"
            className={styles.projects__carousel__box}
            rel="noreferrer"
            draggable={false}
          >
            <div className={styles.projects__carousel__image}>
              <Image src={project.image} alt={project.title} />
            </div>
            <div className={styles.projects__carousel__info}>
              <span>{project.title}</span>
              <p>{project.description}</p>
              <div className={styles.projects__carousel__labels}>
                {project.labels.map((label, idx) => {
                  const LabelIcon = label.icon;
                  return (
                    <div
                      key={idx}
                      className={styles.projects__carousel__label}
                      style={{ borderColor: label.color, color: label.color }}
                    >
                      <LabelIcon size="1rem" />
                      <span>{label.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </a>
        ))}
      </Slider>
    </Row>
  );
}
