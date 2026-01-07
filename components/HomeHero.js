"use client";
import Image from 'next/image'
export default function HomeHero() {
  return (
    <div className="relative w-full h-screen">
        <div className="w-full h-full relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image alt="home" width={1920} height={500} src="/img/main-banner.webp" className='w-full h-full object-cover' />
          </div>
          <div className="absolute inset-0 bg-black/45"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
            <p className="uppercase tracking-[0.4em] text-sm mb-3">
            </p>
            <h1 className="hero-text">
              EXPLORE <br />
              <i>the</i>  UNSEEN
            </h1>
            <button className="bg-[#143B4A] text-white px-6 py-2 text-md font-medium hover:bg-gray-800 transition">
              Book Now
            </button>
          </div>
        </div>
    </div>
  );
}
