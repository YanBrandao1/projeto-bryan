import styles from "./page.module.css";
import ContactUs from "./FormComponent/form.jsx";
import Map from "./MapComponent/map.jsx";
import Hero from "./Hero/hero";
import Sobremim from "./Sobremim/sobremim.jsx";
import Servicos from "./Serviços/servicos";
import Card from "./CardComponent/card";
import Depoimentos from "./Depoimentos/depoimentos";
import Form from "./FormComponent/form.jsx";
import Local from "./Local/local";

export default function Home() {

  return (
   <>
      <Hero />
      <Sobremim />
      <Servicos />
      <Depoimentos />
      <Local />
   </>
  );
}


