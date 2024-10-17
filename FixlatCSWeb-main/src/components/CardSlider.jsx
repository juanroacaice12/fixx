import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { PiBookOpenText } from "react-icons/pi";
import { TbRuler2Off } from "react-icons/tb";
import { MdOutlineSecurityUpdateWarning } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import { RiSecurePaymentLine } from "react-icons/ri";

const CardSlider = () => {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation={{
          prevEl: '#slider-button-left',
          nextEl: '#slider-button-right',
        }}
        breakpoints={{
            // cuando el ancho de la pantalla es >= 640px
            400: {
              slidesPerView: 2, // 2 slides visibles en pantallas pequeñas
            },
            // cuando el ancho de la pantalla es >= 768px
            768: {
              slidesPerView: 4, // 4 slides visibles en pantallas más grandes
            },
          }}
        loop={true} 
        className="multiple-slide-carousel swiper-container"
      >
        <div className="swiper-wrapper mb-16">
          <SwiperSlide className="swiper-slide">
            <div className="rounded-2xl w-full h-full bg-blue-card lg:h-[400px] h-[60vw] flex justify-center items-center">
                <div className='lg:p-10 h-[300px] p-5 h-full flex flex-col'>
                    <div className='w-[50px] h-[50px] rounded-[2000px] bg-blue-icon p-2'>
                        <TbRuler2Off className='text-custom-blue w-full h-full' />
                    </div>
                    <span className='text-white lg:mt-auto mt-[20vw] font-poppins font-semibold lg:text-[20px] text-[15px]'>Cumplimiento y normatividad </span>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="rounded-2xl w-full h-full bg-blue-card lg:h-[400px] h-[60vw] flex justify-center items-center">
                    <div className='lg:p-10 p-5 h-full flex flex-col'>
                        <div className='w-[50px] h-[50px] rounded-[2000px] bg-blue-icon p-2'>
                            <MdOutlineSecurityUpdateWarning className='text-custom-blue w-full h-full' />
                        </div>
                        <span className='text-white lg:mt-auto mt-[20vw] font-poppins font-semibold lg:text-[20px] text-[15px]'>Ingeniería en ciberseguridad </span>
                    </div>
                </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
          <div className="rounded-2xl w-full h-full bg-blue-card lg:h-[400px] h-[60vw] flex justify-center items-center">
                <div className='lg:p-10 p-5 h-full flex flex-col'>
                    <div className='w-[50px] h-[50px] rounded-[2000px] bg-blue-icon p-2'>
                        <RiSecurePaymentLine  className='text-custom-blue w-full h-full' />
                    </div>
                    <span className='text-white lg:mt-auto mt-[20vw] font-poppins font-semibold lg:text-[20px] text-[15px]'>Pruebas de hackeo ético </span>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
          <div className="rounded-2xl w-full h-full bg-blue-card lg:h-[400px] h-[60vw] flex justify-center items-center">
                <div className='lg:p-10 p-5 h-full flex flex-col'>
                    <div className='w-[50px] h-[50px] rounded-[2000px] bg-blue-icon p-2'>
                        <GrSecure className='text-custom-blue w-full h-full' />
                    </div>
                    <span className='text-white lg:mt-auto mt-[20vw] font-poppins font-semibold lg:text-[20px] text-[15px] mr-10'>Seguridad profunda </span>
                </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>

      <div className="lg:block hidden absolute flex justify-center items-center m-auto left-0 right-0 w-fit bottom-12">
        <button
          id="slider-button-left"
          className="swiper-button-prev group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 !-translate-x-16"
        >
          <svg
            className="h-5 w-5 text-indigo-600 group-hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          id="slider-button-right"
          className="swiper-button-next group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 !translate-x-16"
        >
          <svg
            className="h-5 w-5 text-indigo-600 group-hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.99984 4.00012L10 8.00029L5.99748 12.0028"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
