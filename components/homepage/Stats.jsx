"use client"

import React, { useState, useEffect } from "react";

const stats = [
  { value: 90000, unit: "MT", label: "Sponge Iron Manufacturing Capacity" },
  { value: 105000, unit: "MT", label: "Steel Billets Production Capacity" },
  { value: 11.5, unit: "MW", label: "Captive Thermal Power Plant" },
  { value: 16.25, unit: "MW", label: "Solar Energy Generation" },
];

const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Calculate the current number
      const current = progress * target;
      
      setCount(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  // Formatting logic: If it's a whole number, use LocaleString. If decimal, fix to 1 or 2 places.
  const isDecimal = target % 1 !== 0;
  const displayValue = isDecimal 
    ? count.toFixed(2).replace(/\.?0+$/, "") // Removes trailing zeros
    : Math.floor(count).toLocaleString();

  return <span>{displayValue}</span>;
};

export default function Stats() {
  return (
    <section className="pt-6 md:pt-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="relative md:-mt-24 rounded-xl bg-gray-50 py-6 md:py-8 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 divide-y md:grid-cols-4 md:divide-x md:divide-y-0">
            {stats.map((item, index) => (
              <div
                key={index}
                className="px-4 max-lg:py-6 md:px-6 text-center md:text-left"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  <AnimatedCounter target={item.value} />
                  <span className="ml-1 text-base md:text-lg font-semibold text-gray-600">
                    {item.unit}
                  </span>
                </h3>

                <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}