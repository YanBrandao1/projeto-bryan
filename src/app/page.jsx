import styles from "./page.module.css";
import ContactUs from "./FormComponent/form.jsx";
import Map from "./MapComponent/map.jsx";
import Hero from "./Hero/hero";
import Sobremim from "./Sobremim/sobremim.jsx";
import Servicos from "./Serviços/servicos";

export default function Home() {

  return (
   <>
      <Sobremim />
      <Servicos />
   </>
  );
}
