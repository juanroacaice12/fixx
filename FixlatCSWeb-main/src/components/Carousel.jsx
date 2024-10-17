import React from 'react';
import Slider from "react-slick"; // Importamos el carrusel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const logos = [
        "https://raw.githubusercontent.com/juanroacaice12/imagens-/main/logo_smart.svg",
        "https://raw.githubusercontent.com/juanroacaice12/imagens-/main/quimicas-removebg-preview.svg",
        "https://raw.githubusercontent.com/juanroacaice12/imagens-/main/el-retiro.svg",
        "https://raw.githubusercontent.com/juanroacaice12/imagens-/main/emo.svg",
        "https://raw.githubusercontent.com/juanroacaice12/imagens-/refs/heads/main/china.svg"
    ];

    const settings = {
        dots: false,               // Sin puntos de navegación
        infinite: true,            // Carrusel infinito
        speed: 2000,                // Velocidad de transición
        slidesToShow: 4,           // Cuántos logos mostrar a la vez
        slidesToScroll: 1,         // Cuántos logos desplazar en cada transición
        autoplay: true,            // Carrusel automático
        autoplaySpeed: 2000,       // Velocidad de desplazamiento
        arrows: false,             // Sin flechas de navegación
        pauseOnHover: false,       // Continuar incluso si el usuario pasa el ratón por encima
    };

    return (
        <div className="w-full flex flex-col">
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div 
                        key={index} 
                        className="h-[100px] lg:w-[250px] w-[150px] flex justify-center items-center bg-transparent">
                        <img 
                            src={logo} 
                            alt={`Logo ${index + 1}`} 
                            className="filter brightness-0 invert lg:h-full w-full h-16 object-contain" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;

