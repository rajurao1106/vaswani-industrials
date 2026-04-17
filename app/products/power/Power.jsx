"use client";

import React, { useState } from "react";
import { FileText } from "lucide-react";
import Link from "next/link";

const Power = () => {
  const [activeTab, setActiveTab] = useState("power");

  // Navigation Menu Items
  const menuItems = [
    { id: "forging", label: "Forging Ingots & Billets", href: "/products/forging-ingots-and-billets" },
    { id: "sponge", label: "Sponge Iron", href: "/products/sponge-iron" },
    { id: "power", label: "Power", href: "/products/power" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-white font-sans text-gray-700">
      
      {/* --- TOP TABS SECTION --- */}
      <div className="mb-10">
        <nav className="flex flex-wrap border-b border-gray-200">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActiveTab(item.id)}
              className={`px-6 py-4 text-sm md:text-base font-bold uppercase tracking-wider transition-all no-underline border-b-2 -mb-[1px] ${
                activeTab === item.id
                  ? "border-[#43bfb1] text-[#43bfb1] bg-gray-50/50"
                  : "border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* --- MAIN CONTENT AREA (Left) --- */}
        <div className="w-full lg:w-3/4">
          {activeTab === "power" && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
              <span className="bg-[#43bfb1] text-white text-xs md:text-sm font-bold px-4 py-1.5 uppercase tracking-widest rounded-sm">
                Energy Division
              </span>
              
              <h1 className="text-2xl md:text-4xl font-extrabold mt-6 mb-8 text-gray-900 leading-tight">
                M/s Vaswani Industries Limited has installed an 11.5 MW capacity
                power plant in addition to the Sponge Iron and Steel Division.
              </h1>
              
              <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed">
                <p>
                  We utilize flue gas, and form steam from our <strong>03 Waste heat
                  recovery boilers (WHRB)</strong>, in the form of renewable energy from
                  100 TPD sponge iron kilns. 
                </p>
                
                <p>
                  We have also installed an <strong>AFBC boiler</strong> in which a maximum amount of 
                  dolochar (By Product of DRI production) is used as fuel. The Electricity 
                  Generated in the captive power plant is used by the <strong>Steel Melting Shop (SMS)</strong>.
                </p>

                <blockquote className="bg-gray-50 border-l-4 border-[#43bfb1] p-8 mt-10 rounded-r-xl shadow-sm">
                  <p className="italic font-medium text-gray-800 md:text-2xl">
                    "This process of utilizing waste heat to generate electricity is extremely beneficial for the environment."
                  </p>
                </blockquote>
              </div>
            </div>
          )}
        </div>

        {/* --- SIDEBAR INFO (Right) --- */}
        <div className="w-full lg:w-1/4 space-y-6">
          
          {/* Download Box */}
          <a
            href="/path-to-your-pdf.pdf"
            download
            className="group bg-neutral-900 text-white flex items-center justify-between p-6 rounded-xl hover:bg-neutral-800 transition-all duration-300 no-underline shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#43bfb1] p-2 rounded-lg group-hover:scale-110 transition-transform">
                <FileText size={28} className="text-white" />
              </div>
              <div>
                <span className="block text-sm font-black uppercase tracking-widest">Download PDF</span>
                <span className="text-[10px] text-gray-400 font-medium italic">Brochure 2024 • 1.5 MB</span>
              </div>
            </div>
          </a>

          {/* Quick Fact Box */}
          <div className="bg-white p-8 border-2 border-gray-100 rounded-2xl shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#43bfb1]/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
            
            <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-[#43bfb1] block rounded-full"></span>
              Quick Fact
            </h3>
            
            <p className="text-gray-600 text-base leading-relaxed italic border-t border-gray-100 pt-4">
              Vaswani Industries Limited is the largest producer of Sponge Iron
              in Central India.
            </p>
          </div>

          {/* Additional Info / Contact Card (Optional) */}
          <div className="bg-[#43bfb1] p-6 rounded-2xl text-white shadow-md shadow-[#43bfb1]/20">
            <h4 className="font-bold text-lg mb-2">Sustainable Energy</h4>
            <p className="text-sm opacity-90">Reducing carbon footprint through advanced WHRB technology.</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Power;