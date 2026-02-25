import Image from "next/image";
import hero from "@/public/homepage/Web-slider-factory1.webp";

export default function Hero() {
  return (
    <section className="px-3 py-3 max-lg:pt-20  md:px-6 pt-26">
      <div className="relative h-[90vh] md:h-screen w-full overflow-hidden rounded-2xl md:rounded-3xl">
        {/* Background Image */}
        <Image
          src={hero}
          alt="Industry"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
          <div className="max-w-xl md:max-w-4xl text-white">
            {/* Small label */}
            <span className="mx-auto mb-3 inline-block rounded-full border border-white/30 px-3 py-1 text-[10px] md:text-xs tracking-wide backdrop-blur">
              Industrial Strength. Sustainable Energy.
            </span>

            {/* Heading */}
            <h1 className="mt-4 text-2xl leading-snug font-bold sm:text-3xl md:text-5xl mb-4">
              Integrated Steel Manufacturer in India with Captive Power & Solar
              Energy
            </h1>

            {/* Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-white/90">
              Vaswani Industries Limited is a leading integrated steel
              manufacturing company in India producing sponge iron, steel
              billets, rolling mill products, forgings, and casting supported by
              captive thermal power generation and solar energy infrastructure.
            </p>

            {/* Button */}
            <div className="mt-6 md:mt-8 flex justify-center">
              <button className="group flex items-center gap-3 rounded-full bg-[#43bfb1] px-1 pl-4 py-1 text-sm md:text-base font-medium transition hover:bg-[#308a7f]">
                Explore Our Businesses
                <span className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-white text-black transition group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
