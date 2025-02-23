import styles from "./page.module.css";
import ContactUs from "./FormComponent/form.jsx";
import Map from "./MapComponent/map.jsx";
import Hero from "./Hero/hero";
import Sobremim from "./Sobremim/sobremim.jsx";
import Servicos from "./Serviços/servicos";
import Card from "./CardComponent/card";
import Depoimentos from "./Depoimentos/depoimentos";
import Form from "./FormComponent/form.jsx";
import Consultorio from "./Consultorio/consultorio";

export default function Home() {

  return (
   <>
      <Sobremim />
      <Servicos />
      <Depoimentos />
      <Consultorio />
   </>
  );
}


