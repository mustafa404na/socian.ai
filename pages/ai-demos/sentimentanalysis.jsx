import Head from "next/head";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useRouter } from "next/router";
import { isMobile, isTablet } from "react-device-detect";
import AIDemoLayout from "@/components/aiDemo/common/aidemoLayout";
import SentimentAnalysisCom from "@/components/aiDemo/SentimentAnalysisCom";

gsap.registerPlugin(ScrollTrigger);

export default function sentimentanalysis() {
  const router = useRouter();

  useEffect(() => {
    if (isMobile || isTablet) {
      router.push("/mobile/converse");
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
        <title>Chatbot</title>
        <meta name="description" content="Amar Bangla-Socian AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div ref={comp} className=" bg-black text-white">
        <div className="scrollCointainer ">
          <AIDemoLayout>
            <SentimentAnalysisCom />
          </AIDemoLayout>
        </div>
      </div>
    </main>
  );
}


sentimentanalysis.auth = true