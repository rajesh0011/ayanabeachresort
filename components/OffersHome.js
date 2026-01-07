"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const offers = [
  {
    id: 1,
    image: "/img/off-1.webp",
    badgeTop: "BEST",
    badgeMid: "GUARANTEED",
    badgeBottom: "RATE",
    subtitle: "Website Exclusive Deal",
    link: "#",
  },
  {
    id: 2,
    image: "/img/off-2.webp",
    badgeTop: "SPECIAL",
    badgeMid: "MONSOON",
    badgeBottom: "OFFER",
    subtitle: "Limited Period Deal",
    link: "#",
  },
  {
    id: 3,
    image: "/img/off-3.webp",
    badgeTop: "LONG",
    badgeMid: "STAY",
    badgeBottom: "DEAL",
    subtitle: "Save More on Longer Stays",
    link: "#",
  },
];

export default function OffersSlider() {
  return (
    <section className="py-20 bg-white">
          <div className="text-center max-w-4xl mx-auto px-6 mb-4">
            <h2 className="text-4xl md:text-4xl font-cormorant font-bold text-[#1b3a4b] mb-4">
              Our Offers
            </h2>
            <p className="text-lg text-[#3d3d3d] leading-relaxed mb-6 font-cormorant">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>
          </div>

      <div className="container mx-auto px-4">

        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 4000 }}
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {offers.map((offer) => (
            <SwiperSlide key={offer.id}>
              <div className="flex flex-col items-center text-center">

                {/* Offer Card */}
                <div className="relative w-full overflow-hidden shadow-lg group">

                  {/* Image */}
                  <Image
                    src={offer.image}
                    alt="Offer"
                    width={400}
                    height={300}
                    className="w-full h-80 object-cover"
                  />
                </div>

                {/* Text below card */}
                <p className="mt-6 italic text-gray-700 font-serif text-lg">
                  “{offer.subtitle}”
                </p>

                {/* CTA */}
                <a
                  href={offer.link}
                  className="bg-[#143B4A] text-white px-6 py-2 mt-6 text-md font-medium hover:bg-gray-800 transition"
                >
                  Book Now
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
