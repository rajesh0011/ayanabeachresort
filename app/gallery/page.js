"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import { X } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";

const images = [
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
    "/img/g13.webp",
    "/img/g14.webp",
    "/img/g15.webp",
    "/img/g16.webp",
    "/img/g17.webp",
    "/img/g18.webp",
    "/img/g19.webp",
    "/img/g20.webp",
    "/img/g21.webp",
    "/img/g22.webp",
    "/img/g23.webp",
    "/img/g24.webp",
    "/img/g25.webp",
    "/img/g26.webp",
    "/img/g27.webp",
    "/img/g28.webp",
    "/img/g29.webp",
    "/img/g30.webp",
    "/img/g31.webp",
    "/img/g32.webp",
];

export default function GallerySection() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openViewer = (index) => {
    setActiveIndex(index);
    setOpen(true);
  };

  return (

    <>
        <Navbar />
        <HeroSlider
                        image="/img/gallery-banner.webp"
                        subtitle=""
                        title="Gallery"
                        buttonText="Book Now"
                      />
            <section className="bg-[#f6f2ec] py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center max-w-4xl mx-auto mb-14"
                >
                <h2 className="text-4xl font-cormorant font-bold text-[#1b3a4b] mb-4">
                    View Our Gallery
                </h2>
                <p className="italic text-lg text-gray-600">
                    A picture is worth a thousand words and this gallery of photographs
                    will surely give you a good feel for what we offer at our exclusive
                    hotels and resorts.
                </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {images.map((src, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative aspect-[4/3] overflow-hidden cursor-pointer group"
                    onClick={() => openViewer(index)}
                    >
                    <Image
                        src={src}
                        alt="Gallery"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                    </motion.div>
                ))}
                </div>
            </div>

            {/* ✅ ZOOM + SLIDE MODAL */}
            {open && (
                <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center">
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-6 right-6 bg-white p-2 z-10"
                >
                    <X size={22} />
                </button>

                <Swiper
                    modules={[Navigation, Pagination, Keyboard]}
                    navigation
                    pagination={{ clickable: true }}
                    keyboard={{ enabled: true }}
                    initialSlide={activeIndex}
                    className="w-full max-w-6xl h-[85vh]"
                >
                    {images.map((src, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative w-full h-full">
                        <Image
                            src={src}
                            alt="Zoomed"
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
        <Footer />
    </>

  );
}
