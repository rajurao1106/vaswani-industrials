import React from "react";
import Spongeiron from "./Spongeiron";
import Breadcrumbs from "@/components/Breadcrumbs";
import breadcrumbs from "@/public/breadcrumbs/breadcrumbs.jpg";
export default function page() {
  const breadcrumbLinks = [
    { label: "Home", url: "/" },
    { label: "Sponge Iron", url: "/about/company" },
  ];
  return (
    <div className="pt-[6rem]">
      <Breadcrumbs
        title="Products"
        links={breadcrumbLinks}
        image={breadcrumbs}
      />
      <Spongeiron />
    </div>
  );
}
