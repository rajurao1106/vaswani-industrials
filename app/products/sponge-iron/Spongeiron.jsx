"use client"

import React, { useState } from 'react';
import { FileText } from 'lucide-react';

const Spongeiron = () => {
  const [activeTab, setActiveTab] = useState('forging');

  // Sidebar Menu Items
  const menuItems = [
    { id: 'forging', label: 'Forging Ingots & Billets' },
    { id: 'sponge', label: 'Sponge Iron' },
    { id: 'power', label: 'Power' },
  ];

  // Ingot Data Table
  const ingotSizes = [
    { id: 1, size: '10*12', type: 'Square', weight: 1300, mold: '75"', hotTop: '9"' },
    { id: 2, size: '12*14', type: 'Square', weight: 1700, mold: '75"', hotTop: '9"' },
    { id: 3, size: '14*16', type: 'Square', weight: 2300, mold: '75"', hotTop: '9"' },
    { id: 4, size: '17*19', type: 'Fluted', weight: 2600, mold: '75"', hotTop: '9"' },
    { id: 5, size: '19*21', type: 'Fluted', weight: 3200, mold: '75"', hotTop: '9"' },
    { id: 6, size: '22*24', type: 'Fluted', weight: 4200, mold: '75"', hotTop: '9"' },
    { id: 7, size: '25*28', type: 'Fluted', weight: 5200, mold: '75"', hotTop: '9"' },
    { id: 8, size: '28*33', type: 'Fluted', weight: 6200, mold: '75"', hotTop: '9"' },
    { id: 9, size: '30*33', type: 'Fluted', weight: 7150, mold: '75"', hotTop: '9"' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white font-sans text-gray-700">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* SIDEBAR */}
        <div className=" space-y-6">
          <nav className="bg-gray-100 border border-gray-200">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left px-6 py-4 border-b border-gray-200 last:border-0 transition-colors ${
                  activeTab === item.id ? 'bg-white text-gray-900 font-semibold' : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Download PDF Box */}
          <div className="bg-neutral-800 text-white flex items-center justify-between p-4 cursor-pointer hover:bg-neutral-700 transition-colors">
            <div className="flex items-center gap-3">
              <FileText size={32} strokeWidth={1.5} />
              <span className="text-xl font-bold uppercase tracking-tight">Download PDF</span>
            </div>
            <span className="text-sm text-gray-400">1.5 MB</span>
          </div>

          {/* Quick Fact Box */}
          <div className="bg-gray-100 p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Quick Fact</h3>
            <p className="text-gray-600 leading-relaxed italic">
              Vaswani Industries Limited is the largest producer of Sponge Iron in Central India.
            </p>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="w-full md:w-3/4">
          
          {/* Section: FORGING INGOTS & BILLETS */}
          {activeTab === 'forging' && (
            <div className="animate-in fade-in duration-500">
              <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 uppercase">
                Forging Ingots & Billets
              </span>
              <h1 className="text-2xl font-bold mt-6 mb-4 text-gray-800">
                We produce MS Alloy Ingots (Forging Quality) of different EN grades and sizes as per customer demands.
              </h1>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Presently we are having capacity of producing 6000 MT of Forging Quality, casting one heat of 10 metric tons Material. 
                We had successfully casted En-8, En-9, En-18, En-19, En-24, En-42, En-111, C-25, C-40, C-42, C-45 and 55Cr70.
              </p>
              
              <h4 className="font-semibold mb-4">Following are the sizes available:-</h4>
              <div className="overflow-x-auto border border-gray-300">
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
            </div>
          )}

          {/* Section: SPONGE IRON */}
          {activeTab === 'sponge' && (
            <div className="animate-in fade-in duration-500">
              <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 uppercase">
                Sponge Iron
              </span>
              <h1 className="text-2xl font-bold mt-6 mb-4 text-gray-800">
                Sponge iron is also known as Direct Reduced Iron (DRI), is the product of reducing iron oxide in the form of iron ore into metallic iron...
              </h1>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Sponge iron making is a process in which iron ore lumps (5mm-18mm size) are tumbled with a select grade of coal & dolomite 
                inside an inclined rotary kiln and control combusted in the presence of air for about 12 hours.
              </p>
              <div className="bg-gray-50 p-6 border-l-4 border-red-600">
                <h4 className="font-bold mb-3 uppercase text-xs tracking-widest text-gray-500">Basic Reduction Reactions</h4>
                <code className="block text-gray-800 space-y-1 font-mono text-sm">
                  C + O2 = CO2 <br />
                  CO2 + C = 2CO <br />
                  3Fe2O3 + CO = 2Fe3O4 + CO2 <br />
                  Fe3O4 + CO = 3FeO + CO2 <br />
                  FeO + CO = Fe + CO2
                </code>
              </div>
            </div>
          )}

          {/* Section: POWER */}
          {activeTab === 'power' && (
            <div className="animate-in fade-in duration-500">
              <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 uppercase">
                Power
              </span>
              <h1 className="text-2xl font-bold mt-6 mb-4 text-gray-800">
                M/s Vaswani Industries Limited has installed an 11.5 MW capacity power plant.
              </h1>
              <p className="text-gray-600 leading-relaxed">
                We utilize flue gas, and form steam from our 03 Waste heat recovery boilers (WHRB), in the form of renewable energy from 
                100 TPD sponge iron kilns. The Electricity Generated in the captive power plant is used by the steel Melting shop (SMS).
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Spongeiron;