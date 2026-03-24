import React from "react";
import About from "./About";
import Breadcrumbs from "@/components/Breadcrumbs";
import breadcrumbs from "@/public/breadcrumbs/breadcrumbs.jpg"
import ApproachSection from "../our-vision-&-mission/VisionandMission";
import Quote from "@/layout/Quote";

export default function page() {
  const breadcrumbLinks = [
    { label: "Home", url: "/" },
    { label: "About Venus", url: "/about" },
    { label: "Company", url: "/about/company" },
  ];
  return (
    <div className="pt-[5rem]">
      <Breadcrumbs title="Company" links={breadcrumbLinks} image={breadcrumbs} />
      <About />
      <ApproachSection/>
      <Quote/>
    </div>
  );
}
