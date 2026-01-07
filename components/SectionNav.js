"use client";
import { useState, useEffect } from "react";

const menuItems = [
  { label: "Overview", id: "overview" },
  { label: "Accommodations", id: "accommodations" },
  { label: "Facilities", id: "facilities" },
  { label: "Restaurants", id: "restaurants" },
  { label: "Activities & Destination", id: "activities" },
  { label: "Offers", id: "offers" },
  { label: "Reviews", id: "reviews" },
  { label: "Contacts", id: "contacts" },
];

export default function SectionNav() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-[#e6e2dc] py-6 border-y border-gray-300 top-16 z-30">
      <ul className="flex flex-wrap justify-center gap-10 text-gray-600 font-medium text-[15px]">
        {menuItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`hover:text-black transition ${
                active === item.id ? "text-[#006b00] font-semibold" : ""
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
