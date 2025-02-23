import Image from 'next/image';
import Form from '../FormComponent/form';
import styles from './styles.module.css';
import formImage1 from "../../../public/images/Nutricionista1.png";
import formImage2 from "../../../public/images/Nutricionista2.png";

export default function Contato()
{
    
    return(
        <>
            <section id="Contato" className={styles.background}>
                <div className={styles.manta}>
                    <h1>ENTRE NA LISTA DE ESPERA</h1>
                    <div className={styles.conteudoFooterBox}>
                        <Image 
                            src={formImage1}
                            width={280}
                            height={597}
                            alt="Imagem do nutricionista"
                        />
                        <Form />
                        <Image 
                            src={formImage2}
                            width={280}
                            height={597}
                            alt="Imagem do nutricionista"
                        />
                    </div>
                </div>
            </section>
        </>
    );

}