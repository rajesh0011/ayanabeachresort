"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";

import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";

const restaurants = [
  {
    id: 1,
    title: "Maha Ganpati Temple",
    description:
      "Located close to Ayana Beach Resort, the Maha Ganpati Temple is a peaceful spot often visited by guests seeking quiet moments and blessings. The temple is easily accessible and makes for a calm visit during your stay. Its simple surroundings and spiritual atmosphere offer a pleasant break from beach activities and sightseeing.",
    image: "/img/e-ganpati-temple.jpg",
    direction: "left",
  },
  {
    id: 2,
    title: "Main Beach",
    description:
      "Just a short walk from the resort, the Main Beach is perfect for relaxed walks, enjoying sea views, and watching the sunset. Guests can spend easy mornings by the shore or unwind in the evening with the sound of the waves nearby.",
    image: "/img/e-gokarna-beach.jpg",
    direction: "right",
  },
  {
    id: 3,
    title: "Kudle Beach",
    description:
      "Located around 20 minutes from the resort, Kudle Beach is known for its calm setting and wide shoreline. It is a good spot for quiet beach time, light walks, and enjoying the natural coastal surroundings away from crowds.",
    image: "/img/e-kuldle-beach.jpg",
    direction: "left",
  },
  {
    id: 4,
    title: "Yana Caves",
    description:
      "About 45 km from Ayana Beach Resort, the Yana Caves offer a scenic day trip for guests who enjoy nature and exploration. Surrounded by greenery and rock formations, the area provides a refreshing change of pace during your stay.",
    image: "/img/e-yana-caves.webp",
    direction: "right",
  },
];

export default function Restaurants() {
   const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar />
       <HeroSlider
                      image="/img/sightseeing-banner.jpg"
                      subtitle=""
                      title="Places To Visit"
                      buttonText="Book Now"
                    />
          <section className="bg-[#f6f2ec] py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl font-cormorant font-bold text-[#1b3a4b] mb-4">
              Places To Visit
            </h2>
            {/* <p className="text-gray-700">
              The Ayana Beach Resort excels in great food with curated culinary options.
            </p> */}
          </div>

          {/* Blocks */}
          <div className="space-y-20">
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
                    transition={{ duration: 1 }}
                    className="relative w-full lg:w-2/3 h-[420px]"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? 120 : -120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className={`bg-white p-10 shadow-lg max-w-xl w-full 
                      lg:absolute ${isLeft ? "lg:right-0" : "lg:left-0"}`}
                  >
                    <h3 className="text-2xl font-cormorant font-bold mb-4 text-[#1b3a4b]">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{item.description}</p>
                    {/* <button
                      onClick={() => setOpen(true)}
                      className="bg-[#143B4A] text-white px-6 py-3 hover:bg-[#0f2f3b]"
                    >
                      Reserve a Table
                    </button> */}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
      <Footer />
    </>
   
  );
}
