"use client"
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./styles.module.css"

const ContactForm = () => {
  useEffect(() => {
    emailjs.init('zsSA6VsvwHM47O6JW');
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tg6o09k', 'template_8j3fxes', e.target, 'zsSA6VsvwHM47O6JW')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form onSubmit={sendEmail}>
      <label>Name:</label>
      <input type="text" name="user_name" />

      <label>Email:</label>
      <input type="email" name="user_email" />

      <label>Message:</label>
      <textarea name="message" />

      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;