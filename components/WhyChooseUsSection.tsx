"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function CybateSoftHomeSection() {
  // ✅ First open by default
  const [activeId, setActiveId] = useState<string>("collapseOne");

  const toggleAccordion = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
  };

  const isOpen = (id: string) => activeId === id;

  // ✅ Testimonials
  const testimonials = [
    {
      image: "/media/testimonial/d4367d8c780c451d7f7d46b3741053f6.jpg",
      name: "Andrew",
      designation: "Software Engineer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis, velit a accumsan ullamcorper, leo tellus vulputate mi, at eleifend felis ex vel est.",
    },
    {
      image: "/media/testimonial/1c53b2f6e004f62e9b6b3a83298be8ba.jpg",
      name: "Peter Williams",
      designation: "Managing Director",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis, velit a accumsan ullamcorper, leo tellus vulputate mi, at eleifend felis ex vel est.",
    },
  ];

  // ✅ Partners slides (same as your Owl item groups)
  const partnerSlides = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30],
  ];

  return (
    <div className="acc_box">
      <div className="container">
        <div className="row">
          {/* ✅ LEFT: ACCORDION */}
          <div className="col-md-4 col-sm-12">
            <div className="box_head">
              <h2> Why Choose Us </h2>
            </div>

            <div className="list">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                {/* PANEL 1 */}
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOne">
                    <h4 className="panel-title">

                    
                      <a
                        role="button"
                        href="#collapseOne"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        aria-expanded={isOpen("collapseOne") ? "true" : "false"}
                        aria-controls="collapseOne"
                        className={isOpen("collapseOne") ? "" : "collapsed"}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleAccordion("collapseOne");
                        }}
                      >
                        Our Approach <i className="fa fa-level-down aerrow"></i>
                      </a>
                    </h4>
                  </div>

                  

                  <div
                    id="collapseOne"
                    className={`panel-collapse collapse ${
                      isOpen("collapseOne") ? "in" : ""
                    }`}
                    role="tabpanel"
                    aria-labelledby="headingOne"
                    aria-expanded={isOpen("collapseOne") ? "true" : "false"}
                    style={{
                      height: isOpen("collapseOne") ? "0px" : "",
                     
                    }}
                  >
                    <div className="panel-body">
                      we take pride in the solutions we deliver. We encourage
                      each other to achieve excellence in all endeavours and
                      aren't satisfied until projects meet our own personal high
                      standards. Please take a look at Our Process page to see
                      how we will bring your project.
                      <br />
                      <br />
                      We are continually evolving, adapting to continually
                      emerging accepted best practises and accepted standards
                      (such as using XHTML1.1, CSS-based design, CSS Techniques
                      and Database design methodologies).
                    </div>
                  </div>
                </div>

                {/* PANEL 2 */}
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingTwo">
                    <h4 className="panel-title">
                      <a
                        role="button"
                        href="#collapseTwo"
                        aria-expanded={isOpen("collapseTwo")}
                        aria-controls="collapseTwo"
                        className={isOpen("collapseTwo") ? "" : "collapsed"}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleAccordion("collapseTwo");
                        }}
                      >
                        Our Quality <i className="fa fa-level-down aerrow"></i>
                      </a>
                    </h4>
                  </div>

                  <div
                    id="collapseTwo"
                    className={`panel-collapse collapse ${
                      isOpen("collapseTwo") ? "in" : ""
                    }`}
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                    aria-expanded={isOpen("collapseTwo")}
                    style={{
                      height: isOpen("collapseTwo") ? "auto" : "0px",
                      overflow: "hidden",
                      transition: "height 0.6s ease",
                    }}
                  >
                    <div className="panel-body">
                      Quality is a word we use often. But here, we mean it. At
                      Digital Crew, each project, large or small, is assigned a
                      quality controller who is typically another application
                      developer who has not worked directly on the project.
                      <br />
                      <br />
                      Before any project is deployed, the quality controller
                      will review the website or application and will ensure the
                      project conforms to all agreed standards.
                    </div>
                  </div>
                </div>

                {/* PANEL 3 */}
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingThree">
                    <h4 className="panel-title">
                      <a
                        role="button"
                        href="#collapseThree"
                        aria-expanded={isOpen("collapseThree")}
                        aria-controls="collapseThree"
                        className={isOpen("collapseThree") ? "" : "collapsed"}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleAccordion("collapseThree");
                        }}
                      >
                        Our Quality of Database Design{" "}
                        <i className="fa fa-level-down aerrow"></i>
                      </a>
                    </h4>
                  </div>

                  <div
                    id="collapseThree"
                    className={`panel-collapse collapse ${
                      isOpen("collapseThree") ? "in" : ""
                    }`}
                    role="tabpanel"
                    aria-labelledby="headingThree"
                    aria-expanded={isOpen("collapseThree")}
                    style={{
                      height: isOpen("collapseThree") ? "0px" : "271px",
                      overflow: "hidden",
                      transition: "height 0.6s ease",
                    }}
                  >
                    <div className="panel-body">
                      Database design is critical; get it wrong and a project
                      will never get off the ground, will be unacceptably slow
                      or will suffer data integrity issues in the future.
                    </div>
                  </div>
                </div>

                {/* PANEL 4 */}
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFour">
                    <h4 className="panel-title">
                      <a
                        role="button"
                        href="#collapseFour"
                        aria-expanded={isOpen("collapseFour")}
                        aria-controls="collapseFour"
                        className={isOpen("collapseFour") ? "" : "collapsed"}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleAccordion("collapseFour");
                        }}
                      >
                        Our Support <i className="fa fa-level-down aerrow"></i>
                      </a>
                    </h4>
                  </div>

                  <div
                    id="collapseFour"
                    className={`panel-collapse collapse ${
                      isOpen("collapseFour") ? "in" : ""
                    }`}
                    role="tabpanel"
                    aria-labelledby="headingFour"
                    aria-expanded={isOpen("collapseFour")}
                    style={{
                      height: isOpen("collapseFour") ? "auto" : "0px",
                      overflow: "hidden",
                      transition: "height 0.6s ease",
                    }}
                  >
                    <div className="panel-body">
                      Tomorrow, we will be here for you.We have seen other
                      companies come and go and we plan to still be here years
                      from now.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ MIDDLE: TESTIMONIALS (NO DOTS) */}
          <div className="col-md-4 col-sm-12 diff">
            <div className="box_head">
              <h2> Client Testimonials </h2>
            </div>

            <div className="testi">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={false}
                navigation={false}
              >
                {testimonials.map((t, index) => (
                  <SwiperSlide key={index}>
                    <div className="test">
                      <div className="test_img" style={{ textAlign: "center" }}>
                        <Image src={t.image} alt="testi" width={110} height={110} />
                        <h5>{t.name}</h5>
                        <h6>{t.designation}</h6>
                      </div>

                      <div className="test_cont" style={{ textAlign: "center" }}>
                        <p>
                          <h6>
                            <i className="fa fa-quote-left fa-x"></i> {t.content}{" "}
                            <i className="fa fa-quote-right fa-x"></i>
                          </h6>
                        </p>

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

          {/* ✅ RIGHT: PARTNERS (ONLY 3 DOTS) */}
          <div className="col-md-4 col-sm-12">
            <div className="box_head">
              <h2> Thanks To Our Partners </h2>
            </div>

            <div id="demo">
              <div className="span12">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  navigation={false}
                  pagination={{
                    clickable: true,
                    dynamicBullets: false,
                  }}
                >
                  {partnerSlides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="item">
                        <div className="slider_area">
                          {slide.map((num) => (
                            <div className="slidebox1" key={num}>
                              <Image
                                src={`/images/partners/${num}.jpg`}
                                alt={`partner-${num}`}
                                width={120}
                                height={60}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
