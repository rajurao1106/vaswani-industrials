import React from "react";

export default function Button1() {
  return (
    <div className="mt-6 md:mt-8">
      <button className="group flex items-center gap-3 rounded-full text-white bg-[#43bfb1] px-1 pl-4 py-1 text-sm md:text-base font-medium transition hover:bg-[#308a7f]">
        Explore Our Businesses
        <span className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-white text-black transition group-hover:translate-x-1">
          →
        </span>
      </button>
    </div>
  );
}
