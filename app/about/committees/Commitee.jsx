import React from 'react';
import Image from 'next/image';

const committees = [
  {
    title: "Audit",
    highlight: "Committee",
    abbr: "AC",
    description: "The Audit Committee consists of 3 Directors. The Committee’s composition meets with requirements of Section 177 of the Companies Act, 2013 and Regulation 18 of SEBI (Listing Obligation and Disclosure Requirements) Regulations, 2015. The Audit Committee comprises of following Directors:",
    members: [
      { name: "Mr. Rituraj Peswani", role: "INDEPENDENT DIRECTOR", position: "CHAIRMAN", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
      { name: "Mr. Chittaranjan Parida", role: "INDEPENDENT DIRECTOR", position: "MEMBER", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
      { name: "Mr. Yashwant Vaswani", role: "INDEPENDENT DIRECTOR", position: "MEMBER", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
    ]
  },
  {
    title: "Nomination &",
    highlight: "Remuneration",
    abbr: "NR",
    description: "The Nomination and Remuneration Committee consists of three Independent Directors. The Committee’s composition meets with requirements of Section 178 of the Companies Act, 2013 and Regulation 19 of SEBI (Listing Obligation and Disclosure Requirements) Regulations, 2015. The Nomination and Remuneration Committee comprises of following Directors:",
    members: [
      { name: "Mr. Chittaranjan Parida", role: "INDEPENDENT DIRECTOR", position: "CHAIRMAN", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
      { name: "Mr. Rituraj Peswani", role: "INDEPENDENT DIRECTOR", position: "MEMBER", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
      { name: "Mr. Satya Narayan Gupta", role: "NON-EXECUTIVE DIRECTOR", position: "MEMBER", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
    ]
  },
  {
    title: "Stakeholders",
    highlight: "Relationship",
    abbr: "SR",
    description: "The Stakeholders Relationship Committee consists of three Independent Directors. The detailed composition of the members of the Stakeholders Relationship Committee at present is given below:",
    members: [
      { name: "Mr. Rituraj Peswani", role: "INDEPENDENT DIRECTOR", position: "CHAIRMAN", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
      { name: "Mr. Satya Narayan Gupta", role: "NON-EXECUTIVE DIRECTOR", position: "MEMBER", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
      { name: "Mr. Chittaranjan Parida", role: "INDEPENDENT DIRECTOR", position: "MEMBER", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
    ]
  },
  {
    title: "Finance &",
    highlight: "Investment",
    abbr: "FI",
    description: "The Board of Directors constituted a committee called Finance and Investment committee, pursuant to the provisions of sub-section 3 of section 179 of the Companies Act, 2013 for the purpose of delegation of powers mentioned in clause d to f of the above quoted section. The Committee consists of two Independent Directors and one Whole-time Director:",
    members: [
      { name: "Mr. Yashwant Vaswani", role: "WHOLE-TIME DIRECTOR", position: "CHAIRMAN", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
      { name: "Mr. Chittaranjan Parida", role: "INDEPENDENT DIRECTOR", position: "MEMBER", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
      { name: "Mr. Rituraj Peswani", role: "INDEPENDENT DIRECTOR", position: "MEMBER", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
    ]
  }
];

const brandColor = "#43bfb1";

const CommitteeSection = ({ committee }) => (
  <section className="mb-24 relative">
    <div className="absolute -right-4 -top-10 text-[12rem] font-bold opacity-[0.03] pointer-events-none select-none hidden lg:block" style={{ color: brandColor }}>
      {committee.abbr}
    </div>

    <div className="max-w-4xl mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
        {committee.title} <span style={{ color: brandColor }}>{committee.highlight}</span>
      </h2>
      <div className="w-16 h-1 mt-4 rounded-full" style={{ backgroundColor: brandColor }}></div>
      <p className="mt-6 text-sm text-gray-500 leading-relaxed max-w-2xl italic">
        {committee.description}
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {committee.members.map((member, idx) => (
        <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
          <div className="relative h-64 w-full bg-gray-50">
             <div 
              className="absolute top-4 left-4 z-10 px-3 py-1 text-[10px] text-white font-bold tracking-widest rounded-full uppercase"
              style={{ backgroundColor: brandColor }}
             >
               {member.position}
             </div>
             <Image 
                src={member.image} 
                alt={member.name} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
             />
          </div>
          
          <div className="p-5 border-t border-gray-50 text-center">
            <h3 className="text-base font-bold text-gray-800 tracking-tight">{member.name}</h3>
            <p className="text-[11px] font-semibold mt-1 tracking-widest uppercase opacity-80" style={{ color: brandColor }}>
              {member.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default function CommitteesPage() {
  return (
    <div className="bg-[#fcfcfc] min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20 text-center lg:text-left">
           <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Board Committees</h1>
           <p className="text-gray-400 text-lg">Strategic oversight and robust corporate governance structure.</p>
        </header>
        
        {committees.map((c, i) => (
          <CommitteeSection key={i} committee={c} />
        ))}
      </div>
    </div>
  );
}