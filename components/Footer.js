"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#143B4A]">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo-new.png" // replace with your logo path
            alt="bluepineresort"
            width={220}
            height={120}
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-12 text-lg font-serif mb-10">
          <Link href="/" className="hover:underline italic font-bold">Home</Link>
          <Link href="/" className="hover:underline italic font-bold">About Us</Link>
          <Link href="/" className="hover:underline italic font-bold">Contact Us</Link>
          <Link href="/" className="hover:underline italic font-bold">
            Terms & Conditions
          </Link>
        </nav>

        {/* Divider */}
        <hr className="border-t border-gray-800/70 mb-4" />

        {/* Address */}
        <p className="text-lg mb-2  font-bold">
          <strong>Address:</strong> Main Beach, Belehittal Rd, near Kariyappa Katte, Bijjur, Gokarna, Karnataka 581326
        </p>

        {/* Contact */}
        <p className="italic mb-2 font-bold">
          Booking Office : <span className="not-italic">76763 83658</span>
           <br />
          <a
            href="#"
            className="hover:underline"
          >
             ayanabeachresort@gmail.com
          </a>
        </p>

        {/* Social */}
        <div className="mb-4 font-serif text-xl">Follow us</div>

        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-[#143B4A] text-white hover:opacity-90"
          >
            <Facebook size={18} />
          </a>

          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-[#143B4A] text-white hover:opacity-90"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#143B4A] text-white">
        <div className="py-4 text-center text-sm font-serif gap-2">
          <p className="text-center">
            Copyright © 2026 All Rights Reserved.
            Powered by CIN Universe.
          </p>

          {/* <Link href="/" className="hover:underline">
            Blog
          </Link> */}
        </div>
      </div>
    </footer>
  );
}
