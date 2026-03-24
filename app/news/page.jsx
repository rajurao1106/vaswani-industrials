import React from "react";
import Blog from "./Blog";
import breadcrumbs from "@/public/breadcrumbs/breadcrumbs.jpg";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function page() {
  const breadcrumbLinks = [
    { label: "Home", url: "/" },
    { label: "About Venus", url: "/about" },
    { label: "Company", url: "/about/company" },
  ];
  return (
    <div className="pt-[5rem]">
      <Breadcrumbs
        title="Company"
        links={breadcrumbLinks}
        image={breadcrumbs}
      />
      <Blog />
    </div>
  );
}
