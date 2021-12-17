import Slider, { Settings } from "react-slick";
import { Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

import styles from "./ProjectSlider.module.css";
import { useLangContext } from "~/contexts/langContext";

interface ProjectSliderProps {
  kind: "web" | "software";
}

export default function ProjectSlider({ kind }: ProjectSliderProps) {
  const { pageContent } = useLangContext();

  const sliderSettings: Settings = {
    className: styles.projects__carousel,
    infinite: true,
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <Row className={styles.projects__slider}>
      <h3>{kind}</h3>
      <Slider {...sliderSettings}>
        {pageContent.projects[kind].map((project, idx) => (
          <Link href={project.link} key={idx}>
            <a key={idx} target="_blank" className={styles.projects__carousel__box}>
              <Image src={project.image} alt="Logo de Franklin Regis" layout="fill" />
              <div className={styles.projects__carousel__info}>
                <p className={styles.projects__carousel__description}>{project.description}</p>
              </div>
            </a>
          </Link>
        ))}
      </Slider>
    </Row>
  );
}
