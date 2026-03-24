import React from "react";
import { Play } from "lucide-react";
import Web_slider_factory1 from "@/public/about/Web-slider-factory1.jpg";
import Image from "next/image";
import Button1 from "@/components/buttons/Button1";

const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto p-8 py-20 font-sans text-gray-700">
      <div className="grid grid-cols-2 gap-10">
        {/* Left Column: Image and Badges */}
        <div className=" w-full">
          <div className="rounded-sm overflow-hidden shadow-sm">
            <Image
              src={Web_slider_factory1}
              alt="Factory Aerial View"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full">
          {/* <h2 className="text-2xl font-semibold text-[#43bfb1] mb-6">
            Who We Are ?
          </h2> */}

          <div className="space-y-6 text-[15px] leading-relaxed mb-4">
            <p className="text-4xl font-bold text-gray-900 leading-snug mb-4">
              Vaswani Group of Industries is one of the reputed group of
              Chhattisgarh.
            </p>
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
            <Button1/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
