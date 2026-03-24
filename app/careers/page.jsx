import React from 'react';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Header Section */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          APPLY FOR WORK
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Manpower Requisition & Job Application
        </p>
        
        <div className="flex justify-center gap-4">
          <button className="bg-gray-900 text-white px-8 py-2 rounded font-semibold hover:bg-black transition-colors">
            HIRE
          </button>
          <button className="bg-gray-900 text-white px-8 py-2 rounded font-semibold hover:bg-black transition-colors">
            APPLY FOR JOB
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 pb-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 tracking-tight">
          OPEN POSITIONS
        </h2>

        {/* Job Card */}
        <div className="bg-white border-b border-gray-200 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Test career</h3>
            <div className="inline-block bg-gray-100 text-gray-600 px-3 py-1 text-sm rounded">
              Required experience : 2+ years
            </div>
          </div>
          
          <div>
            <button 
              className="text-white px-6 py-3 rounded font-bold uppercase tracking-wide transition-transform active:scale-95 shadow-sm"
              style={{ backgroundColor: '#43bfb1' }} // Using your specific color code
            >
              View and Apply
            </button>
          </div>
        </div>

        {/* Horizontal Line for design consistency */}
        <div className="border-b border-gray-200 w-full"></div>
      </main>
    </div>
  );
}