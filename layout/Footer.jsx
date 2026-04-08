"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/navbar/logo_Vaswani industries_v.png";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white">
      
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
    
        {/* About */}
        <div>
          <Image
            src={logo}
            alt="VIL Logo"
            width={120}
            height={120}
            className="mb-5 w-36 md:w-44 p-2 bg-white rounded"
          />
          <p className="text-sm text-gray-300 leading-relaxed">
            Vaswani Group of Industries is one of the reputed groups of
            Chhattisgarh. Our Group has a chain of value-added products including
            Induction Furnace, Sponge Iron, Power, Steel Billet, Rolling Mill,
            TMT Bars, Forgings & Casting.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 tracking-wide text-sm md:text-base">
            QUICK LINKS
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {["Careers", "Contact", "About", "News & Media"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-[#43bfb1] transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Investor */}
        <div>
          <h4 className="font-semibold mb-4 tracking-wide text-sm md:text-base">
            INVESTOR
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "Financials",
              "Annual Reports",
              "Company Announcements",
              "Policies",
              "Investor’s Contact",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-[#43bfb1] transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sister Concern */}
        <div>
          <h4 className="font-semibold mb-4 tracking-wide text-sm md:text-base">
            OUR SISTER CONCERN
          </h4>
          <p className="text-sm text-gray-300">
            Kwality Foundry Industries
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400 text-center md:text-left">
          <p>© 2022 | VASWANI GROUP OF INDUSTRIES</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="#" className="hover:text-white">
              Terms of use
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <span>
              Made with ❤️ by{" "}
              <span className="text-white">Digikraft Social</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}