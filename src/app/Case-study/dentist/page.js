import React from "react";
import Dentist from "./dentist";
import Head from "next/head";

export const metadata = {
  title:
    "Transforming Digital Marketing for Large Dentistry Chains | Comprehensive Strategy Guide",
  description:
    "Discover the ultimate guide to revolutionizing digital marketing strategies for large dentistry chains. Learn how to enhance patient engagement, boost online presence, and achieve unparalleled growth with our comprehensive insights and actionable tips",
};

export default function page() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Dentist />;
    </>
  );
}
