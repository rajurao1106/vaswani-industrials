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

  // New Data for Billets and Blooms
  const billetBloomData = [
    { billets: "100*100", blooms: "200*200" },
    { billets: "110*110", blooms: "200*250" },
    { billets: "125*125", blooms: "250*250" },
    { billets: "160*160", blooms: "280*300" },
    { billets: "160*200", blooms: "280*320" },
    { billets: "150*340", blooms: "-" },
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
              <span className="text-xl font-bold uppercase tracking-tight">Download PDF</span>
            </div>
            <span className="text-sm text-gray-400">1.5 MB</span>
          </a>

          <div className="bg-gray-100 p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Quick Fact</h3>
            <p className="text-gray-600 leading-relaxed italic">
              Vaswani Industries Limited is the largest producer of Sponge Iron in Central India.
            </p>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="w-full md:w-3/4">
          {activeTab === "forging" && (
            <div className="animate-in fade-in duration-500">
              <span className="bg-[#43bfb1] text-white text-sm font-bold px-3 py-1 uppercase">
                Forging Ingots & Billets
              </span>
              
              <h1 className="text-2xl font-bold mt-6 mb-4 text-gray-800">
                We produce MS Alloy Ingots (Forging Quality) of different EN grades and sizes as per customer demands.
              </h1>
              
              <p className="mb-6 text-gray-600 leading-relaxed">
                Presently we are having capacity of producing 6000 MT of Forging Quality, casting one heat of 10 metric tons Material. 
                We had successfully casted En-8, En-9, En-18, En-19, En-24, En-42, En-111, C-25, C-40, C-42, C-45 and 55Cr70.
              </p>

              <h4 className="font-semibold mb-4 text-gray-800">Following are the sizes available:-</h4>
              
              <div className="overflow-x-auto border border-gray-300 mb-12">
                <table className="w-full text-sm text-center border-collapse">
                  <thead className="bg-gray-50 text-gray-700 uppercase">
                    <tr className="border-b border-gray-300">
                      <th className="px-4 py-3 border-r border-gray-300">Sl.No</th>
                      <th className="px-4 py-3 border-r border-gray-300">Size In Inches</th>
                      <th className="px-4 py-3 border-r border-gray-300">Type</th>
                      <th className="px-4 py-3 border-r border-gray-300">Approx. Wt. per Piece (kg)*</th>
                      <th className="px-4 py-3 border-r border-gray-300">Mold Height</th>
                      <th className="px-4 py-3">Hot top height</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ingotSizes.map((row) => (
                      <tr key={row.id} className="border-b border-gray-300 last:border-0 hover:bg-gray-50">
                        <td className="px-4 py-2 border-r border-gray-300">{row.id}</td>
                        <td className="px-4 py-2 border-r border-gray-300">{row.size}</td>
                        <td className="px-4 py-2 border-r border-gray-300">{row.type}</td>
                        <td className="px-4 py-2 border-r border-gray-300">{row.weight}</td>
                        <td className="px-4 py-2 border-r border-gray-300">{row.mold}</td>
                        <td className="px-4 py-2">{row.hotTop}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* NEW SECTION: BILLETS & BLOOMS */}
              <p className="mb-6 text-gray-600 leading-relaxed">
                We produce <strong>MS Billet/Bloom</strong>, with a wide range of section size from 100 mm x 100 mm to 250 mm x 250 mm 
                and bloom size 280 mm x 320 mm along with BIS marked in products of IS-2830 and IS-2831. Our supplies are customized 
                as per customer requirements. We also deliver different grades of carbon/ spring/ alloy steel products such as 
                EN-8, EN-9, EN-18, EN-19, C-45, Sup 9 and Sup 11.
              </p>

              <div className="max-w-md overflow-x-auto border border-gray-300">
                <table className="w-full text-sm text-center border-collapse">
                  <thead className="bg-gray-50 text-gray-700 uppercase">
                    <tr className="border-b border-gray-300">
                      <th className="px-4 py-3 border-r border-gray-300">Billets</th>
                      <th className="px-4 py-3">Blooms</th>
                    </tr>
                  </thead>
                  <tbody>
                    {billetBloomData.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-300 last:border-0 hover:bg-gray-50">
                        <td className="px-4 py-2 border-r border-gray-300 font-medium">{row.billets}</td>
                        <td className="px-4 py-2">{row.blooms}</td>
                      </tr>
                    ))}
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

export default VaswaniIndustries;