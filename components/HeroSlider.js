"use client";
import Image from "next/image";

export default function HeroSlider({
  image = "/img/main-banner.webp",
  title,
  subtitle,
  buttonText,
}) {
  return (
    <div className="relative w-full h-screen">
      <div className="w-full h-full relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            alt="hero"
            src={image}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          {subtitle && (
            <p className="uppercase tracking-[0.4em] text-sm mb-3">
              {subtitle}
            </p>
          )}

          {title && (
            <h1 className="hero-text">
              {title}
            </h1>
          )}

          {buttonText && (
            <button className="bg-[#143B4A] text-white px-6 py-2 text-md font-medium hover:bg-gray-800 transition mt-4">
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
