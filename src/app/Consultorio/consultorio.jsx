import Map from "../MapComponent/map";
import Consultorio1 from "../../../public/images/Consultorio-int.png";
import Consultorio2 from "../../../public/images/Consultorio-ext.png";
import styles from "./styles.module.css";
import Image from "next/image";
import IconeMapa from "../../../public/images/Pequeno-icone-mapa.png"

export default function Consultorio()
{
    return(
        <>
            <section className={styles.background}>
                <h1 className={styles.titulo}>CONHEÇA NOSSO CONSULTÓRIO</h1>
                <div className={styles.flexbox}>
                    <div className={styles.consultorioImgsBox}>
                        <Image 
                            src={Consultorio1}
                            width={370}
                            height={370}
                            alt="Logotipo"/>
                        <Image 
                            src={Consultorio2}
                            width={370}
                            height={370}
                            alt="Logotipo"
                        />
                    </div>
                    <div className={styles.localizacaoBox}>
                        <h2>Nossa Localização</h2>
                        <div className={styles.enderecoBox}>
                            <Image
                                src={IconeMapa}
                                width={32}
                                height={32}
                                alt="Pequeno ícone de mapa"
                            />
                            <address>Rua Alceu Amoroso Lima, 276, Salvador/BA. CEP: 41820-770.</address>
                        </div>
                        <Map />
                    </div>
                </div>
            </section>
        </>
    );
}