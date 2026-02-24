import Image from "next/image";
import about from "@/public/homepage/home-grow-together.webp";

export default function WordFromCeo() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:gap-14 px-4 md:px-6 md:grid-cols-2 md:items-center">
        
        {/* IMAGE – mobile first */}
        <div className="relative h-[320px] md:h-[520px] w-full overflow-hidden rounded-xl">
          <Image
            src={about}
            alt="CEO Message"
            fill
            priority
            className="object-cover rounded-xl"
          />
        </div>

        {/* CONTENT */}
        <div>
          <span className="inline-block bg-[#43bfb115] text-[#43bfb1] px-4 py-1 text-xs md:text-sm font-medium">
            WORD FROM CEO
          </span>

          <h2 className="mt-4 mb-4 text-2xl md:text-4xl font-bold leading-snug text-gray-900">
            TRUST AND RESPECT WITHIN THE ORGANISATION
          </h2>

          <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-4">
            We as an Organisation strongly believe in patience, empathy and
            processes. When we began this journey as a family business, the
            steel market was on an extreme low. But with perseverance and team
            work, we were able to overcome.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-600">
            Our goal to create a niche for the brand was achieved throughout
            this journey. We also believe that it is important for every
            individual to take responsibility to fight their own battles and
            face their own struggles.
          </p>

          {/* CEO Signature */}
          <div className="mt-6">
            <p className="text-sm md:text-base font-medium text-gray-800">
              — Kushal Vaswani, CEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}