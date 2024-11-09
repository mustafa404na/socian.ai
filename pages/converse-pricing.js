import AppBar from "@/components/nav/AppBar";
import AppFooter from "@/components/footer/AppFooter";
import Head from "next/head";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import ConversePricing from "@/components/converse/ConversePricing";

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
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
        <title>Converse Pricing-Socian Ai</title>
        <meta name="description" content="Converse Pricing-Socian Ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div ref={comp} className=" bg-black text-white">
        <div className="scrollCointainer ">
          <AppBar />
          <ConversePricing />
          <AppFooter />
        </div>
      </div>
    </main>
  );
}
