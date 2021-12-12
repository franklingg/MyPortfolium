import { Container, Col } from "react-bootstrap";
import Image from "next/image";
import { useLangContext } from "~/contexts/langContext";

import styles from './404.module.css';
import { Banner404 } from '~/assets';
import { ButtonKind, SimpleButton } from "~/components";

export default function Error404() {
  const { pageContent } = useLangContext();

  return (
    <Container fluid className={styles.error}>
      <Col className={styles.error__text}>
        <h1>Opsss!</h1>
        <h3>Error 404</h3>
        <p>
          {pageContent['404'][0]} <br />
          {pageContent['404'][1]}
        </p>
        <SimpleButton href="/home" kind={ButtonKind.BACK_HOME} />
      </Col>
      <Col className={styles.error__banner}>
        <Image src={Banner404} alt="Imagem de erro retirada de https://storyset.com" layout="fill" />
      </Col>
    </Container>
  );
}
