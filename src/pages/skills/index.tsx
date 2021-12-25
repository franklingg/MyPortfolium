import { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import { useLangContext } from "~/contexts/langContext";
import { SkillBar } from '~/components';
import { ISkill } from '~/components/SkillBar/SkillBar';
import { BannerSkills } from '~/assets';
import styles from "./skills.module.css";


export default function Skills() {
  const [ allSkills ] = useState<ISkill[]>([
    { name: 'Javascript/TypeScript', value: 80 },
    { name: 'React/Redux/NextJS', value: 75 },
    { name: 'React Native', value: 65 },
    { name: 'Machine Learning - Python (Sklearn, Tensorflow)', value: 40 },
    { name: 'Node/Express/MongoDB', value: 25 },
  ]);
  const { pageContent } = useLangContext();

  return (
    <Container fluid className={styles.skills}>
      <Row className={styles.skills__tops}>
        <Row className={styles.skills__topsTitle}>
          <h1>{pageContent.skills.tops[0]}</h1>
          <h1>{pageContent.skills.tops[1]}</h1>
        </Row>
        <Row className={styles.skills__topsList}>
          { pageContent.skills.topsList.map( (skill, idx) => (
            <div className={styles.skills__topsList__item} key={idx}>
              <div className={styles.skills__topsList__itemImg}>
                <Image src={skill.icon} alt={skill.text} layout="fill" />
              </div>
              <div className={styles.skills__topsList__itemText}>
                <span>{skill.title}</span>
                <p>{skill.text}</p>
              </div>
            </div>
          ))}
        </Row>
      </Row>
      <Row className={styles.skills__all}>
        <Col className={styles.skills__all__left}>
          <h3>Skills</h3>
          <Row className={styles.skills__all__list}>
              {allSkills.map( (skill, idx) => <SkillBar key={idx} skill={skill}  /> )}
          </Row>
        </Col>
        <Col className={styles.skills__all__banner}>
          <Image src={BannerSkills} alt="Identidade visual de Franklin Regis" layout="fill" />
        </Col>
      </Row>
    </Container>
  );
}