"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Use Next.js Link for better performance
import {
  ChevronDown,
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

import logo from "@/public/navbar/logo_Vaswani industries_h.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [investorOpen, setInvestorOpen] = useState(false);

  // ===== MENU DATA OBJECTS =====
  // Ab aap yahan manually koi bhi link daal sakte hain
  const aboutMenu = [
    { label: "The Company", href: "/about/the-company" },
    // { label: "Our Vision & Mission", href: "/about/vision-mission" },
    { label: "Chairman's Message", href: "/about/chairmans-message" },
    { label: "Board of Directors", href: "/about/board-of-directors" },
    { label: "Committees", href: "/about/committees" },
    {
      label: "Familiarization Programme",
      href: "/about/policy-on-familiarisation-programme",
    },
  ];

  const productMenu = [
    {
      label: "Forging Ingots/Billets",
      href: "/products/forging-ingots-and-billets",
    },
    { label: "Sponge Iron", href: "/products/sponge-iron" },
    { label: "Power", href: "/products/power" },
  ];

  const investorMenu = [
    { label: "Financials", href: "/investors/investor-financial" },
    { label: "Disclosures", href: "/investors/investor-disclosure" },
    { label: "Listing Information", href: "/investors/investor-listing" },
    { label: "Policies", href: "/investors/investor-policies" },
    { label: "SEBI Disclosure", href: "/investors/investor-disclosure-lodr" },
    { label: "Others", href: "/investors/investor-other" },
  ];

  return (
    <div className="relative ">
      <header className="w-full bg-white fixed z-50 ">
        {/* ===== Top Bar ===== */}
        <div className="flex max-lg:hidden items-center justify-between bg-gray-100 px-4 py-2 text-sm md:px-14">
          <div className="flex gap-6 text-gray-700">
            <div className="flex gap-2">
              <span className="font-semibold">CALL US</span>
              <span>+91 7713540221</span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">EMAIL US</span>
              <span>hrd@vaswaniindustries.com</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-black text-white p-1 rounded-full hover:bg-[#43bfb1] transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* ===== Navbar ===== */}
        <nav className="px-4 md:px-14 flex items-center justify-between py-3">
          <div className="w-36">
            <Link href="/">
              <Image src={logo} alt="logo" priority />
            </Link>
          </div>

          {/* ===== Desktop Menu ===== */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li className="hover:text-[#43bfb1] cursor-pointer">
              <Link href="/">Home</Link>
            </li>

            {/* ABOUT */}
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-[#43bfb1] py-2">
                About Us <ChevronDown size={14} />
              </div>
              <div
                className="absolute left-0 top-full opacity-0 invisible translate-y-2 
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
              transition-all duration-300 bg-white shadow-lg w-64 p-4 space-y-3 z-50 border-t-2 border-[#43bfb1]"
              >
                {aboutMenu.map((item, i) => (
                  <p key={i} className="hover:text-[#43bfb1] transition-colors">
                    <Link href={item.href}>{item.label}</Link>
                  </p>
                ))}
              </div>
            </li>

            {/* PRODUCTS */}
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-[#43bfb1] py-2">
                Our Products <ChevronDown size={14} />
              </div>
              <div
                className="absolute left-0 top-full opacity-0 invisible translate-y-2 
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
              transition-all duration-300 bg-white shadow-lg w-64 p-4 space-y-3 z-50 border-t-2 border-[#43bfb1]"
              >
                {productMenu.map((item, i) => (
                  <p key={i} className="hover:text-[#43bfb1] transition-colors">
                    <Link href={item.href}>{item.label}</Link>
                  </p>
                ))}
              </div>
            </li>

            <li className="hover:text-[#43bfb1] cursor-pointer">
              {" "}
              <Link href="/news">News & Media</Link>
            </li>

            {/* INVESTORS */}
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-[#43bfb1] py-2">
                Investors <ChevronDown size={14} />
              </div>
              <div
                className="absolute left-0 top-full opacity-0 invisible translate-y-2 
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
              transition-all duration-300 bg-white shadow-lg w-72 p-4 space-y-3 z-50 border-t-2 border-[#43bfb1]"
              >
                {investorMenu.map((item, i) => (
                  <p key={i} className="hover:text-[#43bfb1] transition-colors">
                    <Link href={item.href}>{item.label}</Link>
                  </p>
                ))}
              </div>
            </li>

            <Link href={"/careers"}>
              <li className="hover:text-[#43bfb1] cursor-pointer">Careers</li>
            </Link>
          </ul>

          <Link href={"/contact"}>
            <button className="hidden md:block rounded-md bg-[#43bfb1] px-4 py-2 text-sm text-white hover:bg-[#3ba599]">
              Contact Us
            </button>
          </Link>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {/* ===== Mobile Menu ===== */}
        {open && (
          <div className="md:hidden bg-white border-t px-6 py-4 space-y-4 text-sm font-medium h-screen overflow-y-auto">
            <div className="hover:text-[#43bfb1]">
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </div>

            {/* ABOUT MOBILE */}
            <div>
              <div
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex justify-between items-center cursor-pointer"
              >
                About Us{" "}
                <ChevronDown
                  size={14}
                  className={
                    aboutOpen
                      ? "rotate-180 transition-transform"
                      : "transition-transform"
                  }
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${aboutOpen ? "max-h-96 mt-2" : "max-h-0"}`}
              >
                <div className="pl-4 space-y-3 border-l-2 border-gray-100 ml-1">
                  {aboutMenu.map((item, i) => (
                    <p key={i} className="py-1">
                      <Link href={item.href} onClick={() => setOpen(false)}>
                        {item.label}
                      </Link>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* PRODUCTS MOBILE */}
            <div>
              <div
                onClick={() => setProductOpen(!productOpen)}
                className="flex justify-between items-center cursor-pointer"
              >
                Our Products{" "}
                <ChevronDown
                  size={14}
                  className={
                    productOpen
                      ? "rotate-180 transition-transform"
                      : "transition-transform"
                  }
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${productOpen ? "max-h-96 mt-2" : "max-h-0"}`}
              >
                <div className="pl-4 space-y-3 border-l-2 border-gray-100 ml-1">
                  {productMenu.map((item, i) => (
                    <p key={i} className="py-1">
                      <Link href={item.href} onClick={() => setOpen(false)}>
                        {item.label}
                      </Link>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* INVESTORS MOBILE */}
            <div>
              <div
                onClick={() => setInvestorOpen(!investorOpen)}
                className="flex justify-between items-center cursor-pointer"
              >
                Investors{" "}
                <ChevronDown
                  size={14}
                  className={
                    investorOpen
                      ? "rotate-180 transition-transform"
                      : "transition-transform"
                  }
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${investorOpen ? "max-h-96 mt-2" : "max-h-0"}`}
              >
                <div className="pl-4 space-y-3 border-l-2 border-gray-100 ml-1">
                  {investorMenu.map((item, i) => (
                    <p key={i} className="py-1">
                      <Link href={item.href} onClick={() => setOpen(false)}>
                        {item.label}
                      </Link>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="hover:text-[#43bfb1]">Careers</div>
            <button className="w-full mt-4 rounded-md bg-[#43bfb1] py-3 text-white">
              Contact Us
            </button>
          </div>
        )}
      </header>
    </div>
  );
}
