import styles from "./page.module.css";
import ContactUs from "./FormComponent/form.jsx";
import Map from "./MapComponent/map.jsx";
import Hero from "./Hero/hero";
import Sobremim from "./Sobremim/sobremim.jsx";
import Servicos from "./Serviços/servicos";
import Card from "./CardComponent/card";
import Carousel from "./CarouselComponent/carousel";
import Form from "./FormComponent/form.jsx";

export default function Home() {

  return (
   <>
      <Sobremim />
      <Servicos />
      <Carousel />
      <Map />
      <Form />
   </>
  );
}


