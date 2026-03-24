import Image from "next/image";
import React from "react";
import director from "@/public/about/team-17.jpg";
import { Linkedin, Twitter, Facebook } from "lucide-react";

export default function Director() {
  const teamMembers = [
    {
      id: 1,
      name: "Mr. Yashwant Vaswani",
      role: "Whole Time Director",
      image: director,
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
    {
      id: 2,
      name: "Mr. Satya Narayan Gupta",
      role: "Non-Executive Director",
      image: director,
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
    {
      id: 3,
      name: "Mr. Rituraj Peswani",
      role: "Independent Director",
      image: director,
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
    {
      id: 4,
      name: "Ms. Supriya Goyal",
      role: "Additional Woman Director",
      image: director,
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
    {
      id: 5,
      name: "Mr. Chittaranjan Parida",
      role: "Non-Executive, Independent Director",
      image: director,
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
    {
      id: 6,
      name: "Mr. Pawan Kumar Jha",
      role: "Executive Director",
      image: director,
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  ];

  return (
    <div className="flex justify-center items-center py-12 px-4">
      <div className="max-w-7xl w-full">
        {/* Title & Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Meet Our Directors
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Our leadership team brings decades of experience and a shared vision
            for excellence and innovation.
          </p>
          {/* Decorative underline */}
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-red-500 rounded-full"></div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
          {teamMembers.map((item) => (
            <div key={item.id} className="flex flex-col items-center group">
              {/* Profile Image Container with Social Icons Overlay */}
              <div className="relative w-32 h-36 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={1000}
                  height={1000}
                  priority
                  className="object-cover w-full h-full"
                />

                {/* Social Icons Overlay - shown on hover */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>

                  <a
                    href={item.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-sky-400 transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>

                  <a
                    href={item.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-500 transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>

              {/* Text Details */}
              <div className="text-center p-2 relative">
                <div className="w-0 h-1 bg-red-500 absolute left-0 top-0 transition-all duration-300 group-hover:w-full"></div>
                <h3 className="font-bold text-lg text-gray-900 leading-tight">
                  {item.name}
                </h3>
                <p className="text-sm text-blue-600 font-medium mt-1">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
