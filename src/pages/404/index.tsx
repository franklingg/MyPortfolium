import { Container, Row } from "react-bootstrap";
import Image from "next/image";

import styles from './404.module.css';
import { Banner404 } from '~/assets';

export default function Error404() {

  return (
    <Container fluid className={styles.error}>
      <Row className={styles.error__text}>
        <h2>Por aqui não!</h2>
        <p>Esta página ainda não existe, tente por outro caminho</p>
      </Row>
      <Image src={Banner404} alt="Imagem de erro retirada de https://storyset.com" width={450} height={450} />
    </Container>
  );
}
