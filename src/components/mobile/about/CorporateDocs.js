import React from "react";
import DefaultTemplate from "../template/DefaultTemplate";
import SectionHeading from "@/components/ui/SectionHeading";
import CorporateDocsCards from "@/components/ui/CorporateDocsCards";
const buttons = [
  {
    text: "Explore",
    link: "link",
    btnColor: "light",
    iconDirecton: "right",
  },
];

const data = {
  sectionTitle: "Corporate Docs",
  services: [
    {
      key: "01",
      docName: "Company Profile",
      link: "https://drive.google.com/file/d/1Ao3g9gskNuIydGW--XBS6ueuF7K03Fwm/view?usp=share_link",
    },
    {
      key: "02",
      docName: "Product Profiles",
      link: "https://drive.google.com/file/d/1r30LWA__Xto7kq427r23Y6wJ5ey8UvQh/view",
    },
    {
      key: "03",
      docName: "Terms & Conditions",
      link: "https://docs.google.com/document/d/1lOnOuwcKGbcpjv4Yk1u2968-PBRdy1YS7VvB77_GrR0/edit?usp=sharing",
    },
  ],
};
function CorporateDocs({ pageNumber }) {
  return (
    <DefaultTemplate buttons={buttons} className={`grid`}>
      <div>
        <SectionHeading className={`action-1 pb-9`}>
          <span>
            Corporate
            <br />
            Docs
          </span>
        </SectionHeading>
        <div>
          <div className="grid gap-5">
            {data.services.map((item, index) => (
              <CorporateDocsCards key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </DefaultTemplate>
  );
}

export default CorporateDocs;
