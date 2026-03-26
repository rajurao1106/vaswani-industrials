import React from "react";
import Products from "./Products";
import Breadcrumbs from "@/components/Breadcrumbs";
import breadcrumbs from "@/public/breadcrumbs/breadcrumbs.jpg";
export default function page() {
  const breadcrumbLinks = [
    { label: "Home", url: "/" },
    { label: "Forging Ingots And Billets", url: "/about/company" },
  ];
  return (
    <div className="pt-[6rem]">
      {" "}
      <Breadcrumbs
        title="Products"
        links={breadcrumbLinks}
        image={breadcrumbs}
      />
      <Products />
    </div>
  );
}
