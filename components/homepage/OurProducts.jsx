import Image from "next/image";
import product1 from "@/public/homepage/img-FORGING INGOTS.webp";
import product2 from "@/public/homepage/img-SPONGE-IRON.webp";
import product3 from "@/public/homepage/img-POWER.webp";

export default function OurProducts() {
  const products = [
    {
      title: "FORGING INGOTS & BILLETS",
      image: product1,
      desc: "We have wide range of section size from 100 mm x 100 mm to 250 mm x 250 mm and bloom size 280 mm x 320 mm along with BIS marked products of IS-2830 and IS-2831. Supplies are customized as per customer requirements.",
    },
    {
      title: "SPONGE IRON",
      image: product2,
      desc: "Sponge iron (Direct Reduced Iron) is produced by reducing iron oxide below the melting point and is widely used as a substitute for scrap in induction and electric arc furnaces.",
    },
    {
      title: "POWER",
      image: product3,
      desc: "We operate an 11.5 MW power plant supporting our Sponge Iron and Steel divisions, utilizing flue gas through waste heat recovery boilers (WHRB) to generate renewable energy.",
    },
  ];

  return (
    <section className="pb-14 md:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Heading */}
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

        {/* Products */}
        <div className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {products.map((item, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative w-full h-48 md:h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="font-bold text-base md:text-lg mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {item.desc}
                </p>

                <button className="group flex text-sm text-white items-center gap-3 rounded-full bg-[#43bfb1] px-1 pl-4 py-1 transition hover:bg-[#308a7f]">
                  Know More
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}