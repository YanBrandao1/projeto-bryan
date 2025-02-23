import styles from "./styles.module.css"

export default function Map () {

    const keyMap = process.env.NEXT_PUBLIC_MAP_API_KEY;
    const urlAdress = `https://www.google.com/maps/embed/v1/place?key=${keyMap}&q=Helbor+Mondial+SalvadorRua+Alceu+Amoroso+Lima+276+41820770,Salvador+BA`;
    
    return (
        <>
        <iframe
            width="370"
            height="208"
            style={{border: 0}}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={urlAdress}>
        </iframe>
        </>
    );
}