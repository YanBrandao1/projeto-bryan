"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import LogoBryan from "../../../public/images/ícone.png";
import LogoBryanHeader from "../../../public/images/LogoBryanStolze.png";
import Link from "next/link";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.backgroundHeader}>
        <Image
          src={LogoBryanHeader}
          width={166.69}
          height={45}
          alt="Pequeno logotipo"
        />

        {/* Botão hamburguer visível em telas pequenas */}
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Navegação */}
        <nav className={`${styles.navMenu} ${menuOpen ? styles.open : ""}`}>
          <ul>
            <li>
              <Link href="#Sobremim" onClick={() => setMenuOpen(false)}>
                SOBRE MIM
              </Link>
            </li>
            <li>
              <Link href="#Servicos" onClick={() => setMenuOpen(false)}>
                SERVIÇOS
              </Link>
            </li>
            <li>
              <Link href="#Depoimentos" onClick={() => setMenuOpen(false)}>
                DEPOIMENTOS
              </Link>
            </li>
            <li>
              <Link href="#Local" onClick={() => setMenuOpen(false)}>
                LOCAL
              </Link>
            </li>
            <li>
              <Link href="#Contato" onClick={() => setMenuOpen(false)}>
                CONTATO
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className={styles.backgroundContainer}>
        <div className={styles.manta}>
          <div className={styles.backgroundHero}>
            <Image src={LogoBryan} width={100} height={100} alt="Logotipo" />
            <h1 style={{ fontSize: "50px", color: "var(--cor-branca)" }}>
              BRYAN STOLZE
            </h1>
            <h2 style={{ fontSize: "20px", color: "var(--cor-branca)" }}>
              Nutrição Clínica Esportiva
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
