import styles from "./styles.module.css";
import Image from "next/image";
import BackgroundHeroImage from "../../../public/images/Hero-Background.png";
import LogoBryan from "../../../public/images/ícone.png";
import LogoBryanHeader from "../../../public/images/LogoBryanStolze.png";
import Link from "next/link";

export default function Hero (){
    
    return(
        <>
                    <header className={styles.backgroundHeader}>
                        <Image 
                            src={LogoBryanHeader}
                            width={166.69}
                            height={45}
                            alt="Pequeno logotipo"
                        />
                        <nav>
                            <ul>
                                <li><Link href="#Sobremim">SOBRE MIM</Link></li>
                                <li><Link href="#Servicos">SERVIÇOS</Link></li>
                                <li><Link href="#Depoimentos">DEPOIMENTOS</Link></li>
                                <li><Link href="#Local">LOCAL</Link></li>
                                <li><Link href="#Contato">CONTATO</Link></li>
                            </ul>
                        </nav>
                    </header>
                    <section className={styles.backgroundContainer}>
                    <div className={styles.manta}>
                        <div className={styles.backgroundHero}>
                            <Image 
                                src={LogoBryan}
                                width={100}
                                height={100}
                                alt="Logotipo"
                            />
                            <h1 style={{fontSize:'50px', color:'var(--cor-branca)'}}>BRYAN STOLZE</h1>
                            <h2 style={{fontSize:'20px', color:'var(--cor-branca)'}}>Nutrição Clínica Esportiva</h2>
                        </div>
                        </div>
                        </section>
        </>
    );
}