"use client"

import React, { useState, useEffect } from "react";

const Card = ({ image, title, description }) => (
  <div className="bg-white rounded-sm shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
    <div className="h-56 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-8 flex flex-col grow">
      <h3 className="text-[#0B0B45] text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6 text-sm grow">
        {description}
      </p>
    </div>
  </div>
);

export default function ApproachSection() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://vil-cms-dhct.vercel.app/api/vision-mission");
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("Error fetching vision-mission data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Default fallback content if API is loading or fails
  const cards = [
    {
      title: "Our Vision",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800",
      description: apiData?.visionStatement || "Loading vision statement..."
    },
    {
      title: "Our Mission",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
      description: apiData?.missionStatement || "Loading mission statement..."
    },
  ];

  if (loading) return <div className="py-20 text-center">Loading content...</div>;

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Optional: Use the sectionTitle from API */}
        <h2 className="text-[#0B0B45] text-3xl font-bold mb-12 text-center uppercase">
          {apiData?.sectionTitle || "Our Approach"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}