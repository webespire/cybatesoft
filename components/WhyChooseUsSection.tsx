"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function WhyChooseUsSection() {

  /* ================= ACCORDION ================= */
 const [active, setActive] = useState("collapseOne");

  const toggle = (id: string) => {
    setActive(active === id ? "" : id);
  };


  /* ================= TESTIMONIAL DATA ================= */
  const testimonials = [
    {
      image:
        "/media/testimonial/d4367d8c780c451d7f7d46b3741053f6.jpg",
      name: "Andrew",
      designation: "Software Engineer",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis, velit a accumsan ullamcorper, leo tellus vulputate mi, at eleifend felis ex vel est. Cras blandit ultricies magna eu faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. consequat sit amet at erat. consectetur adipiscing elit morbi tristique senectus et netus et malesuada.`,
    },
    {
      image:
        "/media/testimonial/1c53b2f6e004f62e9b6b3a83298be8ba.jpg",
      name: "Peter Williams",
      designation: "Managing Director",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis, velit a accumsan ullamcorper, leo tellus vulputate mi, at eleifend felis ex vel est. Cras blandit ultricies magna eu faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. consequat sit amet at erat.`,
    },
  ];

  /* ================= PARTNERS (3 DOTS) ================= */
  const partnerSlides = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
  ];

  return (
    <div className="acc_box">
      <div className="container">
        <div className="row">

          {/* ================================================= */}
          {/* LEFT : ACCORDION */}
          {/* ================================================= */}
     

    <div className="col-md-4 col-sm-12">
      <div className="box_head">
        <h2> Why Choose Us </h2>
      </div>

      <div className="list">
        <div className="panel-group">

          {/* ================= PANEL 1 ================= */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  onClick={() => toggle("collapseOne")}
                  className={
                    active === "collapseOne"
                      ? ""
                      : "collapsed"
                  }
                >
                  Our Approach{" "}
                  <i className="fa fa-level-down aerrow"></i>
                </a>
              </h4>
            </div>

            <div
              id="collapseOne"
              className={`panel-collapse collapse ${
                active === "collapseOne"
                  ? "in"
                  : ""
              }`}
              style={{
                maxHeight:
                  active === "collapseOne"
                    ? "500px"
                    : "0px",
                overflow: "hidden",
                transition:
                  "max-height 0.8s ease",
              }}
            >
              <div className="panel-body">
                we take pride in the solutions we
                deliver. We encourage each other to
                achieve excellence in all endeavours
                and aren't satisfied until projects
                meet our own personal high standards.
                Please take a look at Our Process page
                to see how we will bring your project.
                <br /><br />
                We are continually evolving, adapting
                to continually emerging accepted best
                practises and accepted standards (such
                as using XHTML1.1, CSS-based design,
                CSS Techniques and Database design
                methodologies).
              </div>
            </div>
          </div>

          {/* ================= PANEL 2 ================= */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  onClick={() => toggle("collapseTwo")}
                  className={
                    active === "collapseTwo"
                      ? ""
                      : "collapsed"
                  }
                >
                  Our Quality{" "}
                  <i className="fa fa-level-down aerrow"></i>
                </a>
              </h4>
            </div>

            <div
              id="collapseTwo"
              className={`panel-collapse collapse ${
                active === "collapseTwo"
                  ? "in"
                  : ""
              }`}
              style={{
                maxHeight:
                  active === "collapseTwo"
                    ? "500px"
                    : "0px",
                overflow: "hidden",
                transition:
                  "max-height 0.8s ease",
              }}
            >
              <div className="panel-body">
                Quality is a word we use often. But
                here, we mean it. At Digital Crew,
                each project, large or small, is
                assigned a quality controller.
              </div>
            </div>
          </div>

          {/* ================= PANEL 3 ================= */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  onClick={() =>
                    toggle("collapseThree")
                  }
                  className={
                    active ===
                    "collapseThree"
                      ? ""
                      : "collapsed"
                  }
                >
                  Our Quality of Database Design{" "}
                  <i className="fa fa-level-down aerrow"></i>
                </a>
              </h4>
            </div>

            <div
              id="collapseThree"
              className={`panel-collapse collapse ${
                active ===
                "collapseThree"
                  ? "in"
                  : ""
              }`}
              style={{
                maxHeight:
                  active ===
                  "collapseThree"
                    ? "500px"
                    : "0px",
                overflow: "hidden",
                transition:
                  "max-height 0.8s ease",
              }}
            >
              <div className="panel-body">
                Database design is critical; get it
                wrong and a project will never get off
                the ground.
              </div>
            </div>
          </div>

          {/* ================= PANEL 4 ================= */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  onClick={() =>
                    toggle("collapseFour")
                  }
                  className={
                    active === "collapseFour"
                      ? ""
                      : "collapsed"
                  }
                >
                  Our Support{" "}
                  <i className="fa fa-level-down aerrow"></i>
                </a>
              </h4>
            </div>

            <div
              id="collapseFour"
              className={`panel-collapse collapse ${
                active === "collapseFour"
                  ? "in"
                  : ""
              }`}
              style={{
                maxHeight:
                  active === "collapseFour"
                    ? "500px"
                    : "0px",
                overflow: "hidden",
                transition:
                  "max-height 0.8s ease",
              }}
            >
              <div className="panel-body">
                Tomorrow, we will be here for you. We
                plan to still be here years from now.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>



          {/* ================================================= */}
          {/* MIDDLE : TESTIMONIAL */}
          {/* ================================================= */}
          <div className="col-md-4 col-sm-12 diff">
            <div className="box_head">
              <h2> Client Testimonials </h2>
            </div>

            <div className="testi">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                loop
                autoplay={{ delay: 3500 }}
              >
                {testimonials.map((t, i) => (
                  <SwiperSlide key={i}>
                    <div className="test">

                      <div
                        className="test_img"
                        style={{textAlign: 'center'}}
                      >
                        <Image
                          src={t.image}
                          alt="testi"
                          width={110}
                          height={110}
                          style={{
                            borderRadius:
                              "50%",
                          }}
                        />
                        <h5>{t.name}</h5>
                        <h6>{t.designation}</h6>
                      </div>

                      {/* HYDRATION FIX */}
                      <div
                        className="test_cont"
                       style={{textAlign: 'center'}}
                      >
                        <h6>
                          <i className="fa fa-quote-left fa-x"></i>
                          {t.content}
                          <i className="fa fa-quote-right fa-x"></i>
                        </h6>

                        <div className="view_testi">
                          <Link href="/testimonials">
                            View more testimonials{" "}
                            <i className="fa fa-angle-double-right"></i>
                          </Link>
                        </div>
                      </div>

                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT : PARTNERS */}
          {/* ================================================= */}
          <div className="col-md-4 col-sm-12">
            <div className="box_head">
              <h2> Thanks To Our Partners </h2>
            </div>

            <div id="demo">
              <div className="span12">

                <Swiper
                  modules={[Autoplay, Pagination]}
                  slidesPerView={1}
                  loop
                  autoplay={{ delay: 2500 }}
                  pagination={{ clickable: true }}
                >
                  {partnerSlides.map(
                    (slide, idx) => (
                      <SwiperSlide
                        key={idx}
                      >
                        <div className="item">
                          <div
                            className="slider_area"
                            style={{
                              display:
                                "grid",
                              gridTemplateColumns:
                                "repeat(2,1fr)",
                              gap: "15px",
                            }}
                          >
                            {slide.map(
                              (num) => (
                                <div
                                  className="slidebox1"
                                  key={num}
                                >
                                  <Image
                                    src={`/images/partners/${num}.jpg`}
                                    alt=""
                                    width={130}
                                    height={60}
                                  />
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
