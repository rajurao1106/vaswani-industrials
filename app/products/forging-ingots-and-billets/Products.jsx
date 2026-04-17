"use client";

import React, { useState } from "react";
import { FileText } from "lucide-react";
import Link from "next/link";

const VaswaniIndustries = () => {
  const [activeTab, setActiveTab] = useState("forging");

  const menuItems = [
    { id: "forging", label: "Forging Ingots & Billets", href: "/products/forging-ingots-and-billets" },
    { id: "sponge", label: "Sponge Iron", href: "/products/sponge-iron" },
    { id: "power", label: "Power", href: "/products/power" },
  ];

  const ingotSizes = [
    { id: 1, size: "10*12", type: "Square", weight: 1300, mold: '75"', hotTop: '9"' },
    { id: 2, size: "12*14", type: "Square", weight: 1700, mold: '75"', hotTop: '9"' },
    { id: 3, size: "14*16", type: "Square", weight: 2300, mold: '75"', hotTop: '9"' },
    { id: 4, size: "17*19", type: "Fluted", weight: 2600, mold: '75"', hotTop: '9"' },
    { id: 5, size: "19*21", type: "Fluted", weight: 3200, mold: '75"', hotTop: '9"' },
    { id: 6, size: "22*24", type: "Fluted", weight: 4200, mold: '75"', hotTop: '9"' },
    { id: 7, size: "25*28", type: "Fluted", weight: 5200, mold: '75"', hotTop: '9"' },
    { id: 8, size: "28*33", type: "Fluted", weight: 6200, mold: '75"', hotTop: '9"' },
    { id: 9, size: "30*33", type: "Fluted", weight: 7150, mold: '75"', hotTop: '9"' },
  ];

  const billetBloomData = [
    { billets: "100*100", blooms: "200*200" },
    { billets: "110*110", blooms: "200*250" },
    { billets: "125*125", blooms: "250*250" },
    { billets: "160*160", blooms: "280*300" },
    { billets: "160*200", blooms: "280*320" },
    { billets: "150*340", blooms: "-" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-white font-sans text-gray-700">
      {/* TOP TABS NAVIGATION */}
      <div className="mb-8">
        <nav className="flex flex-wrap border-b border-gray-200">
          {menuItems.map((item) => (
            <Link href={item.href}
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-6 py-4 text-sm md:text-base font-medium transition-all border-b-2 -mb-[1px] ${
                activeTab === item.id
                  ? "border-[#43bfb1] text-[#43bfb1] bg-gray-50"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* MAIN CONTENT AREA */}
        <div className="w-full lg:w-3/4">
          {activeTab === "forging" && (
            <div className="animate-in fade-in duration-500">
              <span className="bg-[#43bfb1] text-white text-xs md:text-sm font-bold px-3 py-1 uppercase tracking-wide">
                Forging Ingots & Billets
              </span>
              
              <h1 className="text-2xl md:text-3xl font-bold mt-6 mb-4 text-gray-800 leading-tight">
                We produce MS Alloy Ingots (Forging Quality) of different EN grades and sizes as per customer demands.
              </h1>
              
              <p className="mb-8 text-gray-600 leading-relaxed text-lg">
                Presently we are having capacity of producing 6000 MT of Forging Quality, casting one heat of 10 metric tons Material. 
                We had successfully casted En-8, En-9, En-18, En-19, En-24, En-42, En-111, C-25, C-40, C-42, C-45 and 55Cr70.
              </p>

              <h4 className="font-bold mb-4 text-gray-800 text-xl border-l-4 border-[#43bfb1] pl-4">Available Sizes</h4>
              
              <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm mb-12">
                <table className="w-full text-sm text-center border-collapse">
                  <thead className="bg-gray-100 text-gray-700 uppercase">
                    <tr>
                      <th className="px-4 py-4 border-b border-r border-gray-200">Sl.No</th>
                      <th className="px-4 py-4 border-b border-r border-gray-200">Size In Inches</th>
                      <th className="px-4 py-4 border-b border-r border-gray-200">Type</th>
                      <th className="px-4 py-4 border-b border-r border-gray-200">Approx. Wt (kg)*</th>
                      <th className="px-4 py-4 border-b border-r border-gray-200">Mold Height</th>
                      <th className="px-4 py-4 border-b">Hot top height</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ingotSizes.map((row) => (
                      <tr key={row.id} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 border-r border-gray-200 font-medium">{row.id}</td>
                        <td className="px-4 py-3 border-r border-gray-200">{row.size}</td>
                        <td className="px-4 py-3 border-r border-gray-200">{row.type}</td>
                        <td className="px-4 py-3 border-r border-gray-200">{row.weight}</td>
                        <td className="px-4 py-3 border-r border-gray-200">{row.mold}</td>
                        <td className="px-4 py-3">{row.hotTop}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <p className="text-gray-700 leading-relaxed">
                  We produce <strong className="text-gray-900">MS Billet/Bloom</strong>, with a wide range of section size from 100 mm x 100 mm to 250 mm x 250 mm 
                  and bloom size 280 mm x 320 mm along with BIS marked in products of IS-2830 and IS-2831.
                </p>
              </div>

              <div className="max-w-md overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
                <table className="w-full text-sm text-center border-collapse">
                  <thead className="bg-gray-100 text-gray-700 uppercase">
                    <tr>
                      <th className="px-6 py-4 border-b border-r border-gray-200">Billets</th>
                      <th className="px-6 py-4 border-b">Blooms</th>
                    </tr>
                  </thead>
                  <tbody>
                    {billetBloomData.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-200 last:border-0 hover:bg-gray-50">
                        <td className="px-6 py-3 border-r border-gray-200 font-semibold text-gray-800">{row.billets}</td>
                        <td className="px-6 py-3">{row.blooms}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* SIDEBAR (Right Side) */}
        <div className="w-full lg:w-1/4 space-y-6">
          <a
            href="/path-to-your-pdf.pdf"
            download
            className="group bg-neutral-900 text-white flex items-center justify-between p-5 rounded-lg cursor-pointer hover:bg-neutral-800 transition-all no-underline shadow-md"
          >
            <div className="flex items-center gap-4">
              <FileText size={32} className="text-[#43bfb1] group-hover:scale-110 transition-transform" />
              <div>
                <span className="block text-lg font-bold uppercase tracking-tight leading-none">Download PDF</span>
                <span className="text-xs text-gray-400">Catalogue 2024 • 1.5 MB</span>
              </div>
            </div>
          </a>

          <div className="bg-gray-50 p-8 border-t-4 border-[#43bfb1] rounded-b-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Fact</h3>
            <p className="text-gray-600 leading-relaxed italic border-l-2 border-gray-300 pl-4">
              "Vaswani Industries Limited is the largest producer of Sponge Iron in Central India."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaswaniIndustries;