"use client";
import { MapPin, Calendar, User, Tag } from "lucide-react";

export default function BookingEngine() {
  return (
    <div className="w-full flex justify-center -mt-28 px-4 z-20 relative booking-engine-section">
      <div className="bg-white shadow-lg flex flex-wrap md:flex-nowrap items-center overflow-hidden">
        
        {/* Where */}
        <div className="flex-1 flex items-center gap-3 p-4 border-b md:border-b-0 md:border-r w-100">
          <MapPin className="text-gray-500" size={20} />
          <div className="flex flex-col leading-tight">
            <span className="text-sm text-gray-500">Where</span>
            <span className="text-[13px] font-medium">Destination or Hotel</span>
          </div>
        </div>

        {/* When */}
        <div className="flex-1 flex items-center gap-3 p-2 border-b md:border-b-0 md:border-r w-50">
          <Calendar className="text-gray-500" size={20} />
          <div className="flex flex-col leading-tight">
            <span className="text-sm text-gray-500">When</span>
            <span className="text-[13px] font-medium">Check-in — Check-out</span>
          </div>
        </div>

        {/* Who */}
        <div className="flex-1 flex items-center gap-3 p-4 border-b md:border-b-0 md:border-r w-25">
          <User className="text-gray-500" size={20} />
          <div className="flex flex-col leading-tight">
            <span className="text-sm text-gray-500">Who</span>
            <span className="text-[13px] font-medium">2 adults · 1 room</span>
          </div>
        </div>

        {/* Promotion */}
        <div className="flex-1 flex items-center gap-3 p-4 w-22">
          <Tag className="text-gray-500" size={20} />
          <div className="flex flex-col leading-tight">
            <span className="text-[13px] text-gray-500">Promotion</span>
            <span className="text-[13px] font-medium">BF2025</span>
          </div>
        </div>

        {/* Search Button */}
        <button className="bg-[#006b00] text-white px-6 py-6 text-sm md:text-sm font-medium hover:bg-gray-900 whitespace-nowrap w-full md:w-auto mr-1.5 mt-1.5 mb-1.5">
          Search
        </button>
      </div>
    </div>
  );
}
