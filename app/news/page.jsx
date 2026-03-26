import React from "react";
import Blog from "./Blog";
import breadcrumbs from "@/public/breadcrumbs/breadcrumbs.jpg";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function page() {
  const breadcrumbLinks = [
    { label: "Home", url: "/" },
    { label: "News And Media", url: "/about/company" },
  ];
  return (
    <div className="pt-[6rem]">
      <Breadcrumbs
        title="News And Media"
        links={breadcrumbLinks}
        image={breadcrumbs}
      />
      <Blog />
    </div>
  );
}
