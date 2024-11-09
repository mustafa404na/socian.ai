import AboutSection from "../ui/AboutSection";
import CorporateDocsCards from "../ui/CorporateDocsCards";

export default function AboutCorporateDocs() {
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

  return (
    <AboutSection
      id="resources"
      title={data.sectionTitle}
      className="justify-center align-middle items-center"
    >
      <div className="text-left gap-5 mt-[60px] flex max-w-[500px] flex-wrap justify-center align-middle items-center">
        {data.services.map((item, index) => (
          <CorporateDocsCards key={index} item={item} />
        ))}
      </div>
    </AboutSection>
  );
}
