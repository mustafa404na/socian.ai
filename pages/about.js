import AppBar from "@/components/nav/AppBar";
import AppFooter from "@/components/footer/AppFooter";
import Head from "next/head";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";
import AboutCompanyOverview from "@/components/about/AboutCompanyOverview";
import AboutCEOsNote from "@/components/about/AboutCEOsNote";
import AboutIndustriesServed from "@/components/about/AboutIndustriesServed";
import AboutSignificantPartners from "@/components/about/AboutSignificantPartners";
import AboutSignificantCustomers from "@/components/about/AboutSignificantCustomers";
import AboutAwardsAndRecognitions from "@/components/about/AboutAwardsAndRecognitions";
import AboutCorporateDocs from "@/components/about/AboutCorporateDocs";
import AboutAreasOfExpertise from "@/components/about/AboutAreasOfExpertise";
import { isMobile, isTablet } from "react-device-detect";
import { useRouter } from "next/router";
import AboutTeamTough from "@/components/about/AboutTeamTough";

gsap.registerPlugin(ScrollTrigger);

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
          duration: 0.2,
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
        duration: 0.1,
      }
    );
  });
}

export default function About() {
  const router = useRouter();

  useEffect(() => {
    if (isMobile || isTablet) {
      router.push("/mobile/about");
    }
  }, []);
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

  // on mobile go to the /moblie

  return (
    <main>
      <Head>
        <title>About-Socian Ai</title>
        <meta name="description" content="About-Socian Ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div ref={comp} className=" bg-black text-white">
        <div className="scrollCointainer ">
          <AppBar />
          <AboutCompanyOverview />
          <AboutCEOsNote />
          <AboutAreasOfExpertise />
          <AboutIndustriesServed />
          <AboutSignificantPartners />
          <AboutSignificantCustomers />
          <AboutAwardsAndRecognitions />
          <AboutTeamTough />
          <AboutCorporateDocs />
          <AppFooter />
        </div>
      </div>
    </main>
  );
}
