"use client"

import React, { useState, useEffect } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import Button1 from "@/components/buttons/Button1";

const AboutSection = () => {
  // 1. Initialize state as null or an empty object
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

  // 2. Trigger the fetch on component mount
  useEffect(() => {
    getAbout();
  }, []);

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
         
            {/* Dynamic Main Content (renders the HTML from API) */}
            <div 
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: about.mainContent }} 
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