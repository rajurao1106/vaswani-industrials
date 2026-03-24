"use client"; // Required for Framer Motion in Next.js App Router

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Breadcrumbs = ({ links, title, image }) => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1, // Delays each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative w-full py-24 md:py-30 bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Scale-in effect */}
      {image && (
        <motion.div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover  opacity-60"
            priority
          />
        </motion.div>
      )}

      {/* Content Container */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Dynamic Page Title */}
        <motion.h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
          {title}
        </motion.h1>

        {/* Breadcrumb Navigation */}
        <nav className="flex text-sm font-medium uppercase tracking-tight">
          {links.map((link, index) => (
            <motion.div key={index} className="flex items-center">
              <a
                href={link.url}
                className={`hover:text-[#43bfb1] transition-colors ${
                  index === links.length - 1
                    ? "text-[#43bfb1] pointer-events-none"
                    : "text-white"
                }`}
              >
                {link.label}
              </a>

              {/* Separator */}
              {index < links.length - 1 && (
                <span className="mx-2 text-white/50 px-2">/</span>
              )}
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </div>
  );
};

export default Breadcrumbs;
