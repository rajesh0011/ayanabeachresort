"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Menu, X } from "lucide-react";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 80); // active after 80px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-160"
          onClick={() => setOpen(false)}
        >
           <X className="absolute top-5 right-5 text-white" />
          </div>
      )} 

      {/* Sidebar Menu */}
       <aside
        className={clsx(
          "fixed top-0 left-0 h-full w-64 bg-black shadow-xl z-200 p-5 transform transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >

        <div className="flex flex-col items-center gap-4">
          <Image
            src="/logo-new.png"
            alt="Logo"
            width={80}
            height={45}
            className="cursor-pointer"
          />
        </div>
         <ul className="space-y-5 text-white text-center mt-10">
          <li><Link href="/">Overview</Link></li>
          <li><Link href="/accommodation">Rooms</Link></li>
          <li><Link href="/restaurant">Dining</Link></li>
          {/* <li><Link href="/events">Events</Link></li> */}
          <li><Link href="/offers">Offers</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/places-to-visit">Sightseeing</Link></li>
          <li><Link href="/contact-us">Contact Us</Link></li>
        </ul>
      </aside>

      {/* Navbar */}
      <div
        className={clsx(
          "fixed top-0 left-0 w-full z-100 px-5 transition-all duration-300",
          scroll ? "bg-[#18394a] shadow-lg py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          
          {/* Left Section */}
          <div className="flex items-center gap-4">
             <button
              onClick={() => setOpen(true)}
              className={clsx(
                " p-3 transition block md:hidden",
                scroll
                  ? " text-white"
                  : " text-white"
              )}
            >
              <Menu size={18} />
            </button> 

            <Link
              href="/"
              className={clsx(
                "flex items-center gap-2 px-4 py-2 transition",
                scroll
                  ? "text-white"
                  : " text-white"
              )}
            >
              <span className="hidden text-[18px] sm:block">
                Overview
              </span>
            </Link>

             <Link
              href="/accommodation"
              className={clsx(
                "flex items-center gap-2 px-4 py-2 transition",
                scroll
                  ? " text-white"
                  : " text-white"
              )}
            >
              <span className="hidden text-[18px] sm:block">
                Rooms
              </span>
            </Link>

             <Link
              href="/restaurant"
              className={clsx(
                "flex items-center gap-2 px-4 py-2 transition",
                scroll
                  ? " text-white"
                  : " text-white"
              )}
            >
              <span className="hidden text-[18px] sm:block">
                Dining
              </span>
            </Link>

                        {/* <Link
              href="events"
              className={clsx(
                "flex items-center gap-2 px-4 py-2 transition",
                scroll
                  ? " text-white"
                  : " text-white"
              )}
            >
              <span className="hidden text-[18px] sm:block">Events</span>
            </Link> */}

          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2">
          <Link href="/">
            <Image
              src="/logo-new.png"
              alt="Logo"
              width={80}
              height={60}
              className={`object-contain transition-all duration-300 ${clsx(
                
                scroll
                  ? "w-50 -mt-4 hidden"
                  : ""
              )}`}
            />

            <Image
              src="/logo-new.png"
              alt="Logo"
              width={55}
              height={55}
              className={`object-contain transition-all duration-300 ${clsx(
                
                scroll
                  ? "mt-1"
                  : "hidden"
              )}`}
            />
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">            
             <Link
              href="/offers"
              className={clsx(
                "flex items-center gap-2 px-4 py-2 transition",
                scroll
                  ? "text-white"
                  : " text-white"
              )}
            >
              <span className="hidden text-[18px] sm:block">Offers</span>
            </Link>

            <Link
              href="/gallery"
              className={clsx(
                "flex items-center gap-2 px-4 py-2 transition",
                scroll
                  ? "text-white"
                  : " text-white"
              )}
            >
              <span className="hidden text-[18px] sm:block">Gallery</span>
            </Link>
            <Link
              href="/places-to-visit"
              className={clsx(
                "flex items-center gap-2 px-4 py-2 transition",
                scroll
                  ? "text-white"
                  : " text-white"
              )}
            >
              <span className="hidden text-[18px] sm:block">Sightseeing</span>
            </Link>


            <Link
              href="/contact-us"
              className={clsx(
                "flex items-center gap-2  px-4 py-2 transition",
                scroll
                  ? " text-white"
                  : " text-white"
              )}
            >
              <span className="hidden text-[18px] sm:block">Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
