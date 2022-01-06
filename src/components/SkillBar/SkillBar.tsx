import { useState } from 'react';
import { Row } from 'react-bootstrap';
import styles from "./SkillBar.module.css";

export interface ISkill {
  name: string,
  value: number
}

interface SkillBarProps {
  skill: ISkill,
  maxValue: number
}

export default function SkillBar( { skill, maxValue } : SkillBarProps ) {

  const [ relativeToMax ] = useState(skill.value / maxValue * 100);

  return (
    <Row className={styles.skillbar}>
      <span className={styles.skillbar__title}>{skill.name}</span>
      <div className={styles.skillbar__box}>
        <div className={styles.skillbar__box__line} style={{width: `calc(${relativeToMax}% - 20px - 2rem)`}}></div>
        <span>{`${skill.value}%`}</span>
      </div>
    </Row>
  );
}