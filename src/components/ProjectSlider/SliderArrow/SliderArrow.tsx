import { CustomArrowProps } from "react-slick";
import styles from "./SliderArrow.module.css";

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface SliderArrowProps extends CustomArrowProps {
  direction: 'left' | 'right'
}

export default function SliderArrow( props : SliderArrowProps) {

  return (
    <div 
      onClick={props.onClick}
      className={`${styles.arrow} ${props.direction == "left" ? styles.arrow__left : styles.arrow__right}`}>
      {props.direction == "left" ? <BsChevronLeft className={styles.arrow__image} /> : <BsChevronRight className={styles.arrow__image} />}
    </div>
  );
}
