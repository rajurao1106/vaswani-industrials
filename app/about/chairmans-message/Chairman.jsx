"use client";

import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import Web_slider_factory1 from "@/public/about/Web-slider-factory1.jpg";
import Image from "next/image";
import Button1 from "@/components/buttons/Button1";

const Chairman = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChairmanData = async () => {
      try {
        const response = await fetch("https://vil-cms-dhct.vercel.app/api/chairman-message");
        const result = await response.json();
        
        // FIX: The API is sending &nbsp; instead of spaces. 
        // We replace them with normal spaces so the text can wrap correctly.
        if (result && result.messageContent) {
          result.messageContent = result.messageContent.replace(/&nbsp;/g, " ");
        }
        
        setData(result);
      } catch (error) {
        console.error("Error fetching chairman message:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChairmanData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="animate-spin text-[#43bfb1]" size={32} />
      </div>
    );
  }

  if (!data) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 font-sans text-gray-700 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Column: Image */}
        <div className="w-full overflow-hidden">
          <div className="rounded-sm overflow-hidden shadow-sm">
            <Image
              src={Web_slider_factory1}
              alt="Chairman Message Section"
              width={800} // Added width/height for better Next.js optimization
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full min-w-0"> {/* min-w-0 is a flex/grid fix for text wrapping */}
          <h2 className="text-xl md:text-2xl font-semibold text-[#43bfb1] mb-4 uppercase tracking-wide">
            {data.sectionTitle}
          </h2>

          <div className="space-y-6 text-[15px] leading-relaxed mb-4">
            {/* Author Name / Tagline */}
            <p className="text-xl md:text-2xl font-bold text-gray-900 leading-snug break-words">
              {data.authorName}
            </p>

            {/* Main Message Content */}
            <div 
              className="prose prose-sm max-w-none text-gray-700 chairman-content break-words overflow-wrap-anywhere"
              dangerouslySetInnerHTML={{ __html: data.messageContent }} 
            />

            <div className="pt-4">
               <Button1 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chairman;