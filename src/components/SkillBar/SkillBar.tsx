import { Row } from 'react-bootstrap';
import styles from "./SkillBar.module.css";

export interface ISkill {
  name: string,
  value: number
}

interface SkillBarProps {
  skill: ISkill
}

export default function SkillBar( { skill } : SkillBarProps ) {

  return (
    <Row className={styles.skillbar}>
      <span className={styles.skillbar__title}>{skill.name}</span>
      <div className={styles.skillbar__box}>
        <div className={styles.skillbar__box__line} style={{width: `calc(${skill.value}% - 20px - 2rem)`}}></div>
        <span>{`${skill.value}%`}</span>
      </div>
    </Row>
  );
}