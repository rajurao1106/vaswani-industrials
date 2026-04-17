"use client";

import Image from "next/image";
import fallbackImage from "@/public/newImages/Drone 4.png";
import { useState, useEffect } from "react";

export default function Hero() {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        // Replaced axios with native fetch
        // Ensure the URL matches your backend environment variable or base path
        const res = await fetch(`https://vil-cms-dhct.vercel.app/api/hero-sliders/all`);
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        if (data && data.length > 0) {
          setHeroData(data[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  // Show nothing or a loader until data is ready
  if (loading || !heroData) return null;

  return (
    <section className="px-3 py-3 max-lg:pt-20 md:px-6 pt-26">
      <div className="relative h-[90vh] md:h-screen w-full overflow-hidden rounded-2xl md:rounded-3xl">
        {/* Background Image */}
        <Image
          src={heroData.backgroundImagePath?.startsWith('/') ? heroData.backgroundImagePath : fallbackImage}
          alt="Industry"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
          <div className="max-w-xl md:max-w-4xl text-white">
            {/* Heading from JSON */}
            <span className="mx-auto mb-3 inline-block rounded-full border border-white/30 px-3 py-1 text-[10px] md:text-xs tracking-wide backdrop-blur">
              {heroData.heading}
            </span>

            {/* Subtitle from JSON */}
            <h1 className="mt-4 text-2xl leading-snug font-bold sm:text-3xl md:text-5xl mb-4">
              {heroData.subtitle}
            </h1>

            {/* CTA Text / Description from JSON */}
            <p className="text-sm sm:text-base md:text-lg text-white/90">
              {heroData.ctaText}
            </p>

            {/* Button using ctaLink from JSON */}
            <div className="mt-6 md:mt-8 flex justify-center">
              <a 
                href={heroData.ctaLink || "#"}
                className="group flex items-center gap-3 rounded-full bg-[#43bfb1] px-1 pl-4 py-1 text-sm md:text-base font-medium transition hover:bg-[#308a7f]"
              >
                Explore Our Businesses
                <span className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-white text-black transition group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}