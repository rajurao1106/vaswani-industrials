import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen p-8 md:p-16 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Section 1: Top Contact Cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">You can reach us at:</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Plant Address */}
            <div className="border border-gray-100 shadow-sm p-8 rounded-sm">
              <h3 className="text-xl font-bold mb-6">Plant Address</h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-gray-300 shrink-0" />
                  <p>Vaswani Industries Limited, Sondra, Phase - II, Bahesar Road, Siltara, Raipur, CG</p>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-gray-300 shrink-0" />
                  <div className="flex flex-col">
                    <span>+91 07713540221</span>
                    <span>+91 07713540202</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-gray-300 shrink-0" />
                  <span>hrd@vaswaniindustries.com</span>
                </div>
              </div>
            </div>

            {/* City Office */}
            <div className="border border-gray-100 shadow-sm p-8 rounded-sm">
              <h3 className="text-xl font-bold mb-6">City Office</h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-gray-300 shrink-0" />
                  <p>Shop No. 13, Vijeta Complex, next to Naivedya Sweets, Shastri Market, Raipur C.G.- 492001</p>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-gray-300 shrink-0" />
                  <span>+91 07713540202</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Designated Officials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Contact of designated officials:</h2>
          <div className="max-w-xl border border-gray-100 shadow-sm p-8 rounded-sm">
            <h3 className="text-lg font-bold mb-1">Monali Makhija</h3>
            <p className="text-gray-400 text-sm mb-6">Company Secretary & Compliance Officer</p>
            
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-gray-300 shrink-0" />
                <p>Bahesar Road, Near Cycle Park, Vill-Sondra Phase-II, Industrial Area, Siltara, Raipur (C.G.) 493221</p>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-gray-300 shrink-0" />
                <span>0771-3540221</span>
              </div>
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-gray-300 shrink-0" />
                <span>complianceofficer@vaswaniindustries.com</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Form and Map */}
        <section className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
            <form className="bg-gray-50 p-8 space-y-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full p-3 border border-gray-200 outline-none focus:border-gray-400 transition-colors"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full p-3 border border-gray-200 outline-none focus:border-gray-400 transition-colors"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full p-3 border border-gray-200 outline-none focus:border-gray-400 transition-colors"
              />
              <textarea 
                placeholder="Message" 
                rows={6}
                className="w-full p-3 border border-gray-200 outline-none focus:border-gray-400 transition-colors resize-none"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-[#1a1a15] text-white py-3 font-bold tracking-widest hover:bg-black transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">View Map</h2>
            <div className="w-full h-[450px] bg-gray-200 relative overflow-hidden">
              {/* Replace the src with a real Google Maps Embed API key if needed */}
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.757353955612!2d81.6791666!3d21.3601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28eb9f3c7e7f61%3A0xc6c4f8d384061a99!2sVaswani%20Industries%20Limited!5e0!3m2!1sen!2sin!4v1711182000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ContactPage;