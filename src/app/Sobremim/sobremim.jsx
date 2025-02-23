import styles from './styles.module.css'
import Image from 'next/image'
import SobremimImage from '../../../public/images/sobremim-image.png'

export default function Sobremim () {
    return (
        <>
            <section id="Sobremim" className={styles.background}>
                <div className={styles.sobremimImageBox}>
                    <Image
                        src={SobremimImage}
                        width={434.92}
                        height={460}
                        alt='Nutricionista'
                        quality={100}
                    />
                </div>
                <div className={styles.sobremimTextBox}>
                    <h1>
                        UM POUCO SOBRE MIM
                    </h1>
                    <p>
                    Olá, sou Bryan Stolze, seu próximo e, finalmente, último nutricionista daqui em diante!<br/><br/> Tenho formação em Bacharelado Interdisciplinar em Saúde e Nutrição pela Universidade Federal da Bahia e experiência em Nutrição Clínica e Esportiva. Sei que você busca primariamente resultados estéticos, mas meu trabalho vai lhe proporcionar muito além disso; vamos juntos aprimorar sua performance esportiva e sua qualidade de vida também.
                    <br /><br />
                    Atendo online e presencialmente, desenvolvendo planos nutricionais personalizados e baseados em ciência, sempre alinhados às suas necessidades e objetivos. <br /><br /> Juntos, vamos trabalhar para que você alcance resultados consistentes e duradouros.
                    </p>
                </div>
            </section>
        </>
    )
}