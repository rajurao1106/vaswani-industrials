import React from "react";
import InvestorOther from "./InvestorOther";
import Breadcrumbs from "@/components/Breadcrumbs";
import breadcrumbs from "@/public/breadcrumbs/breadcrumbs.jpg";
import Quote from "@/layout/Quote";
export default function page() {
  const breadcrumbLinks = [
    { label: "Home", url: "/" },
    { label: "Others", url: "/about/company" },
  ];
  return (
   <div className="pt-[6rem]">
      <Breadcrumbs
        title="Investors"
        links={breadcrumbLinks}
        image={breadcrumbs}
      />
      <InvestorOther />
      <Quote/>
    </div>
  );
}
