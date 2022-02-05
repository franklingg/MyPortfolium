import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { RiDiscordFill } from 'react-icons/ri';
import { FaLinkedin, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';

import { Logo } from '~/assets';
import styles from "./Footer.module.css";

export default function Footer() {

  return (
    <Row as="footer" className={styles.footer}>
      <Col as="span">
        Franklin Regis
      </Col>
      <Col className={styles.footer__social}>
        <Link href="https://github.com/franklingg" passHref prefetch={false}>
          <Col className={styles.footer__social__item} as="a" target="_blank">
            <FaGithubSquare size={20} color="var(--grey)" />
          </Col>
        </Link>
        <Link href="https://www.linkedin.com/in/franklin-regis/" passHref prefetch={false}>
          <Col className={styles.footer__social__item} as="a" target="_blank">
            <FaLinkedin size={20} color="var(--grey)" />
          </Col>
        </Link>
        <Link href="https://www.instagram.com/franklingg1/" passHref prefetch={false}>
          <Col className={styles.footer__social__item} as="a" target="_blank">
            <FaInstagramSquare size={20} color="var(--grey)" />
          </Col>
        </Link>
        <Link href="https://discord.com/users/502633304491819018" passHref prefetch={false}>
          <Col className={styles.footer__social__item} as="a" target="_blank">
            <RiDiscordFill size={20} color="var(--grey)" />
          </Col>
        </Link>
      </Col>
      <Col className={styles.footer__brand}>
        <Image src={Logo} alt="Logo de Franklin Regis" width={25} height={25} />
        <span>2021</span>
      </Col>
    </Row>
  );
}
