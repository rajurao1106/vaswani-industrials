"use client";

import React, { useState } from "react";
import { FileText } from "lucide-react";
import Link from "next/link";

const Spongeiron = () => {
  const [activeTab, setActiveTab] = useState("sponge");

  const menuItems = [
    { id: "forging", label: "Forging Ingots & Billets", href: "/products/forging-ingots-and-billets" },
    { id: "sponge", label: "Sponge Iron", href: "/products/sponge-iron" },
    { id: "power", label: "Power", href: "/products/power" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-white font-sans text-gray-700">
      
      {/* 1. TOP TABS NAVIGATION */}
      <div className="mb-10 border-b border-gray-200">
        <nav className="flex flex-wrap -mb-px">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActiveTab(item.id)}
              className={`px-6 py-4 text-sm font-bold uppercase tracking-wider transition-all no-underline border-b-2 ${
                activeTab === item.id
                  ? "border-[#43bfb1] text-[#43bfb1] bg-gray-50/50"
                  : "border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* 2. MAIN CONTENT AREA (Left Side) */}
        <div className="w-full lg:w-3/4">
          {activeTab === "sponge" && (
            <div className="animate-in fade-in duration-700">
              <span className="bg-[#43bfb1] text-white text-xs font-bold px-3 py-1 uppercase rounded-sm">
                Sponge Iron Division
              </span>
              
              <h1 className="text-3xl md:text-4xl font-extrabold mt-6 mb-6 text-gray-800 leading-tight">
                Sponge Iron (Direct Reduced Iron)
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Sponge iron, also known as **Direct Reduced Iron (DRI)**, is the product of reducing iron oxide in the form of iron ore into metallic iron, below the melting point of iron and typically in the range of 800–1200 °C. It serves as a superior substitute for scrap in induction and electrical arc furnaces.
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-[#43bfb1] pl-4">The Process</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Sponge iron making involves tumbling iron ore lumps (5mm-18mm) with a ‘select’ grade of coal & dolomite inside an inclined rotary kiln. The process entails a direct reduction of the iron ore (removal of oxygen) in a solid state to metalize the ore at a ‘critical’ temperature. The products are air-cooled and magnetically separated before dispatch.
                  </p>
                </section>

                {/* Chemical Reactions Box */}
                <div className="bg-gray-900 rounded-xl p-8 text-white shadow-xl">
                  <h3 className="text-[#43bfb1] font-bold mb-4 uppercase tracking-widest text-sm">Basic Reduction Reactions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-sm md:text-base opacity-90">
                    <p className="flex justify-between border-b border-white/10 pb-2"><span>C + O₂</span> <span>= CO₂</span></p>
                    <p className="flex justify-between border-b border-white/10 pb-2"><span>CO₂ + C</span> <span>= 2CO</span></p>
                    <p className="flex justify-between border-b border-white/10 pb-2"><span>3Fe₂O₃ + CO</span> <span>= 2Fe₃O₄ + CO₂</span></p>
                    <p className="flex justify-between border-b border-white/10 pb-2"><span>Fe₃O₄ + CO</span> <span>= 3FeO + CO₂</span></p>
                    <p className="flex justify-between border-b border-white/10 pb-2"><span>FeO + CO</span> <span>= Fe + CO₂</span></p>
                  </div>
                </div>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Specifications</h2>
                  <p className="mb-6 text-gray-600">We manufacture DRI in the following precise specifications:</p>
                  
                  <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase">Parameters / Material</th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase">DRI Lumps</th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase">Pellet</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-bold text-gray-800">Fe (metallic)</td>
                          <td className="px-6 py-4">82 (± 1)</td>
                          <td className="px-6 py-4">80 (± 1)</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-bold text-gray-800">Carbon</td>
                          <td className="px-6 py-4">0.15%</td>
                          <td className="px-6 py-4">0.15%</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-bold text-gray-800">Sulfur</td>
                          <td className="px-6 py-4">0.035%</td>
                          <td className="px-6 py-4">0.035%</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-bold text-gray-800">Size</td>
                          <td className="px-6 py-4">0-20 mm</td>
                          <td className="px-6 py-4">3-20 mm</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-bold text-gray-800">Under size (-1mm)</td>
                          <td className="px-6 py-4">{"< 20%"}</td>
                          <td className="px-6 py-4">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            </div>
          )}
        </div>

        {/* 3. SIDEBAR INFO (Right Side) */}
        <div className="w-full lg:w-1/4 space-y-6">
          <a
            href="/path-to-your-pdf.pdf"
            download
            className="group bg-neutral-900 text-white flex items-center justify-between p-6 rounded-xl hover:bg-neutral-800 transition-all no-underline shadow-lg"
          >
            <div className="flex items-center gap-4">
              <FileText size={32} className="text-[#43bfb1] group-hover:rotate-6 transition-transform" />
              <div>
                <span className="block text-sm font-black uppercase tracking-widest">Download PDF</span>
                <span className="text-xs text-gray-400">DRI Specs • 1.5 MB</span>
              </div>
            </div>
          </a>

          <div className="bg-gray-50 p-8 border-t-4 border-[#43bfb1] rounded-b-xl shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Fact</h3>
            <p className="text-gray-600 leading-relaxed italic border-l-2 border-gray-300 pl-4">
              "Vaswani Industries Limited is the largest producer of Sponge Iron in Central India."
            </p>
          </div>
          
          <div className="p-6 bg-[#43bfb1]/10 rounded-xl border border-[#43bfb1]/20">
            <h4 className="font-bold text-gray-800 mb-2">Did you know?</h4>
            <p className="text-sm text-gray-600 leading-snug">DRI is vital for high-quality steel production due to its low sulfur and phosphorus content.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Spongeiron;