"use client";

import Image from "next/image";
import { useState } from "react";

export default function AboutSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-[#f6f3ed] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-3xl font-cormorant font-bold text-[#1b3a4b] mb-8">
            Welcome to Ayana Beach Resort
          </h2>

          <p className="text-lg text-[#3d3d3d] leading-relaxed mb-6 font-cormorant">
            Located near the iconic Maha Ganpati Temple and just a short stroll from the main beach, Ayana Beach Resort offers comfortable stays with easy access to one of Goa’s liveliest coastal stretches. Enjoy serene beach vibes, proximity to popular attractions and essential amenities designed for a refreshing holiday experience.
          </p>

          
        </div>

        {/* RIGHT IMAGES (Overlapping + Hover Effects) */}
        <div className="relative w-full flex flex-col items-center">

          {/* IMAGE 1 */}
          <div
            className={`relative left-16 -top-8 w-[70%] h-[420px] overflow-hidden transition-all duration-500 cursor-pointer
              ${hovered === 1 ? "z-20 -translate-y-3 shadow-xl" : "z-10 translate-y-0"}
            `}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
          >
            <Image
              src="/img/ab-1.webp"
              alt="Ayana Beach Resort"
              fill
              className="object-cover"
            />
          </div>

          {/* IMAGE 2 - Overlapping */}
          <div
            className={`relative w-[80%] h-[420px] overflow-hidden transition-all duration-500 cursor-pointer
              -mt-[75%]   /* overlap around 75% */
              ${hovered === 2 ? "z-20 translate-y-3 shadow-xl" : "z-0"}
            `}
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
          >
            <Image
               src="/img/ab-2.webp"
              alt="Ayana Beach Resort View"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
