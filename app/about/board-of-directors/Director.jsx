"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Linkedin, Twitter, Facebook, Loader2 } from "lucide-react";
import directorPlaceholder from "@/public/about/team-17.jpg";

export default function Director() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  const brandColor = "#43bfb1";

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("https://vil-cms-dhct.vercel.app/api/board-members");
        const data = await response.json();
        // Assuming the API returns an array directly based on your input
        // Sort by 'order' if available
        const sortedData = data.sort((a, b) => a.order - b.order);
        setMembers(sortedData);
      } catch (error) {
        console.error("Error fetching board members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="animate-spin text-[#43bfb1]" size={32} />
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Meet Our Directors
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Our leadership team brings decades of experience and a shared vision
            for excellence and innovation.
          </p>
          <div className="mt-5 flex justify-center">
            <div 
              className="w-20 h-1.5 rounded-full" 
              style={{ backgroundColor: brandColor }}
            ></div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {members.map((item) => (
            <div key={item._id} className="group flex flex-col items-center">
              
              {/* Image Container */}
              <div className="relative w-full max-w-[280px] aspect-[4/5] overflow-hidden rounded-xl shadow-md transition-transform duration-500 group-hover:-translate-y-2 bg-gray-200">
                <Image
                  src={item.profileImageUrl || directorPlaceholder}
                  alt={item.fullName}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Social Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                  <a href="#" className="p-2 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform" style={{ color: brandColor }} aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="p-2 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform" style={{ color: brandColor }} aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="p-2 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform" style={{ color: brandColor }} aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>

              {/* Info Details */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#43bfb1] transition-colors duration-300">
                  {item.fullName}
                </h3>
                <p 
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: brandColor }}
                >
                  {item.designation}
                </p>
                {/* Subtle bottom border that grows on hover */}
                <div className="flex justify-center mt-3">
                    <div className="w-0 h-0.5 transition-all duration-300 group-hover:w-12" style={{ backgroundColor: brandColor }}></div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}