"use client";

import React, { useState } from "react";
import { FileText } from "lucide-react";
import Link from "next/link";

const Spongeiron = () => {
  const [activeTab, setActiveTab] = useState("sponge");

  const menuItems = [
    {
      id: "forging",
      label: "Forging Ingots & Billets",
      href: "/products/forging-ingots-and-billets",
    },
    { id: "sponge", label: "Sponge Iron", href: "/products/sponge-iron" },
    { id: "power", label: "Power", href: "/products/power" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white font-sans text-gray-700">
      <div className="flex flex-col md:flex-row gap-8">
        {/* SIDEBAR */}
        <div className="w-full md:w-1/4 space-y-6">
          <nav className="bg-gray-100 border border-gray-200 flex flex-col">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left px-6 py-4 border-b border-gray-200 last:border-0 transition-colors no-underline ${
                  activeTab === item.id
                    ? "bg-white text-gray-900 font-semibold border-l-4 border-l-[#43bfb1]"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="/path-to-your-pdf.pdf"
            download
            className="bg-neutral-800 text-white flex items-center justify-between p-4 cursor-pointer hover:bg-neutral-700 transition-colors no-underline"
          >
            <div className="flex items-center gap-3">
              <FileText size={32} strokeWidth={1.5} />
              <span className="text-xl font-bold uppercase tracking-tight">
                Download PDF
              </span>
            </div>
            <span className="text-sm text-gray-400">1.5 MB</span>
          </a>

          <div className="bg-gray-100 p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Quick Fact</h3>
            <p className="text-gray-600 leading-relaxed italic">
              Vaswani Industries Limited is the largest producer of Sponge Iron
              in Central India.
            </p>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="w-full md:w-3/4">
          {activeTab === "sponge" && (
            <div className="animate-in fade-in duration-500">
              <span className="bg-[#43bfb1] text-white text-sm font-bold px-3 py-1 uppercase">
                Sponge Iron
              </span>
              
              <h1 className="text-3xl font-bold mt-6 mb-4 text-gray-800">
                Sponge Iron (Direct Reduced Iron)
              </h1>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Sponge iron, also known as Direct Reduced Iron (DRI), is the product of reducing iron oxide in the form of iron ore into metallic iron, below the melting point of iron and typically in the range of 800–1200 °C. Sponge iron is used in the iron and steel industry as a substitute for scrap in induction and electrical arc furnaces.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mb-3">Process</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sponge iron making is a process in which iron ore lumps (5mm-18mm size) are tumbled with a ‘select’ grade of coal & dolomite inside an inclined rotary kiln and control combusted in the presence of air for about 12 hours before the products are air cooled, magnetically separated, screened and size wise in finished product bunkers prior to dispatch. The process entails a direct reduction of the iron ore (i.e. removal of oxygen from the ore) in solid state to metalize the ore at a ‘critical’ temperature to make this possible.
              </p>

              <div className="bg-gray-50 p-6 border-l-4 border-[#43bfb1] mb-8">
                <h3 className="font-bold text-gray-800 mb-3">Basic Reduction Reactions:</h3>
                <div className="space-y-1 font-mono text-sm text-gray-700">
                  <p>C + O₂ = CO₂</p>
                  <p>CO₂ + C = 2CO</p>
                  <p>3Fe₂O₃ + CO = 2Fe₃O₄ + CO₂</p>
                  <p>Fe₃O₄ + CO = 3FeO + CO₂</p>
                  <p>FeO + CO = Fe + CO₂</p>
                </div>
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-4">Product Specifications</h2>
              <p className="mb-4 text-gray-600">We are manufacturing DRI in following Specifications:</p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-200 px-4 py-2 text-left">Parameters / Material</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">DRI Lumps</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">Pellet</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 font-medium">Fe (metallic)</td>
                      <td className="border border-gray-200 px-4 py-2">82 (± 1)</td>
                      <td className="border border-gray-200 px-4 py-2">80 (± 1)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 font-medium">Carbon</td>
                      <td className="border border-gray-200 px-4 py-2">0.15%</td>
                      <td className="border border-gray-200 px-4 py-2">0.15%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 font-medium">Sulfur</td>
                      <td className="border border-gray-200 px-4 py-2">0.035%</td>
                      <td className="border border-gray-200 px-4 py-2">0.035%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 font-medium">Size</td>
                      <td className="border border-gray-200 px-4 py-2">0-20 mm</td>
                      <td className="border border-gray-200 px-4 py-2">3-20 mm</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 font-medium">Under size (-1mm)</td>
                      <td className="border border-gray-200 px-4 py-2">{"< 20%"}</td>
                      <td className="border border-gray-200 px-4 py-2">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Spongeiron;