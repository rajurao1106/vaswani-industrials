"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';

const brandColor = "#43bfb1";

const CommitteeSection = ({ committee, staticData }) => {
  // Initials generate karne ke liye logic (e.g., Audit Committee -> AC)
  const abbr = committee.committeeName
    .split(' ')
    .filter(word => word.toLowerCase() !== 'and' && word !== '&')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return (
    <section className="mb-24 relative">
      {/* Background Large Text */}
      <div className="absolute -right-4 -top-10 text-[12rem] font-bold opacity-[0.03] pointer-events-none select-none hidden lg:block" style={{ color: brandColor }}>
        {abbr}
      </div>

      <div className="max-w-4xl mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          {staticData.title} <span style={{ color: brandColor }}>{staticData.highlight}</span>
        </h2>
        <div className="w-16 h-1 mt-4 rounded-full" style={{ backgroundColor: brandColor }}></div>
        <p className="mt-6 text-sm text-gray-500 leading-relaxed max-w-2xl italic">
          {staticData.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {committee.members.map((member, idx) => (
          <div key={member._id || idx} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="relative h-64 w-full bg-gray-50">
               <div 
                className="absolute top-4 left-4 z-10 px-3 py-1 text-[10px] text-white font-bold tracking-widest rounded-full uppercase"
                style={{ backgroundColor: brandColor }}
               >
                 {member.designation}
               </div>
               {/* UI Avatars use kiya hai kyunki backend mein image nahi hai */}
               <Image 
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f3f4f6&color=43bfb1&size=400`} 
                  alt={member.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
               />
            </div>
            
            <div className="p-5 border-t border-gray-50 text-center">
              <h3 className="text-base font-bold text-gray-800 tracking-tight">{member.name}</h3>
              <p className="text-[11px] font-semibold mt-1 tracking-widest uppercase opacity-80" style={{ color: brandColor }}>
                {member.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function CommitteesPage() {
  const [committeesData, setCommitteesData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Aapka original static content
  const staticContent = {
    "Management Committee": {
      title: "Management",
      highlight: "Committee",
      description: "The Management Committee consists of specialized Directors. The Committee’s composition meets with the requirements of company operations and strategic decisions. The Committee comprises of following Directors:"
    },
    "Audit Committee": {
      title: "Audit",
      highlight: "Committee",
      description: "The Audit Committee consists of 3 Directors. The Committee’s composition meets with requirements of Section 177 of the Companies Act, 2013 and Regulation 18 of SEBI Regulations, 2015."
    },
    // Add other committees here if they exist in DB
  };

  useEffect(() => {
    const fetchCommittees = async () => {
      try {
        const response = await fetch("https://vil-cms-dhct.vercel.app/api/committees");
        const data = await response.json();
        setCommitteesData(data);
      } catch (error) {
        console.error("Error fetching committees:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCommittees();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="animate-spin text-[#43bfb1]" size={40} />
      </div>
    );
  }

  return (
    <div className="bg-[#fcfcfc] min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20 text-center lg:text-left">
           <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Board Committees</h1>
           <p className="text-gray-400 text-lg">Strategic oversight and robust corporate governance structure.</p>
        </header>
        
        {committeesData.map((c, i) => (
          <CommitteeSection 
            key={c._id || i} 
            committee={c} 
            staticData={staticContent[c.committeeName] || {
              title: c.committeeName,
              highlight: "",
              description: c.description
            }} 
          />
        ))}
      </div>
    </div>
  );
}