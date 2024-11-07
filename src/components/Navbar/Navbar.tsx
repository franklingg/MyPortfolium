import Router from "next/router";
import { useCallback, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Select, {
  CSSObjectWithLabel,
  GroupBase,
  StylesConfig,
} from "react-select";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "react-sidebar";

import styles from "./Navbar.module.css";
import { Logo } from "~/assets";
import { useLangContext } from "~/contexts/langContext";
import { ILang } from "~/util/Content";

export default function Navbar() {
  const { currentLang, availableLangs, changeLang, pageContent } =
    useLangContext();
  const [path, setPath] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectStyles] = useState<StylesConfig<ILang, false, GroupBase<ILang>>>(
    {
      control: (provided) =>
        ({
          ...provided,
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
          minWidth: "5rem",
        } as CSSObjectWithLabel),
      indicatorSeparator: () => ({}),
      dropdownIndicator: () => ({
        color: "var(--white)",
        display: "flex",
        alignItems: "center",
      }),
      singleValue: (provided) =>
        ({
          ...provided,
          color: "var(--white)",
          fontWeight: 300,
          letterSpacing: 0.48,
          ":hover": {
            color: "var(--light-blue)",
            letterSpacing: 0.1,
            fontWeight: 700,
          },
        } as CSSObjectWithLabel),
      valueContainer: (provided) =>
        ({
          ...provided,
          paddingRight: 2,
        } as CSSObjectWithLabel),
      option: (provided, state) =>
        ({
          ...provided,
          backgroundColor:
            state.isSelected || state.isFocused
              ? "var(--black)"
              : "var(--lighter-black)",
          borderRadius: 10,
          color: state.isSelected ? "var(--light-blue)" : "var(--white)",
          fontFamily: "Poppins",
          fontWeight: 500,
          fontSize: 14,
        } as CSSObjectWithLabel),
      menu: (provided) =>
        ({
          ...provided,
          margin: 0,
          borderRadius: 10,
          backgroundColor: "var(--lighter-black)",
        } as CSSObjectWithLabel),
      menuList: (provided) =>
        ({
          ...provided,
          padding: 0,
          backgroundColor: "var(--lighter-black)",
          borderRadius: 10,
          boxShadow: "0px 1px 2px rgba(255, 255, 255, 0.25)",
        } as CSSObjectWithLabel),
    }
  );

  const navItems = (
    <>
      <Link href="/home" passHref>
        <Col
          className={`${styles.navbar__item} ${
            path == "/home" || path === "/" ? styles.navbar__item__focused : ""
          }`}
        >
          {pageContent["navbar"]["home"]}
        </Col>
      </Link>
      <Link href="/about" passHref>
        <Col
          className={`${styles.navbar__item} ${
            path == "/about" ? styles.navbar__item__focused : ""
          }`}
        >
          {pageContent["navbar"]["about"]}
        </Col>
      </Link>
      <Link href="/skills" passHref>
        <Col
          className={`${styles.navbar__item} ${
            path == "/skills" ? styles.navbar__item__focused : ""
          }`}
        >
          {pageContent["navbar"]["skills"]}
        </Col>
      </Link>
      <Link href="/projects" passHref>
        <Col
          className={`${styles.navbar__item} ${
            path == "/projects" ? styles.navbar__item__focused : ""
          }`}
        >
          {pageContent["navbar"]["projects"]}
        </Col>
      </Link>
    </>
  );

  const handleOpen = useCallback(() => setSidebarOpen(true), []);
  const handleClose = useCallback(() => setSidebarOpen(false), []);

  useEffect(() => {
    setPath(Router.pathname);
    Router.events.on("routeChangeComplete", (url) => {
      handleClose();
      setPath(url);
    });
  }, [handleClose]);

  return typeof window !== "undefined" && window.innerWidth > 480 ? (
    <Row className={styles.navbar}>
      <Link href="/" passHref>
        <Col className={styles.navbar__logo}>
          <Image src={Logo} alt="Logo de Franklin Regis" />
        </Col>
      </Link>
      {navItems}
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
  ) : (
    <Row className={styles.navbar}>
      <Sidebar
        sidebar={navItems}
        sidebarClassName={styles.navbar__sidebar}
        contentClassName={styles.navbar__sidebar__content}
        overlayClassName={styles.navbar__sidebar__overlay}
        open={sidebarOpen}
        onSetOpen={(state) => {
          setSidebarOpen(state);
        }}
      >
        <button onClick={handleOpen}>
          <GiHamburgerMenu className={styles.navbar__sidebar__contentIcon} />
        </button>
      </Sidebar>
      <Link href="/" passHref className={styles.navbar__logo}>
        <Col>
          <Image src={Logo} alt="Logo de Franklin Regis" />
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
