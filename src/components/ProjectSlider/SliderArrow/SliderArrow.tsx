import { CustomArrowProps } from "react-slick";
import styles from "./SliderArrow.module.css";

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface SliderArrowProps extends CustomArrowProps {
  direction: 'left' | 'right',
  slidesShowing?: number
}

export default function SliderArrow( props : SliderArrowProps) {
  const endOfSlider = (props.slideCount || 0) - (props.slidesShowing || 1);
  const isEdge = (props.direction == 'left' && props.currentSlide == 0) || (props.direction == 'right' && props.currentSlide == endOfSlider)

  return (
    <div 
      onClick={props.onClick}
      className={`${styles.arrow} ${props.direction == "left" ? styles.arrow__left : styles.arrow__right} ${isEdge && styles.arrow__disabled}`}>
      {props.direction == "left" ? <BsChevronLeft className={styles.arrow__image} /> : <BsChevronRight className={styles.arrow__image} />}
    </div>
  );
}
