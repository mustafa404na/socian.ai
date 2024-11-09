import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppFooter from "./AppFooter";
import {
  setPageNumber,
  setCurrentPage,
} from "@/redux/mobilePagination/actions";
import ConsumerHero from "@/components/mobile/consumerbuzz/ConsumerHero";
import ConsumerMap from "@/components/mobile/consumerbuzz/ConsumerMap";
import ConsumerServices from "@/components/mobile/consumerbuzz/ConsumerServices";
import ConsumerVersion from "@/components/mobile/consumerbuzz/ConsumerVersion";
import ConsumerReview from "@/components/mobile/consumerbuzz/ConsumerReview";
import Head from "next/head";

function consumerbuzz(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageNumber(6));
    dispatch(setCurrentPage(1));
  }, []);
  const pageInfo = useSelector((state) => state);
  const { pages, current } = pageInfo;

  return (
    <main>
      <Head>
        <title>Consumerbuzz-Socian Ai</title>
        <meta name="description" content="Consumerbuzz-Socian Ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        {current == 1 && <ConsumerHero />}
        {current == 2 && <ConsumerMap />}
        {current == 3 && <ConsumerServices />}
        {current == 4 && <ConsumerVersion />}
        {current == 5 && <ConsumerReview />}
        {current == 6 && <AppFooter />}
      </div>
    </main>
  );
}

export default consumerbuzz;
