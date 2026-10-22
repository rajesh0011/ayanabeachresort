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

const images = Array.from({ length: 14 }, (_, i) => `/img/g${i + 1}.webp`);

const GalleryHome = () => {

      const [open, setOpen] = useState(false);
      const [startIndex, setStartIndex] = useState(0);
    
      const openSlider = (index) => {
        setStartIndex(index);
        setOpen(true);
      };

  return (
    <>
     <div className="text-center max-w-3xl mx-auto px-4 mb-12 mt-10">
        <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4">
          Gallery
        </h2>
        <p className="text-gray-600 text-lg">
          Lorem Ipsum is simply dummy text of the printing industry.
        </p>
      </div>
      <section>
          <div className="gallery-container">

            {images.map((src, index) => (
              <div className="gallery-item" key={index} onClick={() => openSlider(index)}>
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="gallery-image"
                />
              </div>
            ))}
          </div>
        </section>

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
            {images.map((src, index) => (
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

    <style jsx>{`
    
    .gallery-container {
  column-count: 4;
  column-gap: 16px;
  padding: 16px;
}

.gallery-item {
  break-inside: avoid;
  margin-bottom: 16px;
  border-radius: 14px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.18);
}

.gallery-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 1200px) {
  .gallery-container {
    column-count: 3;
  }
}

@media (max-width: 768px) {
  .gallery-container {
    column-count: 2;
  }
}

@media (max-width: 480px) {
  .gallery-container {
    column-count: 1;
  }
}

    `
}

</style>
    </>
  );
};

export default GalleryHome;
