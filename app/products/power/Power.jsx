"use client";

import React, { useState } from "react";
import { FileText } from "lucide-react";
import Link from "next/link"; // Next.js ke liye Link import kiya

const Power = () => {
  const [activeTab, setActiveTab] = useState("power");

  // Sidebar Menu Items with Links
  const menuItems = [
    {
      id: "forging",
      label: "Forging Ingots & Billets",
      href: "/products/forging-ingots-and-billets",
    },
    { id: "sponge", label: "Sponge Iron", href: "/products/sponge-iron" },
    { id: "power", label: "Power", href: "/products/power" },
  ];

  // Ingot Data Table
  const ingotSizes = [
    {
      id: 1,
      size: "10*12",
      type: "Square",
      weight: 1300,
      mold: '75"',
      hotTop: '9"',
    },
    {
      id: 2,
      size: "12*14",
      type: "Square",
      weight: 1700,
      mold: '75"',
      hotTop: '9"',
    },
    {
      id: 3,
      size: "14*16",
      type: "Square",
      weight: 2300,
      mold: '75"',
      hotTop: '9"',
    },
    {
      id: 4,
      size: "17*19",
      type: "Fluted",
      weight: 2600,
      mold: '75"',
      hotTop: '9"',
    },
    {
      id: 5,
      size: "19*21",
      type: "Fluted",
      weight: 3200,
      mold: '75"',
      hotTop: '9"',
    },
    {
      id: 6,
      size: "22*24",
      type: "Fluted",
      weight: 4200,
      mold: '75"',
      hotTop: '9"',
    },
    {
      id: 7,
      size: "25*28",
      type: "Fluted",
      weight: 5200,
      mold: '75"',
      hotTop: '9"',
    },
    {
      id: 8,
      size: "28*33",
      type: "Fluted",
      weight: 6200,
      mold: '75"',
      hotTop: '9"',
    },
    {
      id: 9,
      size: "30*33",
      type: "Fluted",
      weight: 7150,
      mold: '75"',
      hotTop: '9"',
    },
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

          {/* Download PDF Box */}
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

          {/* Quick Fact Box */}
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
          {/* Section: SPONGE IRON */}
          {activeTab === "power" && (
            <div className="animate-in fade-in duration-500">
              <span className="bg-[#43bfb1] text-white text-sm font-bold px-3 py-1 uppercase">
                POWER
              </span>
              <h1 className="text-2xl font-bold mt-6 mb-4 text-gray-800">
                M/s Vaswani Industries Limited has installed an 11.5 MW capacity
                power plant in addition to the Sponge Iron and Steel Division.
              </h1>
              <p className="mb-6 text-gray-600 leading-relaxed">
                We utilize flue gas, and form steam from our 03 Waste heat
                recovery boilers (WHRB), in the form of renewable energy from
                100 TPD sponge iron kilns. We have also installed an AFBC boiler
                in which a maximum amount of dolochar (By Product of DRI
                production) is used as fuel. The Electricity Generated in the
                captive power plant is used by the steel Melting shop (SMS).
                This process of utilizing waste heat to generate into
                electricity is extremely beneficial for the environment.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Power;
