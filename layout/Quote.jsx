"use client";

import Image from "next/image";
import quote from "@/public/about/quote.jpg"

export default function Quote() {
  return (
    <section className="relative w-full py-20 flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <Image
        src={quote} // replace with your image
        alt="Steel Industry"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay (optional for readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Quote Card */}
      <div className="relative bg-white/90  backdrop-blur-md px-8 py-10 max-w-2xl text-center shadow-xl">
        
        <h2 className="text-xl md:text-2xl font-semibold text-[#8B4513] leading-relaxed uppercase tracking-wide">
          This is not about creating a giant. <br />
          It’s about creating the sustainability of steel industry.
        </h2>

        {/* Optional Author */}
        <p className="mt-4 text-gray-700 font-medium">
          — Vaswani Industries
        </p>
      </div>
    </section>
  );
}