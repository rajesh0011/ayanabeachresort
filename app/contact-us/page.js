"use client";

import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <>
        <Navbar />
       <HeroSlider
  image="/img/contact_us_hero_banner.png"
  subtitle=""
  title="Contact Us"
  buttonText="Book Now"
/>

            <section className="bg-[#f6f2ec] py-24 overflow-auto">
            <div className="max-w-7xl mx-auto px-10 md:px-24">

                {/* ===== Heading ===== */}
                <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto mb-20"
                >
                <h2 className="text-4xl font-cormorant font-bold text-[#1b3a4b] mb-3">
                    Contact Us
                </h2>
                <p className="text-xl font-cormorant font-semibold text-[#1b3a4b]">
                    Contact information for Ayana Beach Resort
                </p>
                <p className="text-gray-600 mt-3">
                    Please find below our contact information for your reference.
                </p>
                </motion.div>

                {/* ===== Top Info Blocks ===== */}
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-20"
                >
                {/* Address */}
                <div>
                    <div className="mx-auto w-14 h-14 flex items-center justify-center bg-[#e6804c] text-white mb-6">
                    <MapPin />
                    </div>
                    <h4 className="font-cormorant text-xl font-semibold mb-2">
                    Address
                    </h4>
                    <p className="text-gray-600 font-bold leading-relaxed">
                    Main Beach, Belehittal Rd, near Kariyappa Katte, Bijjur, Gokarna, Karnataka 581326
                    </p>
                </div>

                {/* Phone */}
                <div>
                    <div className="mx-auto w-14 h-14 flex items-center justify-center bg-[#e6804c] text-white mb-6">
                    <Phone />
                    </div>
                    <h4 className="font-cormorant text-xl font-semibold mb-2">
                        Sales Office 
                    </h4>
                     <p className="text-[#e6804c] leading-loose  font-bold">
                       76763 83658
                     </p>

                   
                </div>

                {/* Email */}
                <div>
                    <div className="mx-auto w-14 h-14 flex items-center justify-center bg-[#e6804c] text-white mb-6">
                    <Mail />
                    </div>
                    <h4 className="font-cormorant text-xl font-semibold mb-2">
                    Email Address
                    </h4>
                    <p className="text-[#e6804c]  font-bold">
                    ayanabeachresort@gmail.com
                    </p>
                </div>
                </motion.div>

                {/* Divider */}
                <hr className="border-t border-gray-300/60 mb-20" />

                {/* ===== Form + Location ===== */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-cormorant font-bold mb-8">
                    Contact us
                    </h3>

                    <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                        type="text"
                        placeholder="Name"
                        className="w-full border border-gray-400 bg-transparent px-4 py-3 outline-none"
                        />
                        <input
                        type="email"
                        placeholder="Email"
                        className="w-full border border-gray-400 bg-transparent px-4 py-3 outline-none"
                        />
                        <input
                        type="text"
                        placeholder="Phone"
                        className="w-full border border-gray-400 bg-transparent px-4 py-3 outline-none"
                        />
                        <input
                        type="text"
                        placeholder="Subject"
                        className="w-full border border-gray-400 bg-transparent px-4 py-3 outline-none"
                        />
                    </div>

                    <textarea
                        rows="6"
                        placeholder="Comment"
                        className="w-full border border-gray-400 bg-transparent px-4 py-3 outline-none"
                    />

                    <button
                        type="submit"
                        className="bg-[#143B4A] text-white px-10 py-3 hover:bg-[#0f2f3b] transition"
                    >
                        Submit
                    </button>
                    </form>
                </motion.div>

                {/* Location */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-cormorant font-bold mb-8">
                    Location
                    </h3>

                    {/* Map Placeholder */}
                    <div className="w-full h-[300px] sm:h-[400px] md:h-[350px] overflow-hidden">
                        <iframe
                            title="Google Map"
                            className="w-full h-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15447.878118183393!2d74.2956043554199!3d14.543735199999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe83d61cc8edb7%3A0x909513ca502e1759!2sGokarna%20Main%20Beach!5e0!3m2!1sen!2sin!4v1767768065228!5m2!1sen!2sin"
                        />
                        </div>
                </motion.div>

                </div>
            </div>
            </section>
        <Footer />
    </>
  
  );
}
