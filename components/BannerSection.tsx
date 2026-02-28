"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title:
      "Leverage AI to automate workflows, reduce errors, enabling your team to focus on strategic tasks.",
    image: "/media/logo/images.png",
    label: "Cloud Enablement",
  },
  {
    id: 2,
    title:
      "Optimize operations with Business Process Automation solutions.",
    image: "/media/logo/business.jpg",
    label: "Business Process Automation",
  },
  {
    id: 3,
    title:
      "Enhance teamwork using modern collaboration platforms.",
    image: "/media/logo/col.jpg",
    label: "Collaboration",
  },
  {
    id: 4,
    title:
      "Drive transformation with Microsoft Dynamics 365.",
    image: "/media/logo/am.jpg",
    label: "Microsoft Dynamics 365",
  },
];

export default function BannerSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container-fluid cybet_ban_ino">
      <div className="row">

        {/* LEFT SIDE SLIDER */}
        <div className="col-xl-9 col-md-9 col-sm-12 pd4">
          <div className="hero">

            {slides.map((slide, index) => (
              <Image
                key={slide.id}
                src={slide.image}
                alt="banner"
                fill
                priority={index === 0}
                className={`hero-img ${index === active ? "active" : ""}`}
              />
            ))}

            <div className="overlay" />

            <div className="hero-content">
              <h1>{slides[active].title}</h1>
            </div>

            {/* Bottom Navigation */}
            <div className="hero-bottom">

              {/* Static line */}
              <div className="static-line">
                <div
                  className="indicator"
                  style={{
                    transform: `translateX(${active * 100}%)`,
                  }}
                />
              </div>

              <ul className="steps">
                {slides.map((slide, index) => (
                  <li
                    key={slide.id}
                    className={index === active ? "active" : ""}
                    onClick={() => setActive(index)}
                  >
                    <span>{slide.id}</span>
                    {slide.label}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE NEWS (YOUR DIV ADDED EXACTLY) */}
        <div className="col-md-3 col-sm-12 pd4">
          <div className="right_ban">
            <h1>
              Latest News ##<br />
              of <span>CybateSoft</span>
            </h1>
            <p>
              CybateSoft Owner of marketing leading Portals Cybate global
              Solutions for staffing and CybateSoft Products raised the
              Series of Funding.
            </p>

            <div className="text-right xse">
              <Link href="/news_events">Read More</Link>
            </div>

            <hr className="cyb_rgt" />

            <Link className="view_all" href="/casestudy">
              View all case studies...
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}