import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Testimonials",
  description:
    "An another open source project of Codeigniter with Bootstrap. It is a Lightweight MVC package for you to build your own Custom CMS.",
    keywords: [
        "Codeigniter CMS", "Custom CMS", "Customised Content Management System", "Lightweight CMS", "Tiny CMS", "Flexible CMS", "Download CMS", "Bootstrap CMS", "Mobile CMS", "Responsive CMS"
    ],
  openGraph: {
    title: "",
    description:
      "",
  },
};

export default function Page() {
  return (
    <>
      <div className="clearfix"></div>

      {/* Banner Section */}
      <div className="inner_page_banner">
        <Image
          src="/images/new and events.jpg"
          className="img-responsive banner_img"
          width={1351}
          height={120}
          alt="Customization"
        />

        <div className="banner_heading">
          <div className="container">
            <h2>Why Our Clients Love Us</h2>
            <p>
              Custom Web Development, Custom Software Development, Mobile
              Application Development <br />
              Enterprise Mobility Solution, Microsoft development Solutions,
              Enterprise Software Solution
            </p>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="container">
        <div className="row">
          <div className="tab-content">

            {/* Left Content */}
            <div className="col-md-9">
              <div className="left_panel">
                <div className="inner_devolopment">
                  <h2>Why Our Clients Love Us</h2>
                </div>
              </div>

              {/* Testimonial 1 */}
              <div className="inner_page_pad">
                <div className="inner_devolopment">
                  <div className="row">
                    <div className="col-md-10 col-sm-10">
                      <p>
                        <i className="fa fa-quote-left fa-x"></i>
                        &nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Cras facilisis, velit a
                        accumsan ullamcorper, leo tellus vulputate mi, at
                        eleifend felis ex vel est. Cras blandit ultricies magna
                        eu faucibus. Pellentesque habitant morbi tristique
                        senectus et netus et malesuada fames ac turpis egestas.
                        &nbsp;&nbsp;&nbsp;
                        <i className="fa fa-quote-right fa-x"></i>
                      </p>
                      <h3>Andrew</h3>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="inner_page_pad">
                <div className="inner_devolopment">
                  <div className="row">
                    <div className="col-md-10 col-sm-10">
                      <p>
                        <i className="fa fa-quote-left fa-x"></i>
                        &nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Cras facilisis, velit a
                        accumsan ullamcorper, leo tellus vulputate mi.
                        &nbsp;&nbsp;&nbsp;
                        <i className="fa fa-quote-right fa-x"></i>
                      </p>
                      <h3>Peter Williams</h3>
                      <p>Managing Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-md-3">
              <div className="right_panel">
                <div className="right_panel_heading">
                  <h3>Request Information</h3>
                </div>

                <div className="programming_platforms_list">
                  <p>
                    Please complete our request information form and our
                    consulting representative shall get in touch with you
                    shortly.
                  </p>

                  <ul className="nav nav-pills nav-stacked" id="tab">
                    <li role="presentation" className="active">
                      <Link href="/request-a-quote">
                        Request a Quote
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}