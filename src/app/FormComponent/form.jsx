"use client"
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./styles.module.css"

const formKey = process.env.NEXT_PUBLIC_FORM_KEY;
const ServiceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;

export default function Form(){
  useEffect(() => {
    emailjs.init(formKey);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(ServiceId, templateId, e.target, formKey)
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
}