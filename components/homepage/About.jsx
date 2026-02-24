import Image from "next/image";
import about from "@/public/homepage/img-about-1.webp";

export default function About() {
  return (
    <section className="bg-[#f6f9fa] py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:gap-14 px-4 md:px-6 md:grid-cols-2 md:items-start">
        
        {/* LEFT – IMAGE */}
        <div className="relative h-[320px] md:h-[520px] w-full overflow-hidden rounded-xl">
          <Image
            src={about}
            alt="Industrial Plant"
            fill
            priority
            className="
              object-cover rounded-xl
              md:[clip-path:path('M_0,60_A_10,10_0,0,1_10,50_L_250,50_A_10,10_0,0,0_260,40_L_260,10_A_10,10_0,0,1_270,0_L_590,0_L_580,460_A_10,10_0,0,1_570,470_L_350,470_A_10,10_0,0,0_340,480_L_340,510_A_10,10_0,0,1_330,520_L_280,520_L_0,520_Z')]
            "
          />
        </div>

        {/* RIGHT – CONTENT */}
        <div>
          <span className="inline-block bg-[#43bfb115] text-[#43bfb1] px-4 py-1 text-xs md:text-sm font-medium">
            VASWANI INDUSTRIES LIMITED
          </span>

          <h2 className="mt-4 mb-4 text-2xl md:text-4xl font-bold leading-snug text-gray-900">
            We’re More than an Industrial Company
          </h2>

          <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-4">
            Vaswani Group of Industries, one of the most reputed group of
            Chhattisgarh has been able to grow and create a mark in Central
            India&apos;s largest manufacturing unit. Over the last two decades
            the company has continuously diversified its product portfolio to
            include many customized value added products.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-600">
            With vibrant and dedicated employees forming the core of our Group,
            we have grown from strength to strength under the dynamic leadership
            of our promoters and directors.
          </p>

          {/* CTA */}
          <div className="mt-6">
            <button className="group flex items-center gap-3 rounded-full bg-[#43bfb1] px-1 pl-4 py-1 text-sm md:text-base font-medium text-white transition hover:bg-[#308a7f]">
              Know More
              <span className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-white text-black transition group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}