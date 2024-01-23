import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import { useLangContext } from "~/contexts/langContext";
import { SkillBar } from "~/components";
import { ISkill } from "~/components/SkillBar/SkillBar";
import { BannerSkills } from "~/assets";
import styles from "./skills.module.css";
import { GetStaticProps } from "next";

export default function Skills() {
  const [allSkills] = useState<ISkill[]>([
    { name: "Javascript/TypeScript", value: 85 },
    { name: "React (Redux/NextJS/React Native)", value: 75 },
    { name: "Angular", value: 70 },
    { name: "Dart (Flutter)", value: 70 },
    { name: "Node (Express/MongoDB)", value: 45 },
    { name: "Python/Java (Flask/SpringBoot)", value: 35 },
  ]);
  const [maxValue] = useState(
    allSkills.reduce((acc, current) =>
      current.value > acc.value ? current : acc
    )
  );
  const { pageContent } = useLangContext();

  return (
    <Container fluid className={styles.skills}>
      <Row className={styles.skills__tops}>
        <Row as="h1" className={styles.skills__topsTitle}>
          {pageContent.skills.tops}
        </Row>
        <Row className={styles.skills__topsList}>
          {pageContent.skills.topsList.map((skill, idx) => (
            <div className={styles.skills__topsList__item} key={idx}>
              <div className={styles.skills__topsList__itemImg}>
                <Image src={skill.icon} alt={skill.text} />
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
            {allSkills.map((skill, idx) => (
              <SkillBar key={idx} skill={skill} maxValue={maxValue.value} />
            ))}
          </Row>
        </Col>
        <Col className={styles.skills__all__banner}>
          <Image src={BannerSkills} alt="Identidade visual de Franklin Regis" />
        </Col>
      </Row>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const rev_time = process.env.REVALIDATE_TIME
    ? parseInt(process.env.REVALIDATE_TIME)
    : false;
  return {
    props: {},
    revalidate: rev_time,
  };
};
