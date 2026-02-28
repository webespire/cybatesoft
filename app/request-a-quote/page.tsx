import { Metadata } from "next";
import QuoteForm from "./QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Submit your business inquiry and our team will contact you shortly.",
  keywords: [
    "Request Quote",
    "Business Inquiry",
    "Contact Form",
    "Web Development Services",
  ],
  openGraph: {
    title: "Request a Quote",
    description:
      "Submit your business inquiry and our team will contact you shortly.",
    type: "website",
  },
};

export default function Page() {
  return <QuoteForm />;
}