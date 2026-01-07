"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    message:
      "A serene paradise by the ocean! The rooms are spacious and offer breathtaking sea views. The ambiance is tranquil and relaxing, perfect for a beachside getaway. The food was exceptional, and the staff was friendly and attentive. Highly recommend for anyone looking for a peaceful retreat by the beach in Gokarna, Karnataka.",
    name: "Nik",
  },
  {
    id: 2,
    message:
      "This resort exceeded all my expectations! From the crystal-clear waters to the impeccable service, everything was perfect. The beach is pristine, and the poolside vibes are unbeatable. The kids had a blast, and the resort offers great family-friendly activities. A must-visit for anyone looking to unwind and rejuvenate in Gokarna, Karnataka.",
    name: "Saurabh Gupta",
  },
  {
    id: 3,
    message:
      "This was my second visit to Ayana Beach Resort, and it was even better than the first. Our group of 8 had an amazing time, with four ocean-view rooms that were absolutely stunning. The food was delicious, and the staff went out of their way to make us feel at home. The beach activities and the spa treatments were highlights of the trip. Gokarna is truly a hidden gem in Karnataka.",
    name: "Bhavan K.",
  },
  {
    id: 4,
    message:
      "I didn't expect much from a beach resort, but Ayana has completely changed my perspective! The location is ideal, with the perfect blend of nature and luxury. The staff is incredibly helpful and made our stay unforgettable. The beach suites were immaculate, and the overall experience was nothing short of amazing. Definitely coming back to Gokarna, Karnataka!",
    name: "Akshay C.",
  }
];


export default function TestimonialsSlider() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-4xl font-cormorant font-bold text-[#1b3a4b] mb-4">
            Guest Testimonial
          </h2>

          <p className="mt-2 text-xl italic text-gray-600 font-serif">
            Find out what other travelers and guests have to say about their
            experiences at Ayana Beach Resort
          </p>
        </motion.div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          speed={800}
          slidesPerView={1}
          className="max-w-5xl mx-auto"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#F8F5F0] px-10 py-14 h-[450px] md:h-75 md:px-20 md:py-16 text-center shadow-sm">
                
                {/* Quote */}
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-serif">
                  “{item.message}”
                </p>

                {/* Author */}
                <h4 className="mt-10 text-2xl font-serif text-[#143B4A]">
                  {item.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination color tweak */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #143B4A;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
