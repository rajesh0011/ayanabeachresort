"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import { motion } from "framer-motion";

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const gallery = [
  { img: "/gallery/img1.jpg" },
  { img: "/gallery/img2.jpg" },
  { img: "/gallery/img3.jpg" },
  { img: "/gallery/img4.jpg" },
  { img: "/gallery/img5.jpg" },
  { img: "/gallery/img6.jpg" },
  { img: "/gallery/img7.jpg" },
  { img: "/gallery/img8.jpg" },
  { img: "/gallery/img9.jpg" },
  { img: "/gallery/img10.jpg" },
  { img: "/gallery/img11.jpg" },
  { img: "/gallery/img12.jpg" },
  { img: "/gallery/img13.jpg" },
  { img: "/gallery/img14.jpg" },
];

export default function GalleryTwoRowSwiper() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full py-10 px-4 overflow-hidden">

        <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            >
            <h2 className="text-4xl md:text-4xl font-light text-gray-900">
                Gallery
            </h2>

            <p className="mt-6 text-md text-gray-600 mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>
        </motion.div>


      <Swiper
        modules={[Autoplay, Grid]}
        grid={{ rows: 2, fill: "row" }}
        spaceBetween={20}
        autoplay={{ delay: 2500 }}
        loop={true}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1, grid: { rows: 2 } },
          640: { slidesPerView: 2, grid: { rows: 2 } },
          1024: { slidesPerView: 4, grid: { rows: 2 } },
        }}
      >
        {gallery.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative w-full h-56 overflow-hidden cursor-pointer"
              onClick={() => {
                setActiveIndex(idx);
                setOpen(true);
              }}
            >
              <Image
                src={item.img}
                width={300}
                height={250}
                alt="Gallery"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fullscreen Image Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={activeIndex}
        slides={gallery.map((item) => ({ src: item.img }))}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 2 }}
      />
    </div>
  );
}
