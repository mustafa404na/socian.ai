import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function timelineCustomersAnimation(comp) {
  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#section_customers",
      // when the top of the trigger hits the top of the viewport
      toggleActions: "restart none restart none",
      immediateRender: false,
    },
  });

  comp.current
    .querySelectorAll("#customers .customersBall")
    .forEach((element) => {
      timeline.fromTo(
        element,
        {
          scale: 0,

          // repeat: -1,
          // repeatRefresh: true, // gets a new random x and y value on each repeat
        },
        {
          scale: 1,
          duration: 0.5,
        }
      );
    });
}

function timelinePartnersAnimation(comp) {
  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#section_partners",
      // when the top of the trigger hits the top of the viewport
      toggleActions: "restart none restart none",
      immediateRender: false,
    },
  });

  comp.current.querySelectorAll("#partners .ball").forEach((element) => {
    timeline.fromTo(
      element,
      {
        scale: 0,

        // repeat: -1,
        // repeatRefresh: true, // gets a new random x and y value on each repeat
      },
      {
        scale: 1,
        duration: 0.2,
      }
    );
  });
}

function about(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageNumber(12));
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
      timelineCustomersAnimation(comp);
      timelinePartnersAnimation(comp);
    }, comp);
    return () => ctx.revert(); // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <main>
      <Head>
        <title>About-Socian Ai</title>
        <meta name="description" content="About-Socian Ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div ref={comp} className=" bg-black text-white">
        <div className="scrollCointainer ">
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
        </div>
      </div>
    </main>
  );
}

export default about;
