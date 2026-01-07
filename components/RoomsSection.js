"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Ruler, Users, Bed, X } from "lucide-react";
import { Coffee, Bath, Wind, Monitor, Phone, Wifi, BedDouble } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function RoomsSection() {
 const rooms = [
  {
    id: 1,
    title: "Standard Suite",
    desc: "Step into a world of colonial charm and tranquillity with our spacious Standard Suite. Fully furnished with modern amenities for comfort and elegance.",
    size: "49 sq m",
    guests: "Up to 3 guests",
    bed: "King",
    images: [
      "/rooms/img1-1.jpg",
      "/rooms/img1-1.jpg",
    ],
  },
  {
    id: 2,
    title: "Deluxe Suite",
    desc: "Designed for refined comfort and privacy in lush surroundings. A premium choice for families and couples seeking luxury stays.",
    size: "60 sq m",
    guests: "Up to 4 guests",
    bed: "King / Twin",
    images: [
      "/rooms/img1-2.jpg",
      "/rooms/img1-2.jpg",
    ],
  },
];

  const [openModal, setOpenModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleOpenModal = (room) => {
    setSelectedRoom(room);
    setOpenModal(true);
  };

  return (
    <section id="accommodations" className="py-20 bg-white">
      
      {/* Header */}
      <div className="max-w-[900px] mx-auto text-center px-6 mb-12">
        <h2 className="text-xl md:text-2xl font-gotham font-bold text-[#1D2939] mb-3">
          Stay
        </h2>
        <p className="text-gray-600">
          Lorem Ipsum is simply dummy text of the printing industry.
        </p>
      </div>

      {/* Room Cards */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white shadow-lg overflow-hidden">
            <div className="relative w-full h-[260px]">
              <Image src={room.images[0]} alt={room.title} fill className="object-cover" />
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-[20px] font-semibold uppercase">{room.title}</h3>

              <p className="text-gray-600 text-sm">{room.desc.slice(0, 70)}...</p>

              <div className="flex flex-wrap gap-6 text-gray-600 text-sm font-medium mt-4">
                <span className="flex items-center gap-2"><Ruler size={18} />{room.size}</span>
                <span className="flex items-center gap-2"><Users size={18} />{room.guests}</span>
                <span className="flex items-center gap-2"><Bed size={18} />{room.bed}</span>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 mt-6">
                <button
                  onClick={() => handleOpenModal(room)}
                  className="px-5 py-2 text-sm border border-[#006b00] text-[#006b00] font-medium hover:bg-[#e4f5e3]">
                  Explore More
                </button>
                <button className="bg-[#143B4A] text-white px-6 py-2 text-md font-medium hover:bg-gray-800 transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

        {/* Modal Popup */}
        {openModal && selectedRoom && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] flex justify-center items-center z-50 px-4">
            <div className="bg-white shadow-xl max-w-xl w-full overflow-hidden relative">
            
            {/* Close Button */}
            <button
                onClick={() => setOpenModal(false)}
                className="absolute right-3 top-3 p-1 z-50 bg-black/30 hover:bg-black/50"
            >
                <X size={22} color="white" />
            </button>

            {/* Slider */}
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="w-full h-64"
            >
                {selectedRoom.images.map((img, i) => (
                <SwiperSlide key={i}>
                    <div className="relative w-full h-80">
                    <Image src={img} alt={selectedRoom.title} fill className="object-cover" />
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>

            {/* Modal Content */}
            <div className="p-4 space-y-4">
                <h3 className="text-xl font-bold uppercase mb-2">{selectedRoom.title}</h3>
                <p className="text-gray-600 text-sm">{selectedRoom.desc}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-6 text-gray-700 text-sm">
                <span className="flex items-center gap-1"><Ruler size={18} />{selectedRoom.size}</span>
                <span className="flex items-center gap-1"><Users size={18} />{selectedRoom.guests}</span>
                <span className="flex items-center gap-1"><Bed size={18} />{selectedRoom.bed}</span>
                </div>

                {/* Amenities */}
                    <div>
                    <h4 className="text-[15px] font-semibold text-gray-800 mb-3">
                        Amenities
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm">
                        
                        <span className="flex items-center gap-2">
                        <Coffee size={18} className="text-[#006b00]" />
                        Minibar & Coffee/Tea Maker
                        </span>

                        <span className="flex items-center gap-2">
                        <Bath size={18} className="text-[#006b00]" />
                        Bathroom with Premium Toiletries
                        </span>

                        <span className="flex items-center gap-2">
                        <Wind size={18} className="text-[#006b00]" />
                        Hair Dryer
                        </span>

                        <span className="flex items-center gap-2">
                        <Monitor size={18} className="text-[#006b00]" />
                        Smart TV
                        </span>

                        <span className="flex items-center gap-2">
                        <Phone size={18} className="text-[#006b00]" />
                        Direct Dial Telephone
                        </span>

                        <span className="flex items-center gap-2">
                        <Wifi size={18} className="text-[#006b00]" />
                        High-speed WiFi
                        </span>

                        <span className="flex items-center gap-2">
                        <Wind size={18} className="text-[#006b00]" />
                        Air Conditioning
                        </span>

                        <span className="flex items-center gap-2">
                        <BedDouble size={18} className="text-[#006b00]" />
                        Luxurious Bedding and Linens
                        </span>

                    </div>
                    </div>
            </div>

            </div>
        </div>
        )}

    </section>
  );
}
