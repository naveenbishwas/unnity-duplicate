import Head from "next/head";
import WhiteLabel from "./white-label";

export const metadata = {
  title:
    "Outsource to Unnity: Expert Digital Marketing to Transform Your Clients' Brands",
  description:
    "Empower your agency by outsourcing your clients to Unnity. Our expert digital marketing team transforms brands and injects digital DNA into businesses. Focus on your core clients while we help your clients shine online with top-notch marketing strategies.",
};

const Page = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <WhiteLabel />
    </>
  );
};

export default Page;
