import { Metadata } from "next";
import CareerPage from "./CareerPage";

export const metadata: Metadata = {
  title: "Career Opportunities | CybateSoft",
  description:
    "Explore career opportunities at CybateSoft. Apply for open positions and grow your career with us.",
  keywords: [
    "CybateSoft Careers",
    "IT Jobs",
    "Dot Net Developer",
    "Android Developer",
    "Software Jobs",
    "Hyderabad IT Jobs",
  ],
  openGraph: {
    title: "Career Opportunities | CybateSoft",
    description:
      "Join CybateSoft and build your career in IT and Software Development.",
    type: "website",
  },
};

export default function Page() {
  return <CareerPage />;
}