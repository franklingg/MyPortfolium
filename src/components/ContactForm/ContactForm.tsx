import { useCallback, useState, useRef, useEffect, FormEventHandler } from "react";
import { Container, Row } from "react-bootstrap";
import emailjs from 'emailjs-com';

import styles from "./ContactForm.module.css";
import { useLangContext } from "~/contexts/langContext";

type FormInfo = {
  name: string;
  email: string;
  tel: string;
  message: string;
};

const DEFAULT_FORM : FormInfo = {
  name: "No Name",
  email: "",
  tel: "No Telephone",
  message: ""
};

export default function ContactForm() {

  const [ formOpen, setFormOpen ] = useState(false);
  const [ formData, setFormData ] = useState<FormInfo>(DEFAULT_FORM);
  const formRef = useRef<HTMLFormElement>(null);
  const { pageContent } = useLangContext();

  const handleOpenForm = useCallback(() => { setFormOpen(true) }, []);
  const handleCloseForm = useCallback(() => { setFormOpen(false)}, []);

  const handleClickOutside = useCallback((event: MouseEvent ) => {
    if (!formRef.current?.contains(event.target as HTMLDivElement)) {
      handleCloseForm();
    }
  }, [handleCloseForm]);

  const handleSubmit : FormEventHandler<HTMLFormElement> = useCallback( 
    (event) => {
      event.preventDefault();
      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const TEMPLATE_ID : string = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const USER_ID : string = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "";
      emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
        //TODO: Tooltip de sucesso/falha
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function(err) {
          console.log('FAILED...', err);
        });
    }, [formData]);

  useEffect(()=>{
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    !formOpen ? (
      <button className={`${styles.fixedContainer} ${styles.contactButton}`} onClick={handleOpenForm}>
        {pageContent['contact']['button']}
      </button>
    ) : (
      <Container 
        as="form" 
        id="contactForm" 
        className={`${styles.fixedContainer} ${styles.contactForm}`} 
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <h4 className={styles.contactForm__title}>
          {pageContent['contact']['title']}
        </h4>
        <Row className={styles.contactForm__inputs}>
          <Row className={styles.contactForm__inputs__person}>
            <input 
              className={styles.contactForm__input} 
              placeholder={pageContent['contact']['name']}
            />
            <input type="tel" className={styles.contactForm__input} placeholder={pageContent['contact']['tel']} />
          </Row>
          <input type="email" className={styles.contactForm__input} placeholder="E-mail*" required />
          <textarea 
            form="contactForm"
            className={styles.contactForm__input}
            style={{resize: 'none'}}
            placeholder={`${pageContent['contact']['message']}*`}
            rows={7}
            required 
          />
        </Row>
        <input className={styles.contactForm__send} type="submit" value={pageContent['contact']['send']} />
      </Container>
    )
  );
}
