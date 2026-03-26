import React from "react";
import TeamSection from "./Director";
import Breadcrumbs from "@/components/Breadcrumbs";
import breadcrumbs from "@/public/breadcrumbs/breadcrumbs.jpg";
import Quote from "@/layout/Quote";
import Stats from "@/components/homepage/Stats";
import NewsMedia from "@/components/homepage/NewsMedia";
export default function page() {
  const breadcrumbLinks = [
    { label: "Home", url: "/" },
    { label: "Board Of directors", url: "/about/company" },
  ];
  return (
    <div className="pt-[6rem]">
      <Breadcrumbs
        title="About Us"
        links={breadcrumbLinks}
        image={breadcrumbs}
      />
      <TeamSection /> <Quote />
      <Stats />
      <NewsMedia />
    </div>
  );
}
