"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Form from "../FormComponent/form";
import styles from "./styles.module.css";
import formImage1 from "../../../public/images/Nutricionista1.png";
import formImage2 from "../../../public/images/Nutricionista2.png";
import { TfiInstagram } from "react-icons/tfi";

export default function Contato() {
    
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    handleResize(); // verificar já na montagem
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="Contato" className={styles.background}>
      <div className={styles.manta}>
        <h1>ENTRE NA LISTA DE ESPERA</h1>
        <div className={styles.conteudoFooterBox}>
          {isDesktop && (
            <Image
              src={formImage1}
              alt="Imagem do nutricionista"
                className={styles.nutricionistaImg}
            />
          )}
          <Form />
          {isDesktop && (
            <Image
              src={formImage2}
              alt="Imagem do nutricionista"
                className={styles.nutricionistaImg}
            />
          )}
        </div>
      </div>
    </section>
  );
}
