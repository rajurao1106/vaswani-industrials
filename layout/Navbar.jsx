"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

  return (
   <div className="relative ">
    <header className="w-full bg-white fixed z-50">
      {/* ===== Top Bar ===== */}
      <div className="flex max-lg:hidden items-center justify-between bg-gray-100 px-4 py-2 text-sm md:px-14">
        {/* Contact Info (Desktop only) */}
        <div className=" items-center flex gap-6 text-gray-700">
          <div className="flex gap-2">
            <span className="font-semibold">CALL US</span>
            <span>+91 7713540221</span>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold">EMAIL US</span>
            <span>hrd@vaswaniindustries.com</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {[Facebook, Twitter, Linkedin].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="bg-black text-white p-1 rounded-full hover:text-[#43bfb1]"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <nav className="px-4 md:px-14 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="w-36">
          <Image src={logo} alt="logo" priority />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li className="hover:text-[#43bfb1] cursor-pointer">Home</li>
          <li className="flex items-center gap-1 hover:text-[#43bfb1] cursor-pointer">
            About Us <ChevronDown size={14} />
          </li>
          <li className="flex items-center gap-1 hover:text-[#43bfb1] cursor-pointer">
            Our Products <ChevronDown size={14} />
          </li>
          <li className="hover:text-[#43bfb1] cursor-pointer">News & Media</li>
          <li className="flex items-center gap-1 hover:text-[#43bfb1] cursor-pointer">
            Investors <ChevronDown size={14} />
          </li>
          <li className="hover:text-[#43bfb1] cursor-pointer">Careers</li>
          <li className="hover:text-[#43bfb1] cursor-pointer">Contact</li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block rounded-md bg-[#43bfb1] px-4 py-2 text-sm text-white hover:bg-[#3ba599]">
          Get A Quote
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* ===== Mobile Menu ===== */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4 text-sm font-medium">
          <div className="hover:text-[#43bfb1]">Home</div>
          <div className="flex justify-between items-center hover:text-[#43bfb1]">
            About Us <ChevronDown size={14} />
          </div>
          <div className="flex justify-between items-center hover:text-[#43bfb1]">
            Our Products <ChevronDown size={14} />
          </div>
          <div className="hover:text-[#43bfb1]">News & Media</div>
          <div className="flex justify-between items-center hover:text-[#43bfb1]">
            Investors <ChevronDown size={14} />
          </div>
          <div className="hover:text-[#43bfb1]">Careers</div>
          <div className="hover:text-[#43bfb1]">Contact</div>

          <button className="w-full mt-4 rounded-md bg-[#43bfb1] py-2 text-white">
            Get A Quote
          </button>
        </div>
      )}
    </header>
   </div> 
  );
}