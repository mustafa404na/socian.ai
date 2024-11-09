import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppFooter from "./AppFooter";
import {
  setPageNumber,
  setCurrentPage,
} from "@/redux/mobilePagination/actions";
import ConverseHero from "@/components/mobile/converse/ConverseHero";
import ConverseIndustry from "@/components/mobile/converse/ConverseIndustry";
import ConverseSearch from "@/components/mobile/converse/ConverseSearch";
import ConverseDevSocian from "@/components/mobile/converse/ConverseDevSocian";
import Head from "next/head";

function consumerbuzz(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageNumber(5));
    dispatch(setCurrentPage(1));
  }, []);
  const pageInfo = useSelector((state) => state);
  const { pages, current } = pageInfo;

  return (
    <main>
      <Head>
        <title>Converse-Socian Ai</title>
        <meta name="description" content="Converse-Socian Ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        {current == 1 && <ConverseHero />}
        {current == 2 && <ConverseSearch />}
        {current == 3 && <ConverseIndustry />}
        {current == 4 && <ConverseDevSocian />}
        {current == 5 && <AppFooter />}
      </div>
    </main>
  );
}

export default consumerbuzz;
