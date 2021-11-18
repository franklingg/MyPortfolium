import { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

import styles from "./Navbar.module.css";
import Logo from '~/assets/logo.svg';
import { useLangContext } from "~/contexts/langContext";

export default function Navbar() {

  const { lang, availableLangs, changeLang } = useLangContext();

  return (
    <Row as="nav" className={styles.navbar}>
      <Link href="/" passHref>
        <Col className={styles.navbar__logo} as="a">
          <Image src={Logo} alt="Logo de Franklin Regis" width={40} height={40} />
        </Col>
      </Link>
      <Link href="/home" passHref>
        <Col className={styles.navbar__item} as="a">
          Home
        </Col>
      </Link>
      <Link href="/sobre" passHref>
        <Col className={styles.navbar__item} as="a">
          Sobre mim
        </Col>
      </Link>
      <Link href="/habilidades" passHref>
        <Col className={styles.navbar__item} as="a">
          Habilidades
        </Col>
      </Link>
      <Link href="/projetos" passHref>
        <Col className={styles.navbar__item} as="a">
          Projetos
        </Col>
      </Link>
      <Col className={`${styles.navbar__item} ${styles.navbar__select}`}>
        <select>
          <option>{lang}</option>
          <option>EN</option>
        </select>
      </Col>
    </Row>
  );
}
