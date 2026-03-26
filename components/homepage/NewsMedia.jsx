"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import news1 from "@/public/homepage/img-solar-6.webp";
import Link from "next/link";

export default function NewsMedia() {
  const sliderRef = useRef(null);

  const slide = (direction) => {
    if (!sliderRef.current) return;
    const scrollAmount = 320;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const news = [
    {
      category: "Virtual Event",
      title: "Reimagining Mary Oliver’s Best Virtual Court",
      date: "Feb 18, 2025",
      image: news1,
    },
    {
      category: "Industry",
      title: "Tracking the Changes of Retail Industry",
      date: "Feb 05, 2025",
      image: news1,
    },
    {
      category: "Platform",
      title: "Easy and Most Powerful Server and Platform",
      date: "Nov 08, 2024",
      image: news1,
    },
    {
      category: "Notice",
      title: "Notice of 19th Annual General Meeting",
      date: "Nov 07, 2024",
      image: news1,
    },
  ];

  return (
    <section className="py-14 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 md:mb-10">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              NEWS | MEDIA | EVENTS | CSR
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              It&apos;s always about the society we serve!
            </p>
          </div>

          {/* Controls (desktop only) */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-3 text-[#43bfb1]">
              <button
                onClick={() => slide("left")}
                className="w-10 h-10 rounded-full border border-gray-400 hover:border-[#43bfb1] flex items-center justify-center transition"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => slide("right")}
                className="w-10 h-10 rounded-full border border-gray-400 hover:border-[#43bfb1] flex items-center justify-center transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <Link href="/news" className="bg-[#43bfb1] text-white py-2 px-5 rounded-full text-sm hover:bg-[#308a7f] transition">
              READ THE NEWS
            </Link>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
        >
          {news.map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[350px] bg-white shadow-lg rounded-xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-40 md:h-44">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <p className="text-xs text-gray-400 mb-2">
                  {item.category} • {item.date}
                </p>

                <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                  {item.title}
                </p>

                <button className="text-xs font-semibold text-[#43bfb1] hover:text-[#2f9085]">
                  READ MORE →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-6 flex justify-center md:hidden">
          <button className="bg-[#43bfb1] text-white py-2 px-6 rounded-full text-sm">
            READ THE NEWS
          </button>
        </div>
      </div>
    </section>
  );
}