import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppFooter from "./AppFooter";
import AboutIntro from "../../src/components/mobile/about/AboutIntro";
import CEONote from "@/components/mobile/about/CEONote";
import AreasOfExpertise from "@/components/mobile/about/AreasOfExpertise";
import IndustriesServed from "@/components/mobile/about/IndustriesServed";
import Partners from "@/components/mobile/about/Partners";
import Customers from "@/components/mobile/about/Customers";
import AwardsAndRecognitions from "@/components/mobile/about/AwardsAndRecognitions";
import CorporateDocs from "@/components/mobile/about/CorporateDocs";
import {
  setPageNumber,
  setCurrentPage,
} from "@/redux/mobilePagination/actions";

function about(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageNumber(12));
    dispatch(setCurrentPage(1));
  }, []);
  const pageInfo = useSelector((state) => state);
  const { pages, current } = pageInfo;

  return (
    <>
      {current == 1 && <AboutIntro />}
      {current == 2 && <CEONote />}
      {current == 3 && <AreasOfExpertise />}
      {current == 4 && <IndustriesServed />}
      {current == 5 && <Partners />}
      {current == 6 && <Partners />}
      {current == 7 && <Partners />}
      {current == 8 && <Customers />}
      {current == 9 && <Customers />}
      {current == 10 && <AwardsAndRecognitions />}
      {/* {current == 11 && <Teams />} */}
      {current == 11 && <CorporateDocs />}
      {current == 12 && <AppFooter />}
    </>
  );
}

export default about;
