"use client";

import React, { useState, useEffect } from "react";

const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = progress * target;
      setCount(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  const isDecimal = target % 1 !== 0;
  const displayValue = isDecimal
    ? count.toFixed(2).replace(/\.?0+$/, "")
    : Math.floor(count).toLocaleString();

  return <span>{displayValue}</span>;
};

export default function Stats() {
  const [statsData, setStatsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Direct API URL used here
        const res = await fetch("https://vil-cms-dhct.vercel.app/api/stats");
        
        if (!res.ok) throw new Error("Network response was not ok");
        
        const data = await res.json();
        const sortedData = data.sort((a, b) => a.order - b.order);
        setStatsData(sortedData);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading || statsData.length === 0) return null;

  return (
    <section className="pt-6 md:pt-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="relative md:-mt-24 rounded-xl bg-gray-50 py-6 md:py-8 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 divide-y md:grid-cols-4 md:divide-x md:divide-y-0">
            {statsData.map((item) => (
              <div
                key={item._id}
                className="px-4 max-lg:py-6 md:px-6 text-center md:text-left"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  <AnimatedCounter target={Number(item.value)} />
                  <span className="ml-1 text-base md:text-lg font-semibold text-gray-600">
                    {item.unit}
                  </span>
                </h3>

                <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}