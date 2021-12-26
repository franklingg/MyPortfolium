import { useCallback, useState, useRef, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

import styles from "./ContactButton.module.css";
import { useLangContext } from "~/contexts/langContext";
import { SimpleButton } from "..";

export default function ContactButton() {

  const [ formOpen, setFormOpen ] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const { pageContent } = useLangContext();

  const handleOpenForm = useCallback(() => { setFormOpen(true) }, []);
  const handleCloseForm = useCallback(() => { setFormOpen(false)}, []);

  const handleClickOutside = useCallback((event: MouseEvent ) => {
    if (!formRef.current?.contains(event.target as HTMLDivElement)) {
      handleCloseForm();
    }
  }, [handleCloseForm]);

  useEffect(()=>{
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    !formOpen ? (
      <button className={`${styles.fixedContainer} ${styles.contactButton}`} onClick={handleOpenForm}>
        {pageContent['contactButton']}
      </button>
    ) : (
      <Container className={`${styles.fixedContainer} ${styles.contactForm}`} ref={formRef}>
        <h4 className={styles.contactForm__title}>
          Vamos conversar sobre o seu projeto?
        </h4>
        <Row className={styles.contactForm__inputs}>
          <input />
        </Row>
        <button className={styles.contactForm__send}> 
          Enviar 
        </button>
      </Container>
    )
  );
}
