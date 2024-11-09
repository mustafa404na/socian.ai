import AppFooter from "@/components/footer/AppFooter";
import Appbar from "@/components/nav/AppBar";
import Head from "next/head";
import React from "react";

function aidemos(props) {
  return (
    <>
      <Head>
        <title>Amar Bangla-Socian AI</title>
        <meta name="description" content="Amar Bangla-Socian AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-black text-white">
        <div className="scrollCointainer ">
          <Appbar />
          <section
            className={`flex tablet:flex-col mob:flex-col scrollElement section overflow-hidden pt-20`}
          >
            <iframe
              src="https://socian.ai:8080/"
              style={{
                minHeight: "100vh",
              }}
              width="100%"
              title="Iframe Example"
            ></iframe>
          </section>
          <AppFooter />
        </div>
      </main>
    </>
  );
}

export default aidemos;
