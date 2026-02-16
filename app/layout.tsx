import type { Metadata } from "next";
import { Open_Sans, Montserrat, Lato } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

import '@fortawesome/fontawesome-free/css/all.min.css';
import "@/public/fonts/font-awesome.min.css";
import "@/public/style/owl.theme.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CybateSoft",
  description: "Bootstrap website converted to Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${montserrat.variable} ${lato.variable}`}
    >
      <body>
      

        <div className="header-container">
          <Topbar />
          <Navbar />
          {children}
        </div>
        <br/>
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
