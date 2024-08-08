import React from "react";
import Appliances from "./home-appliance";
import Head from "next/head";

export const metadata = {
  title:
    "Transforming Ad Performance: Home Appliances India's Journey with Google Ads",
  description:
    "Explore how Home Appliances India turned initial Google Ads challenges into ecommerce success through strategic restructuring and budget management. This case study reveals the innovative solutions and remarkable outcomes achieved in their quest for digital advertising excellence",
};

export default function page() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Appliances />;
    </>
  );
}
