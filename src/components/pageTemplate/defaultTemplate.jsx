import React from "react";
import AppFooter from "../footer/AppFooter";
import Appbar from "../nav/AppBar";

export default function defaultTemplate(children) {
  return (
    <>
      <Head>
        <title>Socian Ai</title>
        <meta name="description" content="Socian Ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main ref={comp} className="bg-black text-white">
        <div className="scrollCointainer">
          <Appbar />
          {children}
          <AppFooter />
        </div>
      </main>
    </>
  );
}
