import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppFooter from "./AppFooter";
import Head from "next/head";
``
import {
  setPageNumber,
  setCurrentPage,
} from "@/redux/mobilePagination/actions";
import ConverseIndustry from "@/components/mobile/converse/ConverseIndustry";
import AnalyticsHero from "@/components/mobile/analytics/AnalyticsHero";

function analytics(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageNumber(3));
    dispatch(setCurrentPage(1));
  }, []);
  const pageInfo = useSelector((state) => state);
  const { pages, current } = pageInfo;

  return (
    <main>
      <Head>
        <title>Analytics-Socian Ai</title>
        <meta name="description" content="Analytics-Socian Ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        {current == 1 && <AnalyticsHero />}
        {current == 2 && <ConverseIndustry />}
        {current == 3 && <AppFooter />}
      </div>
    </main>
  );
}

export default analytics;
