import React from "react";
import { Play } from "lucide-react";
import Web_slider_factory1 from "@/public/about/Web-slider-factory1.jpg";
import Image from "next/image";
import Button1 from "@/components/buttons/Button1";

const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:p-8 md:py-20 font-sans text-gray-700">
      {/* Changed grid-cols-1 to grid-cols-2 at md breakpoint */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Column: Image */}
        <div className="w-full">
          <div className="rounded-sm overflow-hidden shadow-sm">
            <Image
              src={Web_slider_factory1}
              alt="Factory Aerial View"
              className="w-full h-auto object-cover"
              priority // Recommended for "Above the fold" images
            />
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full">
          <div className="space-y-6 text-[15px] leading-relaxed">
            {/* Adjusted font size for mobile (text-3xl) vs desktop (md:text-4xl) */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight md:leading-snug">
              Vaswani Group of Industries is one of the reputed group of
              Chhattisgarh.
            </h1>
            
            <p className="mb-2">
              Over the last two decades the company has continuously diversified
              its product portfolio to include many customized value added
              products. The company firmly believes in benchmark product
              quality, customer centric approach, people focus, ethical business
              practices and good corporate citizenship.
            </p>
            <p className="mb-2">
              Over the last two decades the company has continuously diversified
              its product portfolio to include many customized value added
              products. The company firmly believes in benchmark product
              quality, customer centric approach, people focus, ethical business
              practices and good corporate citizenship.
            </p>

            <p className="mb-2">
              With vibrant and dedicated employees forming the core of our
              Group, we have grown from strength to strength under the dynamic
              leadership of our promoters and directors. Our combined experience
              has propelled our Group into the league of formidable steel
              players in Chhattisgarh.
            </p>
            
            <div className="pt-4">
              <Button1 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;