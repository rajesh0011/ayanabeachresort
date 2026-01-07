"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Keyboard,
  Autoplay,
  Grid,
} from "swiper/modules";
import { X } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

export default function Gallery() {
  const galleryImages = [
    "/img/g1.webp",
    "/img/g2.webp",
    "/img/g3.webp",
    "/img/g4.webp",
    "/img/g5.webp",
    "/img/g6.webp",
    "/img/g7.webp",
    "/img/g8.webp",
    "/img/g9.webp",
    "/img/g10.webp",
    "/img/g11.webp",
    "/img/g12.webp",
    
  ];

  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openSlider = (index) => {
    setStartIndex(index);
    setOpen(true);
  };

  return (
    <section id="gallery" className="py-0 bg-white">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto px-4 mb-12">
        <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4">
          Gallery
        </h2>
        <p className="text-gray-600 text-lg">
          Lorem Ipsum is simply dummy text of the printing industry.
        </p>
      </div>

      {/* ✅ 2-ROW SLIDING THUMBNAILS */}
      <div className="max-w-[1400px] mx-auto px-6">
        <Swiper
          modules={[Autoplay, Grid]}
          spaceBetween={24}
          slidesPerView={4}
          grid={{
            rows: 2,
            fill: "row",
          }}
          grabCursor
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              grid: { rows: 2 },
            },
            640: {
              slidesPerView: 2,
              grid: { rows: 2 },
            },
            1024: {
              slidesPerView: 4,
              grid: { rows: 2 },
            },
          }}
        >
          {galleryImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-[240px] overflow-hidden cursor-pointer"
                onClick={() => openSlider(index)}
              >
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ FULLSCREEN ZOOM SLIDER */}
      {open && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex items-center justify-center">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 bg-white text-black p-2 shadow"
          >
            <X size={26} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Keyboard]}
            navigation
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            initialSlide={startIndex}
            loop
            className="w-full max-w-5xl h-[80vh]"
          >
            {galleryImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Zoomed ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
}
