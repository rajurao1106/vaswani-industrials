"use client";

import React, { useState } from "react";
import { FileText, Download } from "lucide-react";
import Link from "next/link";

const InvestorDocuments = () => {
  // Primary state for the content category tabs
  const [activeCategory, setActiveCategory] = useState("Annual Reports");
  
  // State for the sidebar navigation
  const [activeMenu, setActiveMenu] = useState("Financials");

  const reportData = {
    "Annual Reports": [
      { year: "2024", title: "Annual Report 2024" },
      { year: "2023", title: "Annual Report 2023" },
      { year: "2022", title: "Annual Report 2022" },
      { year: "2021", title: "Annual Report 2021" },
      { year: "2020", title: "Annual Report 2020" },
      { year: "2019", title: "Annual Report 2019" },
      { year: "2018", title: "Annual Report 2018" },
      { year: "2017", title: "Annual Report 2017" },
      { year: "2016", title: "Annual Report 2016" },
      { year: "2015", title: "Annual Report 2015" },
      { year: "2014", title: "Annual Report 2014" },
      { year: "2013", title: "Annual Report 2013" },
      { year: "2012", title: "Annual Report 2012" },
      { year: "2011", title: "Annual Report 2011" },
      { year: "2010", title: "Annual Report 2010" },
    ],
    "Quarterly Results": [
      { year: "25-26", quarter: "Q1", title: "Quarterly Results 2025-2026 - Q1" },
      { year: "24-25", quarter: "Q4", title: "Quarterly Results 2024-2025 - Q4" },
      { year: "24-25", quarter: "Q3", title: "Quarterly Results 2024-2025 - Q3" },
      { year: "24-25", quarter: "Q2", title: "Quarterly Results 2024-2025 - Q2" },
      { year: "24-25", quarter: "Q1", title: "Quarterly Results 2024-2025 - Q1" },
      { year: "23-24", quarter: "Q4", title: "Quarterly Results 2023-2024 - Q4" },
      { year: "23-24", quarter: "Q3", title: "Quarterly Results 2023-2024 - Q3" },
      { year: "22-23", quarter: "Q4", title: "Quarterly Results 2022-2023 - Q4" },
      { year: "21-22", quarter: "Q4", title: "Quarterly Results 2021-2022 - Q4" },
      { year: "20-21", quarter: "Q4", title: "Quarterly Results 2020-2021 - Q4" },
    ],
    "Related Party Disclosure": [
      { year: "2024", title: "Related Party Disclosure - 31 Mar 2024" },
      { year: "2023", title: "Related Party Transactions Policy - 30 Sep 2023" },
      { year: "2023", title: "Related Party Disclosure - 31 Mar 2023" },
      { year: "2022", title: "Related Party Disclosure - 30 Sep 2022" },
      { year: "2022", title: "Related Party Disclosure - 31 Mar 2022" },
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
          
          {/* LEFT SIDEBAR NAVIGATION */}
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

          {/* MAIN CONTENT AREA */}
          <main className="flex-1">
            {/* TOP TABS SECTION */}
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

            {/* PDF GRID DISPLAY */}
            <div className="bg-white p-6 rounded-b-lg border border-gray-100 shadow-sm min-h-[400px]">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 animate-in fade-in duration-500">
                {reportData[activeCategory].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    {/* PDF Card Icon */}
                    <div
                      className="w-full aspect-[3/4] flex flex-col items-center justify-center text-white rounded-md shadow-sm group-hover:shadow-lg transition-all transform group-hover:-translate-y-1 relative overflow-hidden"
                      style={{ backgroundColor: "#43bfb1" }}
                    >
                      <span className="text-[9px] uppercase tracking-widest opacity-80 mb-1">
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

                      {/* Hover Download Overlay */}
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <div className="bg-white p-2 rounded-full shadow-lg">
                          <Download size={18} style={{ color: "#43bfb1" }} />
                        </div>
                      </div>
                    </div>

                    {/* Title Under Card */}
                    <div className="mt-3 text-center px-1">
                      <p className="text-gray-700 text-[11px] font-semibold leading-tight line-clamp-2 group-hover:text-[#43bfb1] transition-colors h-8">
                        {item.title}
                      </p>
                      <div className="flex items-center justify-center gap-1 mt-2 text-[9px] text-gray-400 uppercase">
                        <FileText size={10} />
                        <span>PDF Document</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {reportData[activeCategory].length === 0 && (
                <div className="flex flex-col items-center justify-center py-20">
                  <FileText size={48} className="text-gray-200 mb-4" />
                  <p className="text-gray-400 font-medium">No documents found.</p>
                </div>
              )}
            </div>
          </main>

        </div>
      </div>
    </div>
  );
};

export default InvestorDocuments;