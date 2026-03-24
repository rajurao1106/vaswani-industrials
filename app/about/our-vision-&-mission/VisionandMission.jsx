import React from "react";

const Card = ({ image, title, description }) => (
  <div className="bg-white rounded-sm shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
    <div className="h-56 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-8 flex flex-col grow">
      <h3 className="text-[#0B0B45] text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6 text-sm grow">
        {description}
      </p>
      {/* <button className="text-[#0B0B45] font-bold text-sm flex items-center hover:text-orange-600 transition-colors uppercase tracking-wider">
        Explore More <span className="ml-1 text-lg leading-none">+</span>
      </button> */}
    </div>
  </div>
);

export default function ApproachSection() {
  const cards = [
    {
      title: "Our Vision",
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800",
      description: `Vaswani Industrial Limited strives to improve the industrial foundation of India through the effective use of staff and materials.
Our goal is to provide the highest quality goods to our customers while implementing environment-friendly practices that meet the most elevated global standards of environmental control policies.
We trust that profoundly talented and motivated employees are the way to accomplishing our goals and we will keep on providing outstanding training and investment in their future.`,
    },
    {
      title: "Our Mission",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
      description: `To be the most reputable and trustworthy distributor in India's steel, billet, iron, and sponge iron industries, providing service standards that will set the benchmark for the industry.`,
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        {/* <div className="text-center mb-16">
          <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">
            Our Approach
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-2 mb-6">
            Capitalise On Hanging
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-500 leading-relaxed">
              Incididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
        </div> */}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
