import styles from "./styles.module.css";
import Image from "next/image";
import BackgroundHeroImage from "../../../public/images/Hero-Background.png";
import LogoBryan from "../../../public/images/ícone.png";


export default function Hero (){
    
    return(
        <>
            <section className={styles.backgroundContainer}>
                <div className={styles.backgroundContainer2}>
                    <Image 
                        src={LogoBryan}
                        width={100}
                        height={100}
                        alt="Logotipo"
                    />
                    <h1 style={{fontSize:'50px', color:'var(--cor-branca)'}}>BRYAN STOLZE</h1>
                    <h2 style={{fontSize:'20px', color:'var(--cor-branca)'}}>Nutrição Clínica Esportiva</h2>
                </div>

                
            </section>
        </>
    );
}