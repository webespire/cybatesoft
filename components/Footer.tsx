import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* FOOTER SECTION */}
      <div className="footer-section">
        <div className="container">
          <div className="row">
            {/* ABOUT */}
            <div className="col-sm-6 col-md-3">
              <div className="about-us">
                <div className="about">
                  <h3>ABOUT CYBATESOFT</h3>
                </div>

                <Image
                  src="/media/logo/cybate_logo.png"
                  alt="footer_logo"
                 width={220}
                 height={65}
                  className="img-responsive"
                />

                <Image
                  src="https://dynatechconsultancy.com/hs-fs/hubfs/map-02.png?width=300&name=map-02.png"
                  alt="map"
                  width={263}
                  height={131}
                  className="img-responsive"
                />

                <p>
                  Cybatesoft(CS) is one of the most trusted global offshore Web &
                  Software Development Company. With a futuristic vision, today
                  we have reached a great peak with untiring energy and
                  allegiance towards the work......
                  <Link
                    href="/who-we-are"
                    className="read_more"
                  >
                    {" "}
                    Read More
                  </Link>
                </p>
              </div>
            </div>

            {/* SERVICES */}
            <div className="col-sm-6 col-md-3">
              <div className="use-link">
                <div className="about">
                  <h3 className="py">SERVICES</h3>
                </div>

                <div className="uselink-list">
                  <ul>
                    <li className="uselink">
                      <i className="fa fa-angle-double-right"></i>&nbsp;&nbsp;
                      <Link href="/services/erp-solutions/dynamics-365-implementation">
                        Dynamics 365 Implementation
                      </Link>
                    </li>

                    <li className="uselink">
                      <i className="fa fa-angle-double-right"></i>&nbsp;&nbsp;
                      <Link href="/services/erp-solutions/integration">
                        Integration
                      </Link>
                    </li>

                    <li className="uselink">
                      <i className="fa fa-angle-double-right"></i>&nbsp;&nbsp;
                      <Link href="/services/erp-solutions/customization">
                        Customization
                      </Link>
                    </li>

                    <li className="uselink">
                      <i className="fa fa-angle-double-right"></i>&nbsp;&nbsp;
                      <Link href="/services/power-platform-and-automation/power-app">
                        Power Apps
                      </Link>
                    </li>

                    <li className="uselink">
                      <i className="fa fa-angle-double-right"></i>&nbsp;&nbsp;
                      <Link href="/services/power-platform-and-automation/power-automate">
                        Power Automate
                      </Link>
                    </li>

                    <li className="uselink">
                      <i className="fa fa-angle-double-right"></i>&nbsp;&nbsp;
                      <Link href="/services/power-platform-and-automation/ai-integration">
                        AI integration
                      </Link>
                    </li>

                    <li className="uselink">
                      <i className="fa fa-angle-double-right"></i>&nbsp;&nbsp;
                      <Link href="/services/web-and-mobile-development/custom-web-apps">
                        Custom Web Apps
                      </Link>
                    </li>

                    <li className="uselink">
                      <i className="fa fa-angle-double-right"></i>&nbsp;&nbsp;
                      <Link href="/services/web-and-mobile-development/mobile-solutions">
                        Mobile Solutions
                      </Link>
                    </li>

                    <li className="uselink">
                      <i className="fa fa-angle-double-right"></i>&nbsp;&nbsp;
                      <Link href="/services/web-and-mobile-development/responsive-design">
                        Responsive design
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* INDUSTRIES */}
            <div className="col-sm-6 col-md-3">
              <div className="lat-news">
                <div className="about">
                  <h3>INDUSTRIES</h3>
                </div>

                <div className="uselink-list">
                  <ul>
                    <li className="uselink">
                      <i className="fa fa-angle-double-right"></i>&nbsp;&nbsp;
                      <Link href="/industry/automotive">
                        Automotive
                      </Link>
                    </li>

                    <li className="uselink">
                      <i className="fa fa-angle-double-right"></i>&nbsp;&nbsp;
                      <Link href="/industry/banking">
                        Banking
                      </Link>
                    </li>

                    <li className="uselink">
                      <i className="fa fa-angle-double-right"></i>&nbsp;&nbsp;
                      <Link href="/industry/consumer-packaged-goods">
                        Consumer packaged Goods
                      </Link>
                    </li>

                    <li className="uselink">
                      <i className="fa fa-angle-double-right"></i>&nbsp;&nbsp;
                      <Link href="/industry/e-commerce">
                        E-Commerce
                      </Link>
                    </li>

                    <li className="uselink">
                      <i className="fa fa-angle-double-right"></i>&nbsp;&nbsp;
                      <Link href="/education-publishing">
                        Education Publishing
                      </Link>
                    </li>

                    <li className="uselink">
                      <i className="fa fa-angle-double-right"></i>&nbsp;&nbsp;
                      <Link href="/industry/manufacturing">
                        Manufacturing
                      </Link>
                    </li>

                    <li className="uselink">
                      <i className="fa fa-angle-double-right"></i>&nbsp;&nbsp;
                      <Link href="/industry/retail">
                        Retail
                      </Link>
                    </li>

                    <li className="uselink">
                      <i className="fa fa-angle-double-right"></i>&nbsp;&nbsp;
                      <Link href="/industry/travel-hospitality">
                        Travel & Hospitality
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CONTACT */}
            <div className="col-sm-6 col-md-3">
              <div className="cont-us">
                <div className="about">
                  <h3>CYBATESOFT CONTACT</h3>
                </div>

                <div className="all-contact">
                  <p>
                    <span>
                      <i className="fa fa-home fa-lg"></i>
                    </span>
                    <span>&nbsp;&nbsp;&nbsp;<b>Cybatesoft Head Office</b></span>
                  </p>

                  <p>
                    <span style={{ paddingTop: "4px" }}>
                      <i className="fa fa-2x fa-map-marker"></i>
                    </span>
                    <span style={{ paddingTop: "5px" }}>
                      &nbsp;&nbsp;&nbsp;1Q3, A3, 1st Floor, Cyber Towers, Hitech
                      City, Madhapur, Hyderabad-500081 <br />
                      Telangana - India
                    </span>
                  </p>

                  <p>
                    <span style={{ paddingTop: "5px" }}>
                      <i className="fa fa-mobile fa-2x"></i>
                    </span>
                    <span style={{ paddingTop: "8px" }}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+91 9640508585
                    </span>
                  </p>

                  <p>
                    <span style={{ paddingTop: "9px" }}>
                      <i className="fa fa-envelope"></i>
                    </span>
                    <span className="anch" style={{ paddingTop: "5px" }}>
                      <Link
                        href="mailto:info@cybatesoft.com"
                        title="Email us Your Query @ info@cybatesoft.com"
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; info@cybatesoft.com &nbsp;
                      </Link>
                    </span>
                  </p>
                </div>

                <div className="social">
                  <Link
                    href="https://www.facebook.com/people/Mallesh-Varma/100009858492210"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-facebook fa-2x social-icon"></i>
                  </Link>

                  <Link
                    href="https://twitter.com/cybatesoft"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-twitter fa-2x social-icon"></i>
                  </Link>

                  <Link
                    href="https://in.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-linkedin fa-2x social-icon"></i>
                  </Link>

                  <Link
                    href="https://plus.google.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-google-plus fa-2x social-icon"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-down">
        <div className="container">
          <div className="row">
            <div className="footer_border">
              <div className="col-sm-8 col-md-9">
                <div className="copyrit-area">
                  <h5>
                    Copyright &copy; 2015{" "}
                    <Link href="/" style={{ color: "white" }}>
                      CybateSoft.
                    </Link>{" "}
                    All rights reserved.
                  </h5>
                </div>
              </div>

              <div className="col-sm-6 col-md-3">
                <div className="copyrit-area">
                  <h5>
                    <Link href="/privacy-policy">
                      <span style={{ color: "white" }}>Privacy Policy</span>
                    </Link>{" "}
                    |{" "}
                    <Link href="/terms-and-conditions">
                      <span style={{ color: "white" }}>Terms & Conditions</span>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
