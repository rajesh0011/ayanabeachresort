"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const restaurants = [
  {
    id: 1,
    title: "Wedding",
    description:
      "Enter our magnificent banquet hall, where elegance meets celebration. Our spacious venue boasts luxurious decor, setting the stage for unforgettable events.",
    image: "/events/img1.jpg",
    direction: "left",
  }
];

export default function Restaurants() {
   const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar />
      <HeroSlider />
        <section className="bg-[#f6f2ec] py-24 overflow-auto">
          <div className="max-w-6xl mx-auto px-6">

            {/* Section Heading */}
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-4xl font-cormorant font-bold text-[#1b3a4b] mb-4">
                Destination Wedding in Gokarna
              </h2>
              <p className="text-gray-700 leading-relaxed">
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </p>
            </div>

            {/* Content Blocks */}
            <div className="space-y-40">
              {restaurants.map((item) => {
                const isLeft = item.direction === "left";

                return (
                  <div
                    key={item.id}
                    className={`relative flex flex-col ${
                      isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                    } items-center`}
                  >
                    {/* Image */}
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -120 : 120 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="relative w-full lg:w-2/3 h-[420px]"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? 120 : -120 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`bg-white p-10 shadow-lg max-w-xl w-full 
                        lg:absolute ${
                          isLeft ? "lg:right-0" : "lg:left-0"
                        }`}
                    >
                      <h3 className="text-2xl font-cormorant font-bold text-[#1b3a4b] mb-4">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-6">
                        {item.description}
                      </p>

                      <button onClick={() => setOpen(true)} className="bg-[#143B4A] text-white px-6 py-3 hover:bg-[#0f2f3b] transition">
                        Reserve a Table
                      </button>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>    
      <Footer />

       {/* ✅ POPUP MODAL */}
            {open && (
              <div className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center px-4">
                <div className="bg-white w-full max-w-lg relative max-h-[90vh]">
      
                  {/* Header */}
                  <div className="flex items-center justify-between border-b px-6 py-4">
                    <h3 className="text-xl font-semibold">Enquire Now</h3>
                    <button
                      onClick={() => setOpen(false)}
                      className="bg-[#143B4A] text-white p-2"
                    >
                      <X size={18} />
                    </button>
                  </div>
      
                  {/* Form */}
                  <form className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <input className="w-full border px-3 py-2 mt-1" placeholder="Name" />
                      </div>
                      <div>
                        <input className="w-full border px-3 py-2 mt-1" placeholder="Email Address" />
                      </div>
                      <div>
                        <input className="w-full border px-3 py-2 mt-1" placeholder="Phone No." />
                      </div>
                      <div>
                       <input className="w-full border px-3 py-2 mt-1" placeholder="No of Guests" />
                      </div>
                    </div>
      
                    <div>
                     <input type="date" className="w-full border px-3 py-2 mt-1" />
                    </div>
      
                    <div>
                      <textarea
                        rows="4"
                        className="w-full border px-3 py-2 mt-1"
                        placeholder="Message"
                      />
                    </div>
      
                    <button
                      type="submit"
                      className="w-full bg-[#143B4A] text-white py-3 font-semibold"
                    >
                      Submit
                    </button>
                  </form>
      
                </div>
              </div>
            )}
    </>
   
  );
}
