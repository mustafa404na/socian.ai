import SectoinHero from "@/components/mobile/home/SectoinHero";
import SectionBestInBusiness from "@/components/mobile/home/SectionBestInBusiness";
import React, { useEffect } from "react";
import SocianAiHelps from "@/components/mobile/home/SocianAiHelps";
import SectionAToZCustomerIntelligence from "@/components/mobile/home/SectionAToZCustomerIntelligence";
import SectionTrustedAndAppreciated from "@/components/mobile/home/SectionTrustedAndAppreciated";
import { useDispatch, useSelector } from "react-redux";
import SectionCapableAndConfident from "@/components/mobile/home/SectionCapableAndConfident";
import SectionContactForm from "@/components/mobile/home/SectionContactForm";
import SectionInspiration from "@/components/mobile/home/SectionInspiration";
import AppFooter from "./AppFooter";
import {
  setCurrentPage,
  setPageNumber,
} from "@/redux/mobilePagination/actions";
import Head from "next/head";

function index(props) {
  const dispatch = useDispatch();
  const pageInfo = useSelector((state) => state);
  const { pages, current } = pageInfo;
  const handlePRess = () => {
    setCurrentPage(2);
  };
  useEffect(() => {
    dispatch(setPageNumber(13));
    dispatch(setCurrentPage(1));
  }, []);
  return (
    <main>
      <Head>
        <title>Socian Ai</title>
        <meta name="description" content="Socian Ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        {current == 1 && <SectoinHero />}
        {(current == 2 && <SocianAiHelps />) ||
          (current == 3 && <SocianAiHelps />)}
        {(current == 4 && <SectionAToZCustomerIntelligence />) ||
          (current == 5 && <SectionAToZCustomerIntelligence />) ||
          (current == 6 && <SectionAToZCustomerIntelligence />) ||
          (current == 7 && <SectionAToZCustomerIntelligence />)}
        {current == 8 && <SectionBestInBusiness />}
        {current == 9 && <SectionCapableAndConfident />}
        {current == 10 && <SectionTrustedAndAppreciated />}
        {current == 11 && <SectionContactForm />}
        {current == 12 && <SectionInspiration />}
        {current == 13 && <AppFooter />}
      </div>
    </main>
  );
}

export default index;
