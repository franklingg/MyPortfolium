import { Container } from "react-bootstrap";

import styles from "./projects.module.css";
import { ProjectSlider } from "~/components";
import { useLangContext } from "~/contexts/langContext";
import { GetStaticProps } from "next";

export default function Projects() {
  const { pageContent } = useLangContext();

  return (
    <Container fluid className={styles.projects}>
      <h1 className={styles.projects__title}>{pageContent.projects.title}</h1>
      <ProjectSlider kind="web" />
      <ProjectSlider kind="mobile" />
      <ProjectSlider kind="miscellaneous" />
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
