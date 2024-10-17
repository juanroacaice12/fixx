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

function LandingPage() {
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
    <div className="bg-landing-bg w-screen lg:h-screen h-[70vw] overflow-hidden relative" >
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
        <div className="relative z-[100] w-full items-center justify-center h-1/6 place-items-center">
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

        <div className="w-full h-5/6 relative z-[10]">
            <div className="flex flex-col w-full items-center justify-center place-items-center h-full">
                <span className="p-auto font-poppins font-semibold lg:text-[64px] text-[30px] text-white shadow-sm text-center fade-in">Fixlat Cyber Security: Simplifica y</span>
                <span className="p-auto text-center font-poppins font-semibold lg:text-[64px] text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-[#00cdff] to-[#002cbe] shadow-sm fade-in">
                    Potencia tu seguridad
                </span>
                <span className="p-auto text-center font-poppins font-semibold lg:text-[64px] text-[30px] text-white shadow-sm shadow-sm fade-in">Cibernética y cumplimiento</span>
            </div>
        </div>
    </div>

    <div className="bg-landing-bg w-screen h-auto ">
        <div className='flex flex-col items-center justify-center lg:py-[140px] py-[60px] w-[80vw] mx-auto overflow-hidden'>
            <Carousel></Carousel>
        </div>
        <div className='h-auto flex w-full'>
            <div className='w-full h-full px-[10vw]'>
                <span className='fade-in font-poppins font-semibold text-[20px] hover:text-[21px] bg-white rounded-2xl border px-5 py-1 transition-all duration-300 ease-in-out'>
                    NOSOTROS
                </span>
                <div className='py-5 lg:w-[40vw] w-[70vw] fade-in'>
                    <span className='font-poppins font-semibold text-white lg:text-[40px] text-[25px]'>
                        Conoce la solución perfecta para tí: Rápida y a tu medida
                    </span>
                    <p className='font-poppins text-white lg:text-[20px] text-[15px] lg:py-6 py-2'>
                        Descubre nuestras metodologías, diseñadas para ser rápidas y perfectamente ajustada a las necesidades de nuestros clientes.                </p>
                </div>
                <div className='lg:flex w-full h-full lg:py-15 py-10'>
                    <div className='w-1/3 h-auto bg-blue-card lg:mr-10 shadow-sm w-full rounded-lg fade-in'>
                        <div className='p-10'>
                            <div className='w-[60px] h-[60px] rounded-[150px] bg-blue-icon p-2'>
                                <MdOutlineShield className='text-custom-blue w-full h-full' />
                            </div>
                            <div className='mt-4'>
                                <span className='text-white font-poppins font-semibold text-[20px]'> Protección personalizada </span>
                                <p  className='text-white font-poppins font-light text-[14px] py-4'>Nos reunimos contigo, revisamos tu infraestructura y analizamos riesgos y vulnerabilidades, brindándote una protección personalizada y efectiva.</p>                            
                            </div>
                            <div className='flex justify-end items-center mt-12'>
                                <div className="relative group w-auto">
                                    <button
                                        onClick={() => window.open("https://wa.me/573104154049", "_blank")}
                                        >
                                        <p className='text-white font-poppins font-semibold text-[20px] mr-5'>
                                        Conoce más
                                        </p>
                                        <BsArrowRightCircle 
                                        className='w-[24px] h-[24px] text-white absolute top-1/2 transform -translate-y-1/2 right-[0px] opacity-0 group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-500 ease-in-out'
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3 h-auto bg-blue-card lg:mx-5 lg:my-0 my-10 shadow-sm w-full rounded-lg fade-in'>
                        <div className='p-10'>
                            <div className='w-[60px] h-[60px] rounded-[150px] bg-blue-icon p-2'>
                                <MdOutlineShield className='text-custom-blue w-full h-full' />
                            </div>
                            <div className='mt-4'>
                                <span className='text-white font-poppins font-semibold text-[20px]'> Planificación estratégica </span>
                                <p  className='text-white font-poppins font-light text-[14px] py-4'>Definimos objetivos de seguridad a corto y largo plazo, y desarrollamos un plan de acción detallado con cronograma y recursos para alcanzar esos objetivos.</p>                            
                            </div>
                            <div className='flex justify-end items-center mt-12'>
                                <div className="relative group w-auto">
                                    <button
                                        onClick={() => window.open("https://wa.me/573104154049", "_blank")}
                                        >
                                        <p className='text-white font-poppins font-semibold text-[20px] mr-5'>
                                        Conoce más
                                        </p>
                                        <BsArrowRightCircle 
                                        className='w-[24px] h-[24px] text-white absolute top-1/2 transform -translate-y-1/2 right-[0px] opacity-0 group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-500 ease-in-out'
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3 h-auto bg-blue-card lg:ml-10 shadow-sm w-full rounded-lg fade-in'>
                        <div className='p-10'>
                            <div className='w-[60px] h-[60px] rounded-[150px] bg-blue-icon p-2'>
                                <MdOutlineShield className='text-custom-blue w-full h-full' />
                            </div>
                            <div className='mt-4'>
                                <span className='text-white font-poppins font-semibold text-[20px]'> Seguridad para tu infraestructura </span>
                                <p  className='text-white font-poppins font-light text-[14px] py-4'>Establecemos tus objetivos de seguridad y ejecutamos un plan, gestionando cada fase con precisión y los recursos necesarios para proteger tu infraestructura.</p>                            
                            </div>
                            <div className='flex justify-end items-center mt-5'>
                                <div className="relative group w-auto">
                                    <button
                                        onClick={() => window.open("https://wa.me/573104154049", "_blank")}
                                        >
                                        <p className='text-white font-poppins font-semibold text-[20px] mr-5'>
                                        Conoce más
                                        </p>
                                        <BsArrowRightCircle 
                                        className='w-[24px] h-[24px] text-white absolute top-1/2 transform -translate-y-1/2 right-[0px] opacity-0 group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-500 ease-in-out'
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="bg-landing-bg w-screen lg:h-auto h-[110vw] overflow-hidden relative">
        <img 
            src="/pointsFrameLanding.svg" 
            alt="Layer" 
            className="absolute inset-0 w-full h-full shadow-sm" 
            style={{ pointerEvents: 'none' }} 
        />
        {/* Círculo con efecto de iluminación centrado en la parte inferior */}
        <div className="absolute inset-0 flex justify-center items-end">
            <div 
                className="absolute w-full" 
                style={{
                width: '200vw',  // Ajuste del tamaño
                height: '120vw', // Ajuste del tamaño
                borderRadius: '20%',  // Circular uniforme
                background: 'radial-gradient(circle at 50% 100%, rgba(0, 205, 255, 0.8), rgba(0, 44, 190, 0) 40%)',  // El gradiente se centra horizontalmente y se expande hacia arriba
                filter: 'blur(120px)',  // Efecto de desenfoque
                bottom: '-40vw',  // Ajuste para posicionar en la parte inferior
                }}
            />
        </div>

        <div className='w-full h-full flex flex-col justify-center items-center lg:py-20 py-7'>
                <button className='lg:text-[20px] text-[17px] text-black font-poppins font-semibold bg-custom-blue px-4 py-1 rounded-3xl fade-in'>CONÓCENOS</button>
                <div className='lg:w-[60vw] w-[75vw] h-auto py-5'>
                    <p className='lg:text-[40px] text-[25px] text-white font-poppins font-semibold text-center z-[10] fade-in'>Protegemos a tu empresa con soluciones avanzadas de ciberseguridad impulsada por IA</p>
                </div>
                <p className='lg:w-[42vw] w-[80vw] lg:text-[20px] text-[15px] text-center text-white font-poppins font-light z-[10] fade-in'>Fortalecemos la seguridad y el cumplimiento en LATAM con soluciones hechas a la medida, brindándote un servicio cercano y de confianza.</p>
        </div>
    </div>
    <div className='w-full bg-landing-bg relative ml-[10vw] -left-[10vw] items-center place-items-center mr-[10vw]'>
        {/* Este div sobresaldrá del contenedor */}
        <div className='w-full h-[100px] absolute lg:-top-10 -top-10'>
            <div className='w-full flex h-[100px] px-[10vw] fade-in'>
                <CardSliderAuto></CardSliderAuto>
            </div>
        </div>
    </div>
    <div className='w-screen h-[15vw] bg-landing-bg'></div>
    <div className='w-screen bg-landing-bg h-auto py-20'>
        <div className='flex flex-col px-[10vw] justify-left lg:mt-0 mt-20'>
            <span className='font-poppins font-semibold text-[20px] w-[160px] bg-white rounded-2xl border px-5 py-1 fade-in'>
                NOSOTROS
            </span>
            <div className='py-5 lg:w-[40vw] w-[70vw]'>
                <span className='font-poppins font-semibold text-white lg:text-[40px] text-[25px] fade-in'>
                    Conoce la solución perfecta para tí: Rápida y a tu medida
                </span>
                <p className='font-poppins text-white lg:text-[20px] text-[15px] lg:py-6 py-2 fade-in'>
                    Descubre nuestras metodologías, diseñadas para ser rápidas y perfectamente ajustada a las necesidades de nuestros clientes.                </p>
            </div>
        </div>
        <div className='w-full px-[10vw]'>
            <div className='w-full h-auto fade-in'>
                <CardSlider></CardSlider>
            </div>
        </div>
    </div>
    <div className='bg-landing-bg w-screen lg:h-auto h-auto overflow-hidden flex flex-col'>
        <div className='w-full h-full px-[10vw]'>
            <div className='flex flex-col justify-center items-center px-[10vw]'>
                <span className='bg-white rounded justify-centeritems-center px-2 rounded-[20px] py-1 fade-in'>CONÓCENOS</span>
                <span className='font-poppins lg:w-[22vw] w-full font-semibold text-white lg:text-[40px] text-[30px] text-center mt-2 fade-in'>La experiencia de nuestra empresa</span>
            </div>
        </div>

        <div className='w-full h-auto py-5 lg:mt-5 mt-5 lg:flex lg:grid lg:grid-cols-7 place-items-center px-[10vw] fade-in'>
            <span className='w-full font-poppins font-semibold lg:text-[30px] text-[20px] text-white'>Presencia nacional e internacional</span>
            <div className='lg:col-span-2 lg:h-full'>
                <div className='lg:h-full lg:w-[5px] h-[5px] w-full bg-custom-blue'></div>
            </div>
            <span className='col-span-4 font-poppins font-light text-white lg:text-[20px] text-[15px]'>En FIXLAT Security, nuestra experiencia nos ha permitido expandir operaciones a nivel internacional, colaborando en proyectos de ciberseguridad en países como México y Perú.</span>
        </div>
        <div className='py-3 w-full px-[5vw] fade-in'>
            <div className='px-[5vw] w-full h-auto py-5 lg:mt-0 mt-5 lg:flex lg:grid lg:grid-cols-7 place-items-center bg-blue-card rounded-lg'>
                <span className='font-poppins font-semibold lg:text-[28px] text-[20px] text-white'>Experiencia y Especialización en Tecnología y Ciberseguridad</span>
                <div className='lg:col-span-2 lg:h-full'>
                    <div className='lg:h-full lg:w-[5px] h-[5px] w-full bg-custom-blue'></div>
                </div>
                <span className='col-span-4 font-poppins font-light text-white lg:text-[20px] text-[15px]'>En FIXLAT Security, contamos con una vasta experiencia y especialización en tecnología y ciberseguridad. Brindamos soluciones innovadoras y efectivas para satisfacer las necesidades de nuestros clientes. Nuestro enfoque en la excelencia y la pasión por lo que hacemos nos permite enfrentar desafíos tecnológicos.</span>
            </div>
        </div>
        <div className='px-[10vw] w-full h-auto py-5 lg:mt-0 mt-5 lg:flex lg:grid lg:grid-cols-7 place-items-center fade-in'>
            <span className='font-poppins font-semibold lg:text-[30px] text-[20px] text-white'>Enfoque en la Excelencia y la Pasión</span>
            <div className='lg:col-span-2 lg:h-full'>
                <div className='lg:h-full lg:w-[5px] h-[5px] w-full bg-custom-blue'></div>
            </div>
            <span className='col-span-4 font-poppins font-light text-white lg:text-[20px] text-[15px]'>En FIXLAT Security, estamos comprometidos con la excelencia y la pasión por nuestro trabajo. Este compromiso nos impulsa a buscar soluciones innovadoras y efectivas en el ámbito de la tecnología y la ciberseguridad. Nuestra dedicación y creatividad nos permiten superar desafíos tecnológicos y ofrecer el mejor servicio a nuestros clientes.</span>
        </div>
    </div>
    <div className="bg-landing-bg w-screen lg:h-auto h-[100vw] overflow-hidden relative">
        <img 
            src="/pointsFrameLanding.svg" 
            alt="Layer" 
            className="absolute inset-0 w-full h-full shadow-sm" 
            style={{ pointerEvents: 'none' }} 
        />
        {/* Círculo con efecto de iluminación centrado en la parte inferior */}
        <div className="absolute inset-0 flex justify-center items-end">
            <div 
                className="absolute w-full" 
                style={{
                width: '200vw',  // Ajuste del tamaño
                height: '120vw', // Ajuste del tamaño
                borderRadius: '20%',  // Circular uniforme
                background: 'radial-gradient(circle at 50% 100%, rgba(0, 205, 255, 0.8), rgba(0, 44, 190, 0) 40%)',  // El gradiente se centra horizontalmente y se expande hacia arriba
                filter: 'blur(120px)',  // Efecto de desenfoque
                bottom: '-40vw',  // Ajuste para posicionar en la parte inferior
                }}
            />
        </div>

        <div className='w-full h-full flex flex-col justify-center items-center lg:py-20 py-7'>
                <div className='lg:w-[60vw] w-[75vw] h-auto py-5'>
                    <p className='lg:text-[40px] text-[25px] text-white font-poppins lg:px-[17vw] px-[10vw] font-semibold text-center z-[10] fade-in'>Ponte en contacto con nosotros</p>
                </div>
                <p className='lg:w-[42vw] w-[80vw] lg:text-[20px] text-[15px] text-center text-white font-poppins font-light z-[10] fade-in'>"En FixLat, nos comprometemos a ofrecerte una protección integral para tu información digital. Nuestra misión es garantizar que tus datos estén seguros y tu entorno digital protegido contra cualquier amenaza."</p>
                <button 
                    className='transitions-all fade-in duration-1000 ease-in-out lg:text-[20px] text-[17px] mt-10 text-black font-poppins hover:text-white hover:text-[18px] hover:lg:text-[21px] z-[10] font-semibold bg-custom-blue px-4 py-1 rounded-3xl'
                    onClick={() => window.open("https://wa.me/573104154049", "_blank")}
                    >
                    CONTACTANOS
                </button>
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

export default LandingPage;