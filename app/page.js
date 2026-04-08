import About from "@/components/homepage/About";
import CTA from "@/components/homepage/CTA";
import Hero from "@/components/homepage/Hero";
import NewsMedia from "@/components/homepage/NewsMedia";
import OurProducts from "@/components/homepage/OurProducts";
import Stats from "@/components/homepage/Stats";
import WordFromCeo from "@/components/homepage/WordFromCeo";
import React from "react";

// ✅ SEO Metadata
export const metadata = {
  title: "Vaswani Industries | Innovative Products & Solutions",
  description:
    "Discover Vaswani Industries – offering innovative products, trusted solutions, and industry expertise. Learn more about our journey, products, and vision.",
  keywords: [
    "Vaswani Industries",
    "innovative products",
    "business solutions",
    "industry leader",
    "trusted brand",
    "company profile",
    "products and services",
  ],
};

export default function Page() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <OurProducts />
      <NewsMedia />
      <CTA />
    </main>
  );
}
