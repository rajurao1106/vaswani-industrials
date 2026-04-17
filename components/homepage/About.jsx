"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import fallbackImage from "@/public/homepage/img-about-1.webp";

export default function About() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://vil-cms-dhct.vercel.app/api/about-snippet", {
          cache: "no-store",
        });

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching about data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading || !data) return null;

  return (
    <section className="bg-[#f6f9fa] py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:gap-14 px-4 md:px-6 md:grid-cols-2 md:items-start">
        <div className="relative h-[320px] md:h-[520px] w-full overflow-hidden rounded-xl">
          <Image
            src="https://res.cloudinary.com/drpyepp9t/image/upload/v1776426065/Billets_Production_Wide_erkebq.jpg"
            alt={data.heading || "About Us"}
            fill
            priority
            className="object-cover rounded-xl md:[clip-path:path('M_0,60_A_10,10_0,0,1_10,50_L_250,50_A_10,10_0,0,0_260,40_L_260,10_A_10,10_0,0,1_270,0_L_590,0_L_580,460_A_10,10_0,0,1_570,470_L_350,470_A_10,10_0,0,0_340,480_L_340,510_A_10,10_0,0,1_330,520_L_280,520_L_0,520_Z')]"
          />
        </div>
        <div>
          <span className="inline-block bg-[#43bfb115] text-[#43bfb1] px-4 py-1 text-xs md:text-sm font-medium">
            About Us
          </span>
          <h2 className="mt-4 mb-4 text-2xl md:text-4xl font-bold leading-snug text-gray-900">
            {data.heading}
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-4">
            {data.quote}
          </p>
          <div className="mt-6">
            <button className="group flex items-center gap-3 rounded-full bg-[#43bfb1] px-1 pl-4 py-1 text-sm md:text-base font-medium text-white transition hover:bg-[#308a7f]">
              {data.ctaText}
              <span className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-white text-black transition group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}