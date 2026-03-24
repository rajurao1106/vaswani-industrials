"use client";

import React, { useState } from "react";
import { FileText, Download } from "lucide-react";
import Link from "next/link";

const Disclosure = () => {
  // Primary state for categories (Tabs)
  const [activeCategory, setActiveCategory] = useState("Shareholding Pattern");

  // State for sidebar navigation
  const [activeMenu, setActiveMenu] = useState("Disclosures");

  const reportData = {
    "Shareholding Pattern": [
      { year: "2024", title: "Shareholding Pattern - March 2024" },
      { year: "2023", title: "Shareholding Pattern - Dec 2023" },
      { year: "2023", title: "Shareholding Pattern - Sept 2023" },
      { year: "2023", title: "Shareholding Pattern - June 2023" },
      { year: "2023", title: "Shareholding Pattern - March 2023" },
    ],
    "Corporate Governance Report": [
      { year: "24-25", quarter: "Q1", title: "Corporate Governance Report Q1" },
      { year: "23-24", quarter: "Q4", title: "Corporate Governance Report Q4" },
      { year: "23-24", quarter: "Q3", title: "Corporate Governance Report Q3" },
    ],
    "Annual Secretarial Compliance Report": [
      { year: "2024", title: "Secretarial Compliance Report 2024" },
      { year: "2023", title: "Secretarial Compliance Report 2023" },
    ],
    "Reconciliation of Share Capital Audit Report": [
      { year: "2024", title: "Reconciliation Audit - Mar 2024" },
      { year: "2023", title: "Reconciliation Audit - Dec 2023" },
    ],
    "Annual Return": [
      { year: "2023", title: "Form MGT-7 - Annual Return 2022-23" },
      { year: "2022", title: "Form MGT-7 - Annual Return 2021-22" },
    ],
    "General Meetings/Postal Ballots": [
      { year: "2024", title: "Notice of 30th Annual General Meeting" },
      { year: "2023", title: "Voting Results - Postal Ballot" },
    ],
    "News Paper Publication": [
      { year: "2024", title: "Notice of Board Meeting - Financial Results" },
      { year: "2023", title: "Extract of Unaudited Financial Results" },
    ],
    "Other Disclosures": [
      { year: "2024", title: "Appointment of Independent Director" },
      { year: "2023", title: "Resignation of Statutory Auditors" },
    ],
  };

  const menuItems = [
    { name: "Financials", link: "/investors/investor-financial" },
    { name: "Disclosures", link: "/investors/investor-disclosure" },
    { name: "Listing Information", link: "/investors/investor-listing" },
    { name: "Policies", link: "/investors/investor-policies" },
    { name: "SEBI Disclosure", link: "/investors/investor-disclosure-lodr" },
    { name: "Others", link: "/investors/investor-other" },
  ];

  const categories = Object.keys(reportData);

  return (
    <div className="min-h-screen pb-20 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* LEFT SIDEBAR */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <nav className="flex flex-col border-l border-gray-200 sticky top-8">
              {menuItems.map((item) => {
                const isActive = activeMenu === item.name;
                return (
                  <Link
                    key={item.name}
                    href={item.link}
                    className={`relative px-6 py-4 text-[15px] transition-all duration-200 border-l-2 ${
                      isActive
                        ? "bg-[#43bfb1] text-white border-[#43bfb1]"
                        : "text-[#4a5568] border-transparent hover:bg-white hover:text-[#43bfb1]"
                    }`}
                  >
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-1">
            {/* HORIZONTAL SCROLLABLE TABS */}
            <div className="bg-white rounded-t-xl border-b border-gray-100 shadow-sm overflow-hidden">
              {/* Flex Wrap property added here */}
              <div className="flex flex-wrap p-3 gap-2 md:gap-3 items-center justify-start">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`
            px-5 py-2.5 text-[11px] md:text-[12px] font-bold uppercase tracking-wider 
            transition-all duration-300 ease-in-out rounded-lg
            relative flex items-center justify-center border
            ${
              isActive
                ? "bg-[#43bfb1] text-white border-[#43bfb1] shadow-md shadow-[#43bfb1]/20 scale-105"
                : "bg-gray-50 text-gray-500 border-gray-100 hover:bg-white hover:border-[#43bfb1]/30 hover:text-[#43bfb1]"
            }
          `}
                    >
                      {/* Label */}
                      <span className="relative z-10">{cat}</span>

                      {/* Subtle Indicator for Active Tab (Bottom Line) */}
                      {isActive && (
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-white/50 rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* PDF DISPLAY GRID */}
            <div className="bg-white p-6 rounded-b-lg border border-gray-100 shadow-sm ">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {reportData[activeCategory]?.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    {/* PDF Card */}
                    <div
                      className="w-full aspect-[3/4] flex flex-col items-center justify-center text-white rounded-md shadow-sm group-hover:shadow-lg transition-all transform group-hover:-translate-y-1 relative overflow-hidden"
                      style={{ backgroundColor: "#43bfb1" }}
                    >
                      <span className="text-[8px] uppercase tracking-tighter opacity-70 mb-1 px-2 text-center">
                        {activeCategory.split(" ")[0]}
                      </span>
                      <span className="text-2xl font-black tracking-tight">
                        {item.year}
                      </span>
                      {item.quarter && (
                        <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded mt-1">
                          {item.quarter}
                        </span>
                      )}

                      {/* Download Icon Overlay */}
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <div className="bg-white p-2 rounded-full shadow-lg">
                          <Download size={18} style={{ color: "#43bfb1" }} />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="mt-3 text-center px-1">
                      <p className="text-gray-700 text-[11px] font-semibold leading-tight line-clamp-2 group-hover:text-[#43bfb1] transition-colors h-8">
                        {item.title}
                      </p>
                      <div className="flex items-center justify-center gap-1 mt-2 text-[9px] text-gray-400 uppercase">
                        <FileText size={10} />
                        <span>PDF</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Disclosure;
