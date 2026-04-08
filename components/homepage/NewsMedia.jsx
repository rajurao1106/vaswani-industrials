"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import news1 from "@/public/homepage/img-solar-6.webp"; // Fallback image
import api from "@/lib/api";

export default function NewsMedia() {
  const sliderRef = useRef(null);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
         const res = await api.get("/api/posts");
        setNews(res.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const slide = (direction) => {
    if (!sliderRef.current) return;
    const scrollAmount = 320;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (loading) {
    return <div className="py-20 text-center">Loading news...</div>;
  }

  return (
    <section className="py-14 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 md:mb-10">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2 uppercase">
              News | Media | Events | CSR
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
          {news.map((item) => (
            <div
              key={item._id}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[350px] bg-white shadow-lg rounded-xl overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-40 md:h-44 bg-gray-100">
                <Image
                  src={item.coverImage && item.coverImage.startsWith('http') ? item.coverImage : news1}
                  alt={item.title}
                  fill
                  className="object-cover"
                  unoptimized={true} // Use this if coverImage is an external URL not configured in next.config.js
                />
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 flex-grow flex flex-col">
                <p className="text-xs text-gray-400 mb-2">
                  <span className="font-semibold text-[#43bfb1] uppercase">{item.type}</span> • {new Date(item.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>

                <h3 className="text-sm md:text-base font-medium text-gray-700 mb-4 leading-relaxed line-clamp-2">
                  {item.title}
                </h3>

                <div className="mt-auto">
                  <Link 
                    href={`/news/${item.slug}`} 
                    className="text-xs font-semibold text-[#43bfb1] hover:text-[#2f9085] flex items-center gap-1"
                  >
                    READ MORE →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-6 flex justify-center md:hidden">
          <Link href="/news" className="bg-[#43bfb1] text-white py-2 px-6 rounded-full text-sm">
            READ THE NEWS
          </Link>
        </div>
      </div>
    </section>
  );
}