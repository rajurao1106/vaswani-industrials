"use client";

import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import bgImg from "@/public/homepage/Web-slider-factory1 - Copy.jpg";

export default function ContactCTA() {
  return (
    <section className="relative bg-gray-100 overflow-hidden">
      
      {/* Optional Background Image */}
      {/* 
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImg}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      */}

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
        
        {/* Info Strip */}
        <div className="bg-white/95 text-gray-900 rounded-xl shadow-lg px-6 md:px-8 py-8 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 md:divide-x divide-gray-200">
          
          {/* Head Office */}
          <div className="flex gap-3 md:gap-4 md:pr-6">
            <MapPin className="text-[#43bfb1] mt-1 shrink-0" size={22} />
            <div>
              <h4 className="font-semibold text-base md:text-lg mb-2 uppercase">
                Head Office
              </h4>
              <p className="text-sm leading-relaxed text-gray-700">
                Vaswani Industries Limited, Sondra,
                <br />
                Phase – II, Bahesar Road, Siltara,
                <br />
                Raipur, CG
              </p>
            </div>
          </div>

          {/* Call Us */}
          <div className="flex gap-3 md:gap-4 md:px-6">
            <Phone className="text-[#43bfb1] mt-1 shrink-0" size={22} />
            <div>
              <h4 className="font-semibold text-base md:text-lg mb-2 uppercase">
                Call Us
              </h4>
              <p className="text-sm text-gray-700">
                HR:{" "}
                <a href="tel:07713540221" className="hover:text-[#43bfb1]">
                  0771-354-0221
                </a>
              </p>
              <p className="text-sm text-gray-700">
                ADMIN:{" "}
                <a href="tel:07713540202" className="hover:text-[#43bfb1]">
                  0771-354-0202
                </a>
              </p>
            </div>
          </div>

          {/* Email Us */}
          <div className="flex gap-3 md:gap-4 md:pl-6">
            <Mail className="text-[#43bfb1] mt-1 shrink-0" size={22} />
            <div>
              <h4 className="font-semibold text-base md:text-lg mb-2 uppercase">
                Email Us
              </h4>
              <p className="text-sm text-gray-700">
                <a
                  href="mailto:hrd@vaswaniindustries.com"
                  className="hover:text-[#43bfb1]"
                >
                  hrd@vaswaniindustries.com
                </a>
              </p>
              <p className="text-sm text-gray-700">
                <a
                  href="mailto:saurabh@vaswaniindustries.com"
                  className="hover:text-[#43bfb1]"
                >
                  saurabh@vaswaniindustries.com
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}