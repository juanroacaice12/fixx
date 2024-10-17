import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { PiDetective } from "react-icons/pi";
import { PiBookOpenText } from "react-icons/pi";
import { RiGuideLine } from "react-icons/ri";
import { PiRobot } from "react-icons/pi";

const CardSliderAuto = () => {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        breakpoints={{
          // cuando el ancho de la pantalla es >= 640px
          400: {
            slidesPerView: 1, // 2 slides visibles en pantallas pequeñas
          },
          // cuando el ancho de la pantalla es >= 768px
          768: {
            slidesPerView: 3, // 4 slides visibles en pantallas más grandes
          },
        }}
        navigation={{
          prevEl: '#slider-button-left-2',
          nextEl: '#slider-button-right-2',
        }}
        loop={true} 
        className="multiple-slide-carousel swiper-container"
      >
        <div className="swiper-wrapper mb-16">
          <SwiperSlide className="swiper-slide">
            <div className="bg-blue-card w-full rounded-2xl lg:h-[240px] h-[40vw] flex">
              <div className='lg:p-10 px-8 py-5 h-full flex flex-col'>
                <div className='w-[50px] h-[50px] justify-start rounded-[2000px] bg-blue-icon p-2'>
                  <PiDetective className='text-custom-blue w-full h-full' />
                </div>
                <span className='text-white mt-auto font-poppins font-regular text-[20px]'>Detección y corecciones de vulnerabilidades cloud y APIs</span>
              </div>            
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
          <div className="bg-blue-card w-full rounded-2xl lg:h-[240px] h-[40vw] flex">
              <div className='lg:p-10 px-8 py-5 h-full flex flex-col'>
                <div className='w-[50px] h-[50px] justify-start rounded-[2000px] bg-blue-icon p-2'>
                  <RiGuideLine className='text-custom-blue w-full h-full' />
                </div>
                <span className='text-white mt-auto font-poppins font-regular text-[20px]'>Monitoreo de seguridad de colaboradores</span>
              </div>            
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
          <div className="bg-blue-card w-full rounded-2xl lg:h-[240px] h-[40vw] flex">
              <div className='lg:p-10 px-8 py-5 h-full flex flex-col'>
                <div className='w-[50px] h-[50px] justify-start rounded-[2000px] bg-blue-icon p-2'>
                  <PiRobot className='text-custom-blue w-full h-full' />
                </div>
                <span className='text-white mt-auto font-poppins font-regular text-[20px] mr-24'>Detección de phishing con IA</span>
              </div>            
            </div>
          </SwiperSlide>
        </div>
      </Swiper>

      <div className=" lg:block hidden absolute flex justify-center items-center m-auto left-0 right-0 w-fit bottom-12">
        <button
          id="slider-button-left-2"
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
          id="slider-button-right-2"
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

export default CardSliderAuto;
