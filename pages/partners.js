import AppBar from "@/components/nav/AppBar";
import AppFooter from "@/components/footer/AppFooter";
import Head from "next/head";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useRouter } from "next/router";
import { isMobile, isTablet } from "react-device-detect";
import AboutSignificantPartners from "@/components/about/AboutSignificantPartners";

gsap.registerPlugin(ScrollTrigger);

export default function Partners() {
  const router = useRouter();

  useEffect(() => {
    if (isMobile || isTablet) {
      router.push("/mobile/partners");
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
    }, comp);
    return () => ctx.revert(); // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <main>
      <Head>
        <title>Partners-Socian Ai</title>
        <meta name="description" content="Partners-Socian Ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div ref={comp} className=" bg-black text-white">
        <div className="scrollCointainer ">
          <AppBar />
          <AboutSignificantPartners />
          <AppFooter />
        </div>
      </div>
    </main>
  );
}
