import { useState } from "react";
import Slider, { Settings } from "react-slick";
import { Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

import styles from "./ProjectSlider.module.css";
import { useLangContext } from "~/contexts/langContext";
import SliderArrow from "./SliderArrow";

interface ProjectSliderProps {
  kind: "web" | "software";
}

export default function ProjectSlider({ kind }: ProjectSliderProps) {
  const { pageContent } = useLangContext();

  const [sliderSettings] = useState<Settings>({
    className: styles.projects__carousel,
    infinite: true,
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SliderArrow direction="right" />,
    prevArrow: <SliderArrow direction="left" />,
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
                <Image src={project.image} alt="Logo de Franklin Regis" layout="fill" />
              </div>
              <div className={styles.projects__carousel__info}>
                <span>{project.title}</span>
                <p>{project.description}</p>
                <div className={styles.projects__carousel__labels}>
                  {project.labels.map((label, idx) => (
                    <span 
                      key={idx} 
                      style={{borderColor: label.color, color: label.color}}
                    >
                      {label.name}
                    </span>
                  ))}
                </div>
              </div>
            </a>
        ))}
      </Slider>
    </Row>
  );
}
