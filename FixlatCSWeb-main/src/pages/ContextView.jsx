import React, { useEffect, useRef } from 'react';
import Carousel from '../components/Carousel';
import { MdOutlineShield } from "react-icons/md";
import { BsArrowRightCircle } from "react-icons/bs";
import CardSlider from '../components/CardSlider';
import CardSliderAuto from '../components/CardSliderAuto';
import { TfiWorld } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

function ContextView() {
    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            } else {
              entry.target.classList.remove('show');
            }
          });
        });
    
        elements.forEach(el => observer.observe(el));
    
        return () => {
          elements.forEach(el => observer.unobserve(el));
        };
      }, []);

    return (
    <>
    <div className="bg-landing-bg w-screen lg:h-[70vh] h-[70vw] overflow-hidden relative" >
        {/* Capa SVG */}
        <img 
            src="/vite.svg" 
            alt="Layer" 
            className="absolute inset-0 w-full h-full" 
            style={{ pointerEvents: 'none' }} 
        />
        {/* Borde con gradiente */}

        <img 
            src="/pointsFrameLanding.svg" 
            alt="Layer" 
            className="absolute inset-0 w-full h-full shadow-sm" 
            style={{ pointerEvents: 'none' }} 
        />
  


    {/* Círculo con efecto de iluminación en la esquina superior izquierda */}
    <div className="absolute inset-0 flex justify-start items-start">
    <div 
        className="absolute w-[70vw] h-[76vw] rounded-full bg-[radial-gradient(circle_at_top_left,_rgba(0,205,255,0.8),_rgba(0,44,190,0)_80%)] blur-[100px] top-[-38vw] left-[-38vw] animate-pulse-slow" 
    />
    </div>

    {/* Círculo con efecto de iluminación en la esquina inferior derecha */}
    <div className="absolute inset-0 flex justify-end items-end">
    <div 
        className="absolute w-[70vw] h-[76vw] rounded-full bg-[radial-gradient(circle_at_bottom_right,_rgba(0,205,255,0.8),_rgba(0,44,190,0)_80%)] blur-[100px] bottom-[-38vw] right-[-38vw] animate-pulse-slow" 
    />
    </div>

        {/* Contenido del div */}
        <div className="relative z-[100] w-full items-center justify-center h-1/6 place-items-center lg:mt-[5.4vh]">
            <div className="flex justify-center mt-5 items-center w-full h-full grid grid-cols-2 lg:grid-cols-5">
                <div className="flex flex-col w-full h-full col-span-1 place-items-center justify-center ">
                    <img
                        src="Fixlat-HD.svg"
                        alt="img"
                        className="lg:p-auto lg:mt-0 text-white"
                    />
                </div>
                <div className="lg:flex space-x-20 w-full h-full hidden col-span-3 place-items-center justify-center">
                    <NavLink 
                        className="font-poppins leading-auto text-[16px] hover:text-[17px] text-white shadow-sm relative font-regular overflow-hidden transition-all duration-300 ease-in-out border-b-4 border-transparent hover:border-custom-blue"
                        to="/"
                        > 
                        Inicio 
                    </NavLink>
                    <NavLink 
                        className="font-poppins leading-auto text-[16px] hover:text-[17px] text-white shadow-sm relative font-regular overflow-hidden transition-all duration-300 ease-in-out border-b-4 border-transparent hover:border-custom-blue"
                        to="/quienes-somos"
                        > 
                        Servicios 
                    </NavLink>
                    <NavLink 
                        className="font-poppins leading-auto text-[16px] hover:text-[17px] text-white shadow-sm relative font-regular overflow-hidden transition-all duration-300 ease-in-out border-b-4 border-transparent hover:border-custom-blue"
                        to="/quienes-somos"
                        > 
                        Complementos 
                    </NavLink>
                    <NavLink 
                        className="font-poppins leading-auto text-[16px] hover:text-[17px] text-white shadow-sm relative font-regular overflow-hidden transition-all duration-300 ease-in-out border-b-4 border-transparent hover:border-custom-blue"
                        to="/quienes-somos"
                        >
                        ¿Quiénes somos?
                    </NavLink>
                    <div className='flex w-auto items-center justify-center place-items-center transition-colors border-b-4 border-transparent hover:border-custom-blue'>
                        <TfiWorld className='w-full h-full text-white px-2'/>
                        <span className="font-poppins leading-auto text-[16px] text-white shadow-sm relative font-regular"> ES </span>
                    </div>
                </div>
                <div className="flex flex-col w-full h-full col-span-1 items-center justify-center"> 
                    <button
                        className="border px-5 py-1 rounded-2xl border-custom-blue text-custom-blue font-poppins font-semibold text-[16px] hover:bg-custom-blue hover:text-white transition duration-1000 ease-in-out"
                        onClick={() => window.open("https://wa.me/573104154049", "_blank")}
                        >
                        Contáctanos
                    </button>
                </div>
            </div>
        </div>

        <div className="w-full h-5/6 relative z-[10] lg:mt-auto flex justify-center">
            <div className="flex flex-col w-full items-center justify-center place-items-center h-full">
                <span className="p-auto font-poppins font-semibold lg:text-[64px] text-[30px] text-white shadow-sm text-center fade-in">¿Quienes somos?</span>
            </div>
        </div>
    </div>

    <div className='w-screen h-auto bg-landing-bg px-[10vw]'>
        <div className='w-full h-auto flex place-items-center justify-center pt-[7vw]'>
            <span className='flex place-items-center items-center mb-10 bg-white font-semibold px-3 py-1 rounded-[20px] font-poppins font-regular text-[20px] fade-in'>¿Quienes somos?</span>
        </div>
        <div className='w-full h-auto flex flex-col justify-center items-center'>
            <div className='flex space-x-2'>
                <span className='text-white font-poppins font-semibold lg:text-[38px] text-[20px] fade-in'>FIXLAT CIBERSECURITY: </span>
                <span className='text-center font-poppins font-semibold lg:text-[38px] text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#00cdff] to-[#002cbe] shadow-sm fade-in'> Innovación y defensa</span>
            </div>
            <div className='flex'>
                <span className='text-white font-poppins font-semibold lg:text-[38px] text-[20px] fade-in'>Proactiva en ciberseguridad</span>            
            </div>
            <p className='text-white font-poppins font-regular lg:text-[20px] text-[15px] text-center py-10 fade-in'>
                En FIXLAT CIBERSECURITY, somos una organización innovadora con un equipo multidisciplinario de ingenieros mecatrónicos, desarrolladores de software y consultores de ciberseguridad. Utilizamos inteligencia artificial para crear soluciones avanzadas que previenen ataques cibernéticos, ofreciendo a nuestros clientes una defensa proactiva y de alta calidad frente a las amenazas digitales.
            </p>
            <img 
                className='py-10 w-full h-[530px] fade-in'
                src="../quienes-somos.jpg" 
                alt="imagen_muchachos" />
        </div>
        <div>

        </div>
    </div>

    <div className='bg-landing-bg w-screen lg:h-auto h-auto overflow-hidden flex flex-col'>
        <div className='w-full h-auto py-5 lg:mt-5 mt-5 lg:flex lg:grid lg:grid-cols-7 place-items-center px-[10vw] fade-in'>
            <span className='w-full font-poppins font-semibold lg:text-[30px] text-[20px] text-white'>Misión</span>
            <div className='lg:col-span-2 lg:h-full'>
                <div className='lg:h-full lg:w-[5px] h-[5px] w-full bg-custom-blue'></div>
            </div>
            <span className='col-span-4 font-poppins font-light text-white lg:text-[20px] text-[15px]'>Nuestra misión es proporcionar tecnologías innovadoras, fáciles de implementar y altamente efectivas, diseñadas para salvaguardar infraestructuras y sistemas en un entorno digital cada vez más complejo. A través de nuestra experiencia en IA y seguridad cibernética, buscamos empoderar a nuestros clientes para que puedan operar con confianza, sabiendo que están protegidos por soluciones de vanguardia.</span>
        </div>
        <div className='py-10 w-full px-[5vw] fade-in'>
            <div className='px-[5vw] w-full h-[15vw] py-5 lg:mt-0 mt-5 lg:flex lg:grid lg:grid-cols-7 items-center justify-center bg-blue-card rounded-lg'>
                <span className='font-poppins font-semibold lg:text-[28px] text-[20px] text-white'>Visión</span>
                <div className='lg:col-span-2 lg:h-full justify-center flex'>
                    <div className='lg:h-full lg:w-[5px] h-[5px] w-full bg-custom-blue'></div>
                </div>
                <span className='col-span-4 font-poppins font-light text-white lg:text-[20px] text-[15px]'>La visión de FIXLAT CIBERSECURITY es liderar a nivel mundial en la prevención de ciberataques mediante inteligencia artificial, protegiendo a PYMES con soluciones innovadoras que anticipen amenazas y aseguren un entorno digital seguro y confiable.</span>
            </div>
        </div>
    </div>
    {/*Footer*/}
    <div className='w-screen h-[10cv] bg-landing-bg flex flex-col px-[10vw] justify-center items-center'>
+       <div className='items-center lg:py-20 py-10 lg:flex h-full w-full place-items-center justify-center lg:space-x-20'>
            <div className='w-auto lg:h-auto h-[20vw] flex justify-center lg:space-x-20 space-x-10'>
                <img src="../NDE.svg" alt="" className='fade-in'/>
                <img src="../CCT.svg" alt="" className='fade-in'/>
                <img src="../VERACODE.svg" alt="" className='fade-in'/>
            </div>
            <div className='w-auto lg:h-auto h-[20vw] flex justify-center lg:space-x-20 space-x-10'>
                <img src="../REDHAT.svg" alt="" className='fade-in'/>
                <img src="../CEH.svg" alt="" className='fade-in'/>
            </div>
        </div>
    </div>
    <div className='w-screen h-[3px] bg-metal'></div>
    <div className='w-screen flex flex-col lg:h-auto h-[30vw] bg-landing-bg grid grid-cols-6'>
        <div className='flex col-span-1 w-full h-full justify-center items-center place-items-center ml-4 '>
            <img
                src="Fixlat-HD.svg"
                alt="img"
                className="lg:p-20 lg:px-2 px-4 fade-in"
            />
        </div>
        <div className='col-span-4 flex flex-col w-full h-full justify-center items-center place-items-center'>
            <div className='w-full h-auto flex justify-center items-center place-items-center space-x-5 fade-in'>
                <div className='rounded-[250px] lg:w-auto w-[9vw] flex justify-center bg-custom-blue py-2'>
                    <button
                        onClick={() => window.open("https://wa.me/573104154049", "_blank")}
                        >
                        <FaWhatsapp className='w-[50px] transitions-all duration-200 ease-in-out hover:lg:h-[33px] hover:h-[6vw] lg:h-[30px] h-[5vw] text-landing-bg'/>
                    </button>
                </div>
                <div className='rounded-[200px] lg:w-auto w-[9vw] flex justify-center bg-custom-blue py-2'>
                <button
                    onClick={() => window.location.href = "mailto:ceo@fixlat.com"}
                    >
                    <BiLogoGmail className='w-[50px] transition-all duration-200 ease-in-out hover:lg:h-[33px] hover:h-[6vw] lg:h-[30px] h-[5vw] text-landing-bg'/>
                </button>
                </div>
                <div className='rounded-[200px] lg:w-auto w-[9vw] flex justify-center bg-custom-blue py-2'>
                    <button
                        onClick={()=> window.open("https://www.linkedin.com/company/fixlatcyber/posts/?feedView=all", "_blank")}
                        >
                        <FaLinkedin className='w-[50px] transitions-all duration-200 ease-in-out hover:lg:h-[33px] hover:h-[6vw] lg:h-[30px] h-[5vw] text-landing-bg'/>
                    </button>
                </div>
            </div>
            <div className='w-full h-auto flex justify-center items-center place-items-center'>
                <span className='text-white text-center lg:text-[16px] lg:mt-7 text-[10px] mt-5 fade-in'>Todos los derechos reservados</span>
            </div>
        </div>
        <div className='flex col-span-1 w-full h-full justify-center items-center place-items-center'>
            <span className='w-full justify-center items-center flex h-full text-white text-center lg:text-[16px] text-[10px] mr-2 fade-in'>© 2024 FixLat CiberSecurity</span>
        </div>
    </div>
    </>

    );
}

export default ContextView;