"use client";

import React, { useState, useEffect } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import Button1 from "@/components/buttons/Button1";

const AboutSection = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  const getAbout = async () => {
    try {
      const res = await fetch("https://vil-cms-dhct.vercel.app/api/company/The Company");
      const data = await res.json();
      setAbout(data);
    } catch (error) {
      console.error("Error fetching about data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAbout();
  }, []);

  // --- CLEANING FUNCTION ---
  // Yeh function HTML tags se styles aur gande characters remove karta hai
  const cleanContent = (html) => {
    if (!html) return "";
    return html
      .replace(/&nbsp;/g, " ") // Extra spaces ko normal space mein badalta hai
      .replace(/style="[^"]*"/gi, "") // Saare inline styles (background, color) remove karta hai
      .replace(/<span[^>]*>/gi, "") // Faltu span tags remove karta hai (optional)
      .replace(/<\/span>/gi, "");
  };

  if (loading) return <div className="py-20 text-center">Loading...</div>;
  if (!about) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:p-8 md:py-20 font-sans text-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Column: Dynamic Image */}
        <div className="w-full">
          <div className="rounded-sm overflow-hidden shadow-sm">
            <img
              src={about.sectionImage}
              alt="Company Section"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Column: Dynamic Content */}
        <div className="w-full">
          <div className="space-y-6 text-[15px] leading-relaxed">
            {/* Dynamic Subtitle/Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight md:leading-snug">
              {about.subtitle}
            </h1>
         
            {/* Cleaned HTML: Ab yahan background-color aur hardcoded 
               colors frontend ko kharab nahi karenge.
            */}
            <div 
              className="prose prose-slate max-w-none text-gray-600"
              dangerouslySetInnerHTML={{ __html: cleanContent(about.mainContent) }} 
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

export default AboutSection;