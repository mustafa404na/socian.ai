import AppFooter from "@/components/footer/AppFooter";
import SectionAToZCustomerIntelligence from "@/components/home/SectionAToZCustomerIntelligence";
import SectionAnalytics from "@/components/home/SectionAnalytics";
import SectionAutomateCustomerJourney from "@/components/home/SectionAutomateCustomerJourney";
import SectionBestInBusiness from "@/components/home/SectionBestInBusiness";
import SectionCapableAndConfident from "@/components/home/SectionCapableAndConfident";
import SectionConsumerbuzz from "@/components/home/SectionConsumerbuzz";
import SectionContactForm from "@/components/home/SectionContactForm";
import SectionConverse from "@/components/home/SectionConverse";
import SectionEveryDataActionable from "@/components/home/SectionEveryDataActionable";
import SectionInspiration from "@/components/home/SectionInspiration";
import SectionIntroduction from "@/components/home/SectionIntroduction";
import SectionTrustedAndAppreciated from "@/components/home/SectionTrustedAndAppreciated";
import AppBar from "@/components/nav/AppBar";
import { Inter } from "@next/font/google";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import Head from "next/head";
import { useEffect, useLayoutEffect, useRef } from "react";
import { isMobile, isTablet } from "react-device-detect";
const inter = Inter({ subsets: ["latin"] });

import { useRouter } from "next/router";
import SocianChatPlugin from "@/components/plugins/SocianChatPlugin";

gsap.registerPlugin(ScrollTrigger);

/**
 * timelineEveryDataActionableAnimation
 */
function timelineEveryDataActionableAnimation() {
  // timeline_every_data_actionable
  let timeline_every_data_actionable = gsap.timeline({
    scrollTrigger: {
      trigger: "#section_every_data_actionable",
      // when the top of the trigger hits the top of the viewport

      toggleActions: "restart none restart none",
      // immediateRender: false,
    },
  });

  timeline_every_data_actionable.fromTo(
    "#section_every_data_actionable ",
    { background: "linear-gradient(to right, #000000 100%, #ffffff 50%)" },
    {
      background: "linear-gradient(to right, #000000 50%, #ffffff 50%)",

      duration: 0.6,
    }
  );

  timeline_every_data_actionable.fromTo(
    "#section_every_data_actionable .action-1",
    { opacity: 0, x: "-100px" },
    { opacity: 1, x: 0, ease: "power2.easeIn", duration: 0.4 }
  );

  timeline_every_data_actionable.fromTo(
    "#section_every_data_actionable .white-box-x-from-right .action-2",
    { opacity: 0, y: "-100px" },
    { opacity: 1, y: 0, ease: "power1.easeIn", duration: 0.4 }
  );

  timeline_every_data_actionable.fromTo(
    "#section_every_data_actionable .white-box-x-from-right .action-3",
    { opacity: 0, y: "-30px" },
    { opacity: 1, y: 0, ease: "power1.easeIn", duration: 0.4 }
  );
}

function timelineIntroductionAnimation() {
  // timeline_intro
  let timeline_intro = gsap.timeline({
    scrollTrigger: {
      trigger: "#section_introduction",
      // when the top of the trigger hits the top of the viewport
      toggleActions: "restart none restart none",
      immediateRender: false,
    },
  });

  timeline_intro.fromTo(
    "#section_introduction .intro-logo",
    { opacity: 0 },
    { opacity: 1, ease: "power1.easeIn", duration: 0.6 }
  );

  timeline_intro.fromTo(
    "#section_introduction .intro-title",
    { opacity: 0 },
    { opacity: 1, ease: "power2.easeIn", duration: 0.6 }
  );
}

/**
 * timelineAutomateCustomerJourneyAnimation
 */
function timelineAutomateCustomerJourneyAnimation() {
  // timeline_every_data_actionable
  let timeline_automate_customer_journey = gsap.timeline({
    scrollTrigger: {
      trigger: "#section_automate_customer_journey",
      // when the top of the trigger hits the top of the viewport
      toggleActions: "restart none restart none",
    },
  });

  timeline_automate_customer_journey.fromTo(
    "#section_automate_customer_journey",
    { background: "linear-gradient(to left, #000000 100%, #ffffff 50%)" },
    {
      background: "linear-gradient(to left, #000000 50%, #ffffff 50%)",

      text: "black",
      duration: 0.6,
    }
  );

  timeline_automate_customer_journey.fromTo(
    "#section_automate_customer_journey .action-1",
    { opacity: 0, y: "-100px" },
    { opacity: 1, y: 0, ease: "power4.easeIn", duration: 0.4 }
  );

  timeline_automate_customer_journey.fromTo(
    "#section_automate_customer_journey .action-2",
    { opacity: 0, y: "-100px" },
    { opacity: 1, y: 0, ease: "power4.easeIn", duration: 0.4 }
  );

  timeline_automate_customer_journey.fromTo(
    "#section_automate_customer_journey .action-3",
    { opacity: 0, y: "-30px" },
    { opacity: 1, y: 0, ease: "power4.easeIn", duration: 0.4 }
  );
}

/**
 * timelineForAZCustomerIntelligenceAnimation
 */
function timelineAZCustomerIntelligenceAnimation() {
  // timeline
  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#section_az_customer_intelligence",
      // when the top of the trigger hits the top of the viewport
      toggleActions: "restart none restart none",
    },
  });

  // timeline actions
  timeline.fromTo(
    "#section_az_customer_intelligence .action-1",
    { scale: 0.5, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      ease: "Power4.easeInOut",
      delay: 0.3,
      duration: 0.6,
    }
  );

  timeline.fromTo(
    "#section_az_customer_intelligence .action-2",
    { opacity: 0 },
    { opacity: 1, ease: "Power4.easeInOut" }
  );
}

function timelineConsumerBuzzAnimation() {
  // timeline
  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#section_consumerbuzz",
      // when the top of the trigger hits the top of the viewport
      toggleActions: "restart none restart none",
      immediateRender: false,
    },
  });
  // timeline actions
  timeline.fromTo(
    "#section_consumerbuzz .action-1",
    { scale: 0.5, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      ease: "Power4.easeInOut",
      delay: 0.3,
      duration: 0.6,
    }
  );

  timeline.fromTo(
    "#section_consumerbuzz .action-2",
    { opacity: 0 },
    { opacity: 1, ease: "Power4.easeInOut" }
  );
}

function timelineAnalyticsAnimation() {
  // timeline
  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#section_analytics",
      // when the top of the trigger hits the top of the viewport
      toggleActions: "restart none restart none",
      immediateRender: false,
    },
  });
  // timeline actions
  timeline.fromTo(
    "#section_analytics .action-1",
    { scale: 0.5, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      ease: "Power4.easeInOut",
      delay: 0.3,
      duration: 0.6,
    }
  );

  timeline.fromTo(
    "#section_analytics .action-2",
    { opacity: 0 },
    { opacity: 1, ease: "Power4.easeInOut" }
  );
}

function timelineConverseAnimation() {
  // timeline
  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#section_converse",
      // when the top of the trigger hits the top of the viewport
      toggleActions: "restart none restart none",
      immediateRender: false,
    },
  });

  // timeline actions
  timeline.fromTo(
    "#section_converse .action-1",
    { scale: 0.5, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      ease: "Power4.easeInOut",
      delay: 0.3,
      duration: 0.6,
    }
  );

  timeline.fromTo(
    "#section_converse .action-2",
    { opacity: 0 },
    { opacity: 1, ease: "Power4.easeInOut" }
  );
}

function timelineCapableAndConfidentAnimation() {
  // timeline
  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#section_capable_and_confident",
      // when the top of the trigger hits the top of the viewport
      toggleActions: "restart none restart none",
      immediateRender: false,
    },
  });

  // timeline actions
  timeline.fromTo(
    "#section_capable_and_confident .action-0",
    { scale: 0 },
    { scale: 1, duration: 0.4 }
  );

  // timeline actions
  timeline.fromTo(
    "#section_capable_and_confident .action-1",
    { opacity: 0 },
    { opacity: 1, delay: 0.1 }
  );

  timeline.fromTo(
    "#section_capable_and_confident .action-2",
    { opacity: 0 },
    { opacity: 1 }
  );
}

function timelineTrustedAndAppreciatedAnimation(comp) {
  // timeline
  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#section_trusted_and_appreciated",
      // when the top of the trigger hits the top of the viewport
      toggleActions: "restart none restart none",
      immediateRender: false,
    },
  });

  // // timeline actions
  // timeline.fromTo(
  //   "#section_trusted_and_appreciated .action-1",
  //   { opacity: 0 },
  //   { opacity: 1 }
  // );

  // timeline.fromTo(
  //   "#section_trusted_and_appreciated .action-2",
  //   { opacity: 0 },
  //   { opacity: 1 }
  // );

  // Our animations can use selector text like ".box"

  comp.current
    .querySelectorAll("#section_trusted_and_appreciated #trustImage .ball")
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

function timelineContactFormAnimation() {
  // timeline
  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#section_contact_form",
      // when the top of the trigger hits the top of the viewport
      toggleActions: "restart none restart none",
      immediateRender: false,
    },
  });

  // timeline actions
  timeline.fromTo(
    "#section_contact_form .action-1",
    { opacity: 0 },
    { opacity: 1 }
  );

  timeline.fromTo(
    "#section_contact_form .action-2",
    { opacity: 0 },
    { opacity: 1 }
  );
}

export default function Home() {
  const comp = useRef(); // create a ref for the root level element (for scoping)
  // const circle = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.defaults({
        toggleActions: "restart none restart none",
        scroller: ".scrollCointainer",
      });

      // page animations
      timelineIntroductionAnimation();
      timelineEveryDataActionableAnimation();
      timelineAutomateCustomerJourneyAnimation();
      timelineAZCustomerIntelligenceAnimation();
      timelineConsumerBuzzAnimation();
      timelineAnalyticsAnimation();
      timelineConverseAnimation();
      timelineCapableAndConfidentAnimation();
      timelineTrustedAndAppreciatedAnimation(comp);
      timelineContactFormAnimation();
    }, comp);
    return () => ctx.revert(); // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render
  // on mobile go to the /moblie

  const router = useRouter();

  useEffect(() => {
    if (isMobile || isTablet) {
      router.push("/mobile");
    }
  }, []);
  return (
    <>
      <Head>
        <title>Socian Ai</title>
        <meta name="description" content="Socian Ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <div ref={comp} className=" bg-black text-white">
          <div className="scrollCointainer">
            <AppBar />
            <SectionIntroduction />
            <SectionEveryDataActionable />
            <SectionAutomateCustomerJourney />
            <SectionAToZCustomerIntelligence />
            {/* <SectionConsumerbuzz />
            <SectionAnalytics />
            <SectionConverse /> */}
            <SectionBestInBusiness />
            <SectionCapableAndConfident />
            <SectionTrustedAndAppreciated />
            <SectionContactForm />
            <SectionInspiration />
            <AppFooter />
          </div>
        </div>
      </main>

      <SocianChatPlugin />
    </>
  );
}
