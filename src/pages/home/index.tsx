import Router from 'next/router';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Navbar } from '~/components';
import styles from './home.module.css';

export default function Home() {
  useEffect(()=>{
    if(Router.pathname === '/home'){
      Router.push('/');
    }
  }, []);

  return (
    <Container fluid className={styles.home}>
    </Container>);
}
