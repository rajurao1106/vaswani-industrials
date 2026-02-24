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
          <div className="max-w-xl md:max-w-2xl text-white">
            {/* Small label */}
            <span className="mx-auto mb-3 inline-block rounded-full border border-white/30 px-3 py-1 text-[10px] md:text-xs tracking-wide backdrop-blur">
              EVERY DETAIL IS ELEGANT
            </span>

            {/* Heading */}
            <h1 className="mt-4 text-2xl leading-snug font-bold sm:text-3xl md:text-5xl mb-4">
              Manufacturing the building blocks of the world.
            </h1>

            {/* Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-white/90">
              A chain of value-added products which include Induction Furnance,
              Sponge Iron, Power, Steel Billet, Rolling Mill, Forgings & Casting.
            </p>

            {/* Button */}
            <div className="mt-6 md:mt-8 flex justify-center">
              <button className="group flex items-center gap-3 rounded-full bg-[#43bfb1] px-1 pl-4 py-1 text-sm md:text-base font-medium transition hover:bg-[#308a7f]">
                Know More
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