import Router from 'next/router';
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Select, { GroupBase, StylesConfig } from 'react-select';

import styles from "./Navbar.module.css";
import { Logo } from '~/assets';
import { useLangContext } from "~/contexts/langContext";
import { ILang } from "~/util/Content";

export default function Navbar() {

  const { currentLang, availableLangs, changeLang, pageContent } = useLangContext();
  const [ path, setPath ] = useState("");

  useEffect(() => {
    setPath(Router.pathname);
    Router.events.on('routeChangeComplete', url => {
      setPath(url);
    });
  }, []);

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
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected || state.isFocused ? 'var(--black)' : 'var(--lighter-black)',
      borderRadius: 10,
      color: state.isSelected ? 'var(--light-blue)' : 'var(--white)',
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: 14,
    }),
    menu: (provided) => ({
      ...provided,
      margin: 0,
      borderRadius: 10,
      backgroundColor: 'var(--lighter-black)'
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0,
      backgroundColor: 'var(--lighter-black)',
      borderRadius: 10,
      boxShadow: '0px 1px 2px rgba(255, 255, 255, 0.25)'
    })
  };

  return (
    <Row as="nav" className={styles.navbar}>
      <Link href="/" passHref>
        <Col className={styles.navbar__logo} as="a">
          <Image src={Logo} alt="Logo de Franklin Regis" width={25} height={25} />
        </Col>
      </Link>
      <Link href="/home" passHref>
        <Col className={`${styles.navbar__item} ${path == "/home" || path === "/" ? styles.navbar__item__focused : ""}`} as="a">
          {pageContent['navbar']['home']}
        </Col>
      </Link>
      <Link href="/about" passHref>
        <Col className={`${styles.navbar__item} ${path == "/about" ? styles.navbar__item__focused : ""}`} as="a">
          {pageContent['navbar']['about']}
        </Col>
      </Link>
      <Link href="/skills" passHref>
        <Col className={`${styles.navbar__item} ${path == "/skills" ? styles.navbar__item__focused : ""}`} as="a">
          {pageContent['navbar']['skills']}
        </Col>
      </Link>
      <Link href="/projects" passHref>
        <Col className={`${styles.navbar__item} ${path == "/projects" ? styles.navbar__item__focused : ""}`} as="a">
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
