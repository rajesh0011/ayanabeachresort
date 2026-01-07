"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DiningSlider() {
  const diningOptions = [
    {
      id: 1,
      title: "Tangelo",
      desc: "Tangelo is the in-house restaurant at Ayana Beach Resort, created for relaxed and easy dining. Once operational, it will offer a comfortable space to enjoy everyday meals in a calm setting. Guests can look forward to simple flavours and a pleasant atmosphere, making Tangelo a convenient spot to dine during their stay near the beach.",
      timing:"11 a.m. to 10 p.m.",
      image: "/img/dining.webp",
    }
  ];

  return (
    <section className="mt-5 bg-white" id="Dining">
      
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto px-6 mb-4">
        <h2 className="text-4xl md:text-4xl font-cormorant font-bold text-[#1b3a4b] mb-4 mt-5">
          Dining
        </h2>
         

      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        autoplay={{ delay: 4500 }}
        loop
        className="max-w-[1400px] mx-auto"
      >
        {diningOptions.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center text-center">

              {/* Image */}
              <div className="relative w-full h-[400px] overflow-hidden ">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1920}
                  height={300}
                  className="object-cover w-full h-[400px]"
                />
              </div>
              
             <div className="flex flex-col md:flex-row justify-around items-center gap-5 md:gap-0 p-5 md:p-0 md:items-baseline w-full mt-5">
                {/* Content */}
                <h2>
                  Tangelo
                </h2>
              
                <p className="text-gray-600 text-sm md:text-base max-w-xl">
                   {item.desc}
                   <a href="#" className="ml-2 underline hover:text-black">Read More</a>
                   </p>
                    
                    
              

                <Link href="#" className="bg-[#143B4A] text-white px-6 py-2 text-md font-medium hover:bg-gray-800 transition">
                    Enqire Now
                </Link>
             </div>
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}
