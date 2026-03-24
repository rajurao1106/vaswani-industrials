import React from 'react';

const committees = [
  {
    title: "Audit",
    highlight: "Committee",
    abbr: "AC",
    description: "The Audit Committee consists of 3 Directors. The Committee's composition meets with requirements of Section 177 of the Companies Act, 2013 and Regulation 18 of SEBI (Listing Obligation and Disclosure Requirements) Regulations, 2015.",
    members: [
      { name: "Mr. Rituraj Peswani", role: "INDEPENDENT DIRECTOR", position: "CHAIRMAN", color: "bg-blue-600" },
      { name: "Mr. Chittaranjan Parida", role: "INDEPENDENT DIRECTOR", position: "MEMBER", color: "bg-blue-600" },
      { name: "Mr. Yashwant Vaswani", role: "INDEPENDENT DIRECTOR", position: "MEMBER", color: "bg-blue-600" },
    ]
  },
  {
    title: "Nomination &",
    highlight: "Remuneration",
    abbr: "NR",
    description: "The Nomination and Remuneration Committee consists of three Independent Directors. The Committee's composition meets with requirements of Section 178 of the Companies Act, 2013 and Regulation 19 of SEBI (Listing Obligation and Disclosure Requirements) Regulations, 2015.",
    members: [
      { name: "Mr. Chittaranjan Parida", role: "INDEPENDENT DIRECTOR", position: "CHAIRMAN", color: "bg-blue-900" },
      { name: "Mr. Rituraj Peswani", role: "INDEPENDENT DIRECTOR", position: "MEMBER", color: "bg-blue-900" },
      { name: "Mr. Satya Narayan Gupta", role: "NON-EXECUTIVE DIRECTOR", position: "MEMBER", color: "bg-blue-900" },
    ]
  },
  {
    title: "Stakeholders",
    highlight: "Relationship",
    abbr: "SR",
    description: "The Stakeholders Relationship Committee consists of three Directors. The detailed composition of the members of the Stakeholders Relationship Committee at present is given below.",
    members: [
      { name: "Mr. Rituraj Peswani", role: "INDEPENDENT DIRECTOR", position: "CHAIRMAN", color: "bg-emerald-700" },
      { name: "Mr. Satya Narayan Gupta", role: "NON-EXECUTIVE DIRECTOR", position: "MEMBER", color: "bg-emerald-700" },
      { name: "Mr. Chittaranjan Parida", role: "INDEPENDENT DIRECTOR", position: "MEMBER", color: "bg-emerald-700" },
    ]
  },
  {
    title: "Finance &",
    highlight: "Investment",
    abbr: "FI",
    description: "The Board of Directors constituted a committee called Finance and Investment Committee, pursuant to the provisions of sub-section 3 of section 179 of the Companies Act, 2013 for the purpose of delegation of powers.",
    members: [
      { name: "Mr. Yashwant Vaswani", role: "WHOLE-TIME DIRECTOR", position: "CHAIRMAN", color: "bg-purple-700" },
      { name: "Mr. Chittaranjan Parida", role: "INDEPENDENT DIRECTOR", position: "MEMBER", color: "bg-purple-700" },
      { name: "Mr. Rituraj Peswani", role: "INDEPENDENT DIRECTOR", position: "MEMBER", color: "bg-purple-700" },
    ]
  }
];

const CommitteeSection = ({ committee }) => (
  <section className="mb-20 relative">
    {/* Large Background Abbreviation */}
    {/* <div className="absolute right-0 top-0 text-8xl md:text-9xl font-serif font-bold opacity-5 text-gray-400 select-none">
      {committee.abbr}
    </div> */}

    <div className="max-w-4xl mb-10">
      <h2 className="text-3xl font-serif font-light text-gray-800">
        {committee.title} <span className="text-blue-700 font-normal">{committee.highlight}</span>
      </h2>
      <p className="mt-4 text-xs text-gray-500 leading-relaxed max-w-2xl">
        {committee.description}
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {committee.members.map((member, idx) => (
        <div key={idx} className="bg-white shadow-sm border border-gray-100 flex flex-col">
          {/* Image Placeholder Area */}
          <div className="relative h-48 bg-[#f2f0eb] flex items-end justify-center overflow-hidden">
             <div className={`${member.color} absolute top-0 left-0 right-0 h-1`}></div>
             <div className={`${member.color} absolute top-0 left-0 px-3 py-1 text-[10px] text-white font-bold tracking-tighter`}>
               {member.position}
             </div>
             {/* Simple Avatar Silhouette */}
             <div className="w-32 h-32 bg-slate-700 rounded-t-full opacity-80 mb-[-10px]"></div>
          </div>
          
          {/* Member Details */}
          <div className="p-4 flex-grow border-t border-gray-100">
            <h3 className="text-sm font-semibold text-gray-800">{member.name}</h3>
            <p className="text-[10px] text-blue-700 font-bold mt-1 tracking-wider">{member.role}</p>
          </div>
          
          {/* Footer Label */}
          <div className="px-4 py-3 border-t border-gray-50 flex items-center gap-2">
            <div className={`w-5 h-5 rounded-full ${member.color} opacity-20 flex items-center justify-center text-[8px] font-bold text-gray-800`}>
              {member.name.split(' ').map(n => n[0]).join('').substring(1,3)}
            </div>
            <span className="text-[9px] text-gray-400 uppercase tracking-tight">
                {committee.title} {committee.highlight}
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default function CommitteesPage() {
  return (
    <div className="bg-[#fdfcf9] min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {committees.map((c, i) => (
          <CommitteeSection key={i} committee={c} />
        ))}
      </div>
    </div>
  );
}