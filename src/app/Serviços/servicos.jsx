import styles from "./styles.module.css";
import servico_1 from "../../../public/images/Serviço-1.png";
import servico_2 from "../../../public/images/Serviço-2.png";
import servico_3 from "../../../public/images/Serviço-3.png";
import servico_4 from "../../../public/images/Serviço-4.png";
import servico_5 from "../../../public/images/Serviço-5.png";
import servico_6 from "../../../public/images/Serviço-6.png";
import Image from "next/image";

export default function Servicos() {
  return (
    <>
      <section id="Servicos" className={styles.background}>
        <h1 className={styles.titulo}>
          PARA CUIDAR DE VOCÊ DE FORMA COMPLETA
        </h1>

        <div className={styles.grid}>
          <Image src={servico_1} alt="Serviço Nutricional" />
          <Image src={servico_2} alt="Serviço Nutricional" />
          <Image src={servico_3} alt="Serviço Nutricional" />
          <Image src={servico_4} alt="Serviço Nutricional" />
          <Image src={servico_5} alt="Serviço Nutricional" />
          <Image src={servico_6} alt="Serviço Nutricional" />
        </div>
      </section>
    </>
  );
}
