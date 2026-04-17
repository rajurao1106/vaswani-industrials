"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Local static image imports
import product1 from "@/public/homepage/img-FORGING INGOTS.webp";
import product2 from "@/public/homepage/img-SPONGE-IRON.webp";
import product3 from "@/public/homepage/img-POWER.webp";
import api from "@/lib/api";

export default function OurProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mapping slugs to images
  const imageMap = {
    "premium-sponge-iron": product2,
    "forging-ingots": product1,
    "power-division": product3,
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/api/products");
        // Ensure we are setting an array even if res.data is nested
        const data = Array.isArray(res.data) ? res.data : res.data.products || [];
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-500">
        Loading Products...
      </div>
    );
  }

  return (
    <section className="pb-14 md:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block bg-[#43bfb115] text-[#43bfb1] px-4 py-1 text-xs md:text-sm font-medium">
            WHAT WE OFFER
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mt-4">
            OUR PRODUCTS
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-4 md:mt-6">
            Our leadership assures that we are providing the best quality
            products possible for our devoted customers.
          </p>
        </div>

        {/* Dynamic Products Grid */}
        <div className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            // FIX: Convert slug to lowercase to avoid case-sensitivity issues
            const slug = product.urlSlug?.toLowerCase();
            const displayImage = imageMap[slug] || product1;

            return (
              <div
                key={product._id}
                className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition flex flex-col"
              >
                {/* Image Container */}
                <div className="relative w-full h-48 md:h-56">
                  <Image
                    src={displayImage}
                    alt={product.productName}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content Container */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="font-bold text-base md:text-lg mb-3 uppercase">
                    {product.productName}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">
                    {product.shortDescription}
                  </p>

                  {/* Navigation Link */}
                  <Link 
                    href={`/products/${product.urlSlug}`}
                    className="group inline-flex items-center w-fit text-sm text-white gap-3 rounded-full bg-[#43bfb1] px-1 pl-4 py-1 transition hover:bg-[#308a7f]"
                  >
                    Know More
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}