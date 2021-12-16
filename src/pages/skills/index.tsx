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
    { name: 'Habilidade 1', value: 100 },
    { name: 'Habilidade 2', value: 90 },
    { name: 'Habilidade 3', value: 75 },
    { name: 'Habilidade 4', value: 95 },
    { name: 'Habilidade 5', value: 40 },
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
              <div>
                <span>Habilidade {idx + 1}</span>
                <span>{skill.text}</span>
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