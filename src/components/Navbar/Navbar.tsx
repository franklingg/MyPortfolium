import { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Select from 'react-select';

import styles from "./Navbar.module.css";
import Logo from '~/assets/logo.svg';
import { useLangContext } from "~/contexts/langContext";

export default function Navbar() {

  const { currentLang, availableLangs, changeLang, pageContent } = useLangContext();

  return (
    <Row as="nav" className={styles.navbar}>
      <Link href="/" passHref>
        <Col className={styles.navbar__logo} as="a">
          <Image src={Logo} alt="Logo de Franklin Regis" width={40} height={40} />
        </Col>
      </Link>
      <Link href="/home" passHref>
        <Col className={styles.navbar__item} as="a">
          {pageContent['navbar']['home']}
        </Col>
      </Link>
      <Link href="/about" passHref>
        <Col className={styles.navbar__item} as="a">
          {pageContent['navbar']['about']}
        </Col>
      </Link>
      <Link href="/skills" passHref>
        <Col className={styles.navbar__item} as="a">
          {pageContent['navbar']['skills']}
        </Col>
      </Link>
      <Link href="/projects" passHref>
        <Col className={styles.navbar__item} as="a">
          {pageContent['navbar']['projects']}
        </Col>
      </Link>
      <Col className={`${styles.navbar__item} ${styles.navbar__select}`}>
        <Select options={availableLangs} onChange={(newLang) => changeLang?.(newLang!.value)} />
      </Col>
    </Row>
  );
}
