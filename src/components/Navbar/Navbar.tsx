import { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Select, { GroupBase, StylesConfig } from 'react-select';

import styles from "./Navbar.module.css";
import Logo from '~/assets/logo.svg';
import { useLangContext } from "~/contexts/langContext";
import { ILang } from "~/util/Content";

export default function Navbar() {

  const { currentLang, availableLangs, changeLang, pageContent } = useLangContext();

  const selectStyles : StylesConfig<ILang, false, GroupBase<ILang>> = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
      minWidth: '5rem',
    }),
    indicatorSeparator: () => ({}),
    dropdownIndicator: () => ({
      color: 'var(--white)',
      display: 'flex',
      alignItems: 'center'
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'var(--white)',
      fontWeight: 300,
      letterSpacing: 0.48,
      ':hover': {
        color: 'var(--light-blue)',
        letterSpacing: 0.1,
        fontWeight: 700
      }
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingRight: 2
    }),
    option: (provided) => ({
      ...provided,
      color: 'black',
      fontFamily: 'Poppins',
      fontWeight: 300,
      fontSize: 14
    })
  };

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
        <Select
          styles={selectStyles}
          options={availableLangs}
          value={currentLang}
          isSearchable={false}
          onChange={(newLang) => changeLang?.(newLang!.value)}
        /> 
      </Col>
    </Row>
  );
}
