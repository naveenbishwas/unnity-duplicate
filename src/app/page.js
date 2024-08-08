import React from "react";
import Homepage from "./homepage";
import { Helmet } from "react-helmet";

export const metadata = {
  title:
    "Unnity Digital Marketing Agency | Shopify, Lead Generation, Performance Marketing",
  description:
    "Unnity, a leading digital marketing agency, excels in performance marketing (Meta & Google ads), Shopify eCommerce, and lead generation. We also offer Shopify website development, UI/UX design, SEO, and creative designing. Contact us for personalized strategies and measurable results!",
};

export default function page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>
      <Homepage />;
    </>
  );
}
