import { useCallback, useState, useRef, useEffect, FormEventHandler } from "react";
import { Container, Row } from "react-bootstrap";
import emailjs from 'emailjs-com';
import { IoMdClose } from 'react-icons/io';
import Image from "next/image";

import { Email, ThumbsDown, ThumbsUp } from '~/assets';
import styles from "./ContactForm.module.css";
import { useLangContext } from "~/contexts/langContext";
import { PacmanLoader } from "react-spinners";

type FormInfo = {
  name: string;
  email: string;
  tel: string;
  message: string;
};

enum FormStatus {
  READY,
  SENDING,
  SENT,
  ERROR
};

const DEFAULT_FORM : FormInfo = { name: "", email: "", tel: "", message: "" };

export default function ContactForm() {

  const [ formOpen, setFormOpen ] = useState(false);
  const [ formData, setFormData ] = useState<FormInfo>(DEFAULT_FORM);
  const [ formStatus, setFormStatus ] = useState(FormStatus.READY);
  const formRef = useRef<HTMLFormElement>(null);
  const { pageContent } = useLangContext();

  const handleOpenForm = useCallback(() => {
    setFormStatus(FormStatus.READY);
    setFormOpen(true);
  }, []);
  const handleCloseForm = useCallback(() => { setFormOpen(false)}, []);

  const handleClickOutside = useCallback((event: MouseEvent ) => {
    if (!formRef.current?.contains(event.target as HTMLDivElement)) {
      handleCloseForm();
    }
  }, [handleCloseForm]);

  const handlePress = useCallback((event: KeyboardEvent ) => {
    if (event.key === 'Escape') handleCloseForm();
  }, [handleCloseForm]);

  const getFeedback = useCallback( (status: FormStatus) => {
    return (
      <Container className={`${styles.fixedContainer} ${styles.feedback}`}>
        {status === FormStatus.SENT ? (
          <>
            <IoMdClose size={20} className={styles.closeButton} onClick={handleCloseForm} />
            <div className={styles.feedback__text}>
              {pageContent.contact.success.map((msg, idx) => <span key={idx}>{msg}</span>)}
            </div>
            <div className={styles.feedback__image}>
              <Image src={ThumbsUp} alt="Sucesso no contato" layout="fill" />
            </div>
          </>
        ) : (
          <>
            <IoMdClose size={20} className={styles.closeButton} onClick={handleCloseForm} />
            <div className={styles.feedback__text}>
              {pageContent.contact.failure.map((msg, idx) => <span key={idx}>{msg}</span>)}
            </div>
            <div className={styles.feedback__image}>
              <Image src={ThumbsDown} alt="Falha no contato" layout="fill" />
            </div>
          </>
        )}
      </Container>
    );
  }, [handleCloseForm, pageContent.contact.failure, pageContent.contact.success]);

  const handleSubmit : FormEventHandler<HTMLFormElement> = useCallback( 
    (event) => {
      setFormStatus(FormStatus.SENDING);
      event.preventDefault();
      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const TEMPLATE_ID : string = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const USER_ID : string = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "";

      emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
        .then(function(_){
          setTimeout(() => {
            setFormStatus(FormStatus.SENT);
            setFormData(DEFAULT_FORM);
          }, 2000);
        }, function(_){
          setFormStatus(FormStatus.ERROR);
        }
      );
    }, [formData]);

  useEffect(()=>{
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handlePress);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handlePress);
    }
  }, [handleClickOutside, handlePress]);

  return (
    !formOpen ? (
      <button className={`${styles.fixedContainer} ${styles.contactButton}`} onClick={handleOpenForm}>
        <Image src={Email} alt="Entre em contato" layout="fill" />
      </button>
    ) : formStatus === FormStatus.READY || formStatus === FormStatus.SENDING ? (
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
              aria-label={pageContent['contact']['name']}
              value={formData.name}
              onChange={(event) => { setFormData({...formData, name: event.target.value}) }}
            />
            <input 
              type="tel" 
              className={styles.contactForm__input} 
              placeholder={pageContent['contact']['tel']}
              aria-label={pageContent['contact']['tel']}
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
            aria-label="E-mail" 
            required 
          />
          <textarea 
            form="contactForm"
            className={styles.contactForm__input}
            style={{resize: 'none'}}
            placeholder={`${pageContent['contact']['message']}*`}
            aria-label={`${pageContent['contact']['message']}*`}
            value={formData.message}
            onChange={(event) => { setFormData({...formData, message: event.target.value}) }}
            rows={7}
            required 
          />
        </Row>
        { formStatus === FormStatus.READY ? (
            <input className={styles.contactForm__send} type="submit" value={pageContent['contact']['send']} />
          ) : (
            <span className={styles.contactForm__spinner}>
              <PacmanLoader color="var(--black)" size="1.25rem" speedMultiplier={1.1} />
            </span>
          )}
      </Container>
    ) : formStatus === FormStatus.SENT ? ( getFeedback(FormStatus.SENT) ) 
      : ( getFeedback(FormStatus.ERROR) )
  );
}
