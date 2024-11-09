import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import AppFooter from "./AppFooter";
import {
  setPageNumber,
  setCurrentPage,
} from "@/redux/mobilePagination/actions";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AidemosMobile from "@/components/mobile/AidemosMobile";

function AiDeoms(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageNumber(2));
    dispatch(setCurrentPage(1));
  }, []);
  const pageInfo = useSelector((state) => state);
  const { pages, current } = pageInfo;

  const comp = useRef(); // create a ref for the root level element (for scoping)
  // const circle = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.defaults({
        toggleActions: "restart none restart none",
        scroller: ".scrollCointainer",
      });
    }, comp);
    return () => ctx.revert(); // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <>
      <Head>
        <title>About-Socian Ai</title>
        <meta name="description" content="About-Sician Ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main ref={comp} className=" bg-black text-white">
        <div className="scrollCointainer ">
          {current == 1 && <AidemosMobile />}
          {current == 2 && <AppFooter />}
        </div>
      </main>
    </>
  );
}

export default AiDeoms;
