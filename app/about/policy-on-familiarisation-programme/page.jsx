import React from 'react'
import Policy from './Policy'
import Breadcrumbs from '@/components/Breadcrumbs'
import breadcrumbs from "@/public/breadcrumbs/breadcrumbs.jpg";

export default function page() {
  const breadcrumbLinks = [
    { label: "Home", url: "/" },
    { label: "Disclosures", url: "/about/company" },
  ];
  return (
    <div>
       <Breadcrumbs
        title="Investors"
        links={breadcrumbLinks}
        image={breadcrumbs}
      />
      <Policy/>
    </div>
  )
}
