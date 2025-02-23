'use client'
import styles from "./styles.module.css";
import Card from "../CardComponent/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Depoimentos() {

    return(
        <section id="Depoimentos" className={styles.background}>
            <h1 className={styles.titulo}>DEPOIMENTOS CHEIOS DE GRATIDÃO E ALEGRIA</h1>
            <Swiper className={styles.carousel}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={80}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
    >
                <SwiperSlide className={styles.card}><Card nome={'Lucas Gonçalves Almeida'} descricao={'38 anos'} depoimento={'Fiz acompanhamento com o nutricionista durante 6 meses, consegui perder 10kg, notei uma grande diferença no meu físico no espelho. Fiquei muito satisfeito com os resultados !'}/></SwiperSlide>

                <SwiperSlide className={styles.card}><Card nome={'Flávia Bittencourt'} descricao={'32 anos'} depoimento={'Fiz acompanhamento com o nutricionista durante 6 meses, consegui perder 10kg, notei uma grande diferença no meu físico no espelho. Fiquei muito satisfeito com os resultados !'}/></SwiperSlide>

                <SwiperSlide className={styles.card}><Card nome={'Rafaela de Jesus'} descricao={'25 anos'} depoimento={'Fiz acompanhamento com o nutricionista durante 6 meses, consegui perder 10kg, notei uma grande diferença no meu físico no espelho. Fiquei muito satisfeito com os resultados !'}/></SwiperSlide>

                <SwiperSlide className={styles.card}><Card nome={'Gabriel Fonseca'} descricao={'18 anos'} depoimento={'Fiz acompanhamento com o nutricionista durante 6 meses, consegui perder 10kg, notei uma grande diferença no meu físico no espelho. Fiquei muito satisfeito com os resultados !'}/></SwiperSlide>

                <SwiperSlide className={styles.card}><Card nome={'Fernanda Andrade'} descricao={'23 anos'} depoimento={'Fiz acompanhamento com o nutricionista durante 6 meses, consegui perder 10kg, notei uma grande diferença no meu físico no espelho. Fiquei muito satisfeito com os resultados !'}/></SwiperSlide>

            </Swiper>
        </section>
    );
}