"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { Ruler, Users, Bed, X } from "lucide-react";
import { Coffee, Bath, Wind, Monitor, Phone, Wifi, BedDouble } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const rooms = [
  {
    id: 1,
    title: "Deluxe Room",
    description:
      "The Deluxe Room offers a comfortable double bedroom designed for a relaxed stay near the beach. The room features a private balcony where guests can enjoy fresh air and peaceful moments. With essential in-room amenities and an attached bathroom with shower, this room is ideal for couples or solo travellers looking for a calm and convenient stay.",
    images: ["/img/r1.webp", "/img/r2.webp", "/img/r3.webp", "/img/r4.webp", "/img/r5.webp", "/img/r6.webp", "/img/r7.webp", "/img/r8.webp", "/img/r9.webp", "/img/r10.webp", "/img/r11.webp", "/img/r12.webp"],
  },
  
];


export default function RoomSlider() {
  const [expanded, setExpanded] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

    const handleOpenModal = (room) => {
    setSelectedRoom(room);
    setOpenModal(true);
  };


  return (

    <>
    
        <section className="py-12">
      <div className="container mx-auto px-5">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-4xl font-cormorant font-bold text-[#1b3a4b] mb-4">
           Plan Your Perfect Getaway
          </h2>
          <p className="text-gray-700 leading-relaxed">
          Enjoy a comfortable stay at Ayana Beach Resort with a range of well-kept rooms designed for a relaxed beachside experience. Guests can choose from Family Rooms with two double beds, Super Deluxe Rooms, Deluxe Rooms, and a Platinum Room, all featuring essential amenities and attached bathrooms. Each space is thoughtfully arranged to ensure a pleasant and easy stay near the beach.
          </p>
        </div>

        <div className="flex justify-center">
  <Swiper
    modules={[Pagination, Navigation]}
    slidesPerView={1}
    spaceBetween={30}
    navigation={false}
    className="pb-12 w-full max-w-[420px]"
  >

          {rooms.map((room, index) => (
          <SwiperSlide key={index} className="flex justify-center">
  <div className="bg-white shadow-md overflow-hidden max-w-[380px] w-full">

                
                {/* Inner Image Slider */}
                <div className="relative">
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    className="h-[260px]"
                  >
                    {room.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <div className="relative h-[260px] w-full">
                          <Image
                            src={img}
                            alt={room.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-semibold mb-3">
                    {room.title}
                  </h3>

                   <p
                    className={`text-gray-600 text-sm transition-all ${
                      expanded === index ? "line-clamp-none" : "line-clamp-2"
                    }`}
                  >
                    {room.description}
                  </p>

                  <button
                    onClick={() =>
                      setExpanded(expanded === index ? null : index)
                    }
                    className="text-[#18394a] text-sm font-medium hover:underline mt-2 mb-5 self-start"
                  >
                    {expanded === index ? "Read Less" : "Read More"}
                  </button>



                  {/* Buttons */}
                  <div className="flex gap-4">
                    <button  onClick={() => handleOpenModal(room)} className="border border-[#18394a] text-[#18394a] px-6 py-2 text-sm hover:bg-[#18394a] hover:text-white transition">
                      More info
                    </button>
                    <button className="bg-[#18394a] text-white px-6 py-2 text-sm hover:bg-[#18394a] transition">
                      Book Now
                    </button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
    </section>


    
      {/* Modal Popup */}
            {openModal && selectedRoom && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] flex justify-center items-center z-150 px-4">
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
                    className="w-full h-75"
                >
                    {selectedRoom.images.map((img, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative w-full h-100">
                        <Image src={img} alt={selectedRoom.title} height={500} width={800} className="object-cover" style={{objectPosition:"bottom"}} />
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
    </>

  );
}
