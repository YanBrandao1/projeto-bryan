import styles from "./styles.module.css";
import Image from "next/image";

export default function Card({nome, descricao, depoimento}){

    return(
        <>
            <div className={styles.cardBox}>
                <div className={styles.centralBox}>
                    <div className={styles.upperBox}>
                            <h3 style={{fontSize:'16px'}}>{nome}</h3>
                            <h4 style={{fontSize:'14px'}}>{descricao}</h4>
                    </div>
                    <div className={styles.lowerBox}>
                        <p style={{fontSize:'14px'}}>{depoimento}</p>
                    </div>
                </div>
            </div>
            
        </>
    );
}