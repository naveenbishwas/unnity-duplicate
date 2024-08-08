import React from "react";
import Travel from "./travel";
import Head from "next/head";

export const metadata = {
  title: "Scaling Success: E-sim's Record-Breaking Sales with Google Ads",
  description:
    "Discover how E-sim achieved phenomenal growth and outperformed competitors with strategic Google Ads campaigns. This case study highlights the journey from modest beginnings to record-breaking sales, showcasing the power of targeted advertising and optimization",
};

export default function page() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Travel />;
    </>
  );
}
