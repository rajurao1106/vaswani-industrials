import React from "react";
import Committee from "./Commitee";
import Breadcrumbs from "@/components/Breadcrumbs";
import breadcrumbs from "@/public/breadcrumbs/breadcrumbs.jpg";
import ApproachSection from "../our-vision-&-mission/VisionandMission";
import Quote from "@/layout/Quote";
import Stats from "@/components/homepage/Stats";
import NewsMedia from "@/components/homepage/NewsMedia";
export default function page() {
  const breadcrumbLinks = [
    { label: "Home", url: "/" },
    { label: "Board Committees", url: "/about/company" },
  ];
  return (
    <div className="pt-[6rem]">
      <Breadcrumbs
        title="About Us"
        links={breadcrumbLinks}
        image={breadcrumbs}
      />
      <Committee /> <Quote />
      <Stats />
      <NewsMedia />
    </div>
  );
}
