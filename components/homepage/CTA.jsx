"use client";

import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Loader2 } from "lucide-react";

export default function ContactCTA() {
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching the data from your API
    const fetchData = async () => {
      try {
        const response = await fetch("https://vil-cms-dhct.vercel.app/api/contact-page-settings/contact-info");
        const data = await response.json();
        setContactData(data);
      } catch (error) {
        console.error("Error fetching contact info:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Show a loader while the data is fetching
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 bg-gray-100">
        <Loader2 className="animate-spin text-[#43bfb1]" size={32} />
      </div>
    );
  }

  // If no data is returned, don't render the section
  if (!contactData) return null;

  return (
    <section className="relative bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
        
        {/* Info Strip */}
        <div className="bg-white/95 text-gray-900 rounded-xl shadow-lg px-6 md:px-8 py-8 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 md:divide-x divide-gray-200">
          
          {/* Head Office - Mapping from websiteUrl key as per your JSON */}
          <div className="flex gap-3 md:gap-4 md:pr-6">
            <MapPin className="text-[#43bfb1] mt-1 shrink-0" size={22} />
            <div>
              <h4 className="font-semibold text-base md:text-lg mb-2 uppercase">
                Head Office
              </h4>
              <p className="text-sm leading-relaxed text-gray-700">
                {contactData.websiteUrl}
              </p>
            </div>
          </div>

          {/* Call Us - Mapping from hrPhone and adminPhone */}
          <div className="flex gap-3 md:gap-4 md:px-6">
            <Phone className="text-[#43bfb1] mt-1 shrink-0" size={22} />
            <div>
              <h4 className="font-semibold text-base md:text-lg mb-2 uppercase">
                Call Us
              </h4>
              <p className="text-sm text-gray-700">
                HR:{" "}
                <a href={`tel:${contactData.hrPhone}`} className="hover:text-[#43bfb1]">
                  {contactData.hrPhone}
                </a>
              </p>
              <p className="text-sm text-gray-700">
                ADMIN:{" "}
                <a href={`tel:${contactData.adminPhone}`} className="hover:text-[#43bfb1]">
                  {contactData.adminPhone}
                </a>
              </p>
            </div>
          </div>

          {/* Email Us - Mapping from primaryEmailHR and adminEmail */}
          <div className="flex gap-3 md:gap-4 md:pl-6">
            <Mail className="text-[#43bfb1] mt-1 shrink-0" size={22} />
            <div>
              <h4 className="font-semibold text-base md:text-lg mb-2 uppercase">
                Email Us
              </h4>
              <p className="text-sm text-gray-700">
                <a
                  href={`mailto:${contactData.primaryEmailHR}`}
                  className="hover:text-[#43bfb1]"
                >
                  {contactData.primaryEmailHR}
                </a>
              </p>
              <p className="text-sm text-gray-700">
                <a
                  href={`mailto:${contactData.adminEmail}`}
                  className="hover:text-[#43bfb1]"
                >
                  {contactData.adminEmail}
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}