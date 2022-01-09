import { useCallback, useState, useRef, useEffect, FormEventHandler, ReactElement } from "react";
import { Container, Row } from "react-bootstrap";
import emailjs from 'emailjs-com';
import { IoMdClose } from 'react-icons/io';
import Image from "next/image";

import { Email, ThumbsDown, ThumbsUp } from '~/assets';
import styles from "./ContactForm.module.css";
import { useLangContext } from "~/contexts/langContext";
import { IPage } from "~/util/Content";
import React from "react";

const FEEDBACK_OK = (content : IPage) => (
  <Container className={`${styles.fixedContainer} ${styles.feedback}`}>
    <div className={styles.feedback__text}>
      {content.contact.success.map((msg, idx) => <span key={idx}>{msg}</span>)}
    </div>
    <div className={styles.feedback__image}>
      <Image src={ThumbsUp} alt="Sucesso no contato" layout="fill" />
    </div>
  </Container>
);

const FEEDBACK_ERR = (content : IPage) => (
  <Container className={`${styles.fixedContainer} ${styles.feedback}`}>
    <div className={styles.feedback__text}>
      {content.contact.failure.map((msg, idx) => <span key={idx}>{msg}</span>)}
    </div>
    <div className={styles.feedback__image}>
      <Image src={ThumbsDown} alt="Falha no contato" layout="fill" />
    </div>
  </Container>
);

type FormInfo = {
  name: string;
  email: string;
  tel: string;
  message: string;
};

const DEFAULT_FORM : FormInfo = { name: "", email: "", tel: "", message: "" };

export default function ContactForm() {

  const [ formOpen, setFormOpen ] = useState(false);
  const [ formData, setFormData ] = useState<FormInfo>(DEFAULT_FORM);
  const [ formStatus, setFormStatus ] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const { pageContent } = useLangContext();

  const handleOpenForm = useCallback(() => {
    setFormStatus(0);
    setFormOpen(true);
  }, []);
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

      setFormStatus(2);
      // emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      //   .then(function(_){
      //     setFormStatus(1);
      //     setFormData(DEFAULT_FORM);
      //   }, function(_){
      //     setFormStatus(2);
      //   }
      // );
    }, [formData]);

  useEffect(()=>{
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  return (
    !formOpen ? (
      <button className={`${styles.fixedContainer} ${styles.contactButton}`} onClick={handleOpenForm}>
        <Image src={Email} alt="Entre em contato" layout="fill" />
      </button>
    ) : formStatus === 0 ? (
      <Container 
        as="form" 
        id="contactForm" 
        className={`${styles.fixedContainer} ${styles.contactForm}`} 
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <IoMdClose size={20} className={styles.closeButton} onClick={handleCloseForm} />
        <h4 className={styles.contactForm__title}>
          {pageContent['contact']['title']}
        </h4>
        <Row className={styles.contactForm__inputs}>
          <Row className={styles.contactForm__inputs__person}>
            <input 
              className={styles.contactForm__input} 
              placeholder={pageContent['contact']['name']}
              value={formData.name}
              onChange={(event) => { setFormData({...formData, name: event.target.value}) }}
            />
            <input 
              type="tel" 
              className={styles.contactForm__input} 
              placeholder={pageContent['contact']['tel']}
              value={formData.tel}
              onChange={(event) => { setFormData({...formData, tel: event.target.value}) }}
            />
          </Row>
          <input 
            type="email" 
            className={styles.contactForm__input}
            value={formData.email}
            onChange={(event) => { setFormData({...formData, email: event.target.value}) }}
            placeholder="E-mail*" 
            required 
          />
          <textarea 
            form="contactForm"
            className={styles.contactForm__input}
            style={{resize: 'none'}}
            placeholder={`${pageContent['contact']['message']}*`}
            value={formData.message}
            onChange={(event) => { setFormData({...formData, message: event.target.value}) }}
            rows={7}
            required 
          />
        </Row>
        <input className={styles.contactForm__send} type="submit" value={pageContent['contact']['send']} />
      </Container>
    ) : formStatus === 1 ? ( FEEDBACK_OK(pageContent) ) 
      : ( FEEDBACK_ERR(pageContent) )
  );
}
