import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppFooter from "./AppFooter";
import {
  setPageNumber,
  setCurrentPage,
} from "@/redux/mobilePagination/actions";
import SectionContactForm from "@/components/mobile/home/SectionContactForm";
import Head from "next/head";

function ContactUs(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageNumber(2));
    dispatch(setCurrentPage(1));
  }, []);
  const pageInfo = useSelector((state) => state);
  const { pages, current } = pageInfo;

  return (
    <main>
      <Head>
        <title>Contact us-Socian Ai</title>
        <meta name="description" content="Socian Ai-Contact us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        {current == 1 && <SectionContactForm />}
        {current == 2 && <AppFooter />}
      </div>
    </main>
  );
}

export default ContactUs;
