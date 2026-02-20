"use client";

import React, { useState } from "react";
import Link from "next/link";

// export const metadata = {
//   title: "Career Opportunities",
//   description:
//     "An another open source project of Codeigniter with Bootstrap. It is a Lightweight MVC package for you to build your own Custom CMS.",
//     keywords: [
//         "Codeigniter CMS", "Custom CMS", "Customised Content Management System", "Lightweight CMS", "Tiny CMS", "Flexible CMS", "Download CMS", "Bootstrap CMS", "Mobile CMS", "Responsive CMS"
//     ],
//   openGraph: {
//     title: "",
//     description:
//       "",
//   },
// };

export default function Page() {
  const [showModal, setShowModal] = useState(false);

  return (
   <>

      <div className="clearfix"></div>

      {/* ===== Banner ===== */}
      <div className="inner_page_banner">
        <img
          src="/images/carrer oportuninty.jpg"
          className="img-responsive"
          alt="who we are"
          style={{ width: "100%", height: "120px", objectFit: "cover" }}
        />

        <div className="banner_heading">
          <div className="container">
            <h2>Career Opportunities</h2>
            <p></p>
          </div>
        </div>
      </div>

      {/* ===== Container ===== */}
      <div className="container">
        <div className="row">

          {/* ===== LEFT PANEL ===== */}
          <div className="col-md-9">

            <div className="left_panel">
              <div className="inner_devolopment">

                <h2>Career Opportunities</h2>

                <p>
                  Are you passionate about creating memorable websites and/or
                  software products while providing the best client service?
                  If the answer is yes to all of the above, we would like to meet you.
                  We are always in the lookout for new talent, so even if we don’t
                  have an opening, you are welcome to send your resume to
                  hr@cybatesoft.com. We believe in equal opportunities irrespective
                  of race, gender, ethnicity and experience and we do our level best
                  to maintain the work-life balance with job safety.
                </p>

                <p>
                  Cybatesoft is a business value focused IT company working on
                  offshore products and outsourced software development. Its
                  emphasis is to create business value for its clients through
                  innovations and their speedy implementations.
                </p>

                <p>
                  Be Aware Of Fake Job Calls It has come to our knowledge that some
                  agencies make fake calls to Fresher job seekers and offer job in
                  our company then ask for certain amount of money. But we never tie
                  up or give such authority to any type of agency or consultancy for
                  fresher hiring. We never ask for money from candidates for job
                  employment. So don’t be greedy and don't pay any amount of money if
                  any agency offers you job in CybateSoft Pvt. Ltd. We are not
                  responsible if you will pay to any agency/consultancy against job
                  offer in our company.
                </p>

                <p>
                  <strong>Helpline number :-</strong> +91 8977008585 <br />
                  <strong>Email :-</strong> hr@cybatesoft.com
                </p>

              </div>
            </div>

            {/* ===== JOB 1 ===== */}
            <div className="row">
              <div className="col-md-12">
                <div className="career_bg">

                  <div className="career_section">
                    <div className="career_heading">
                      <h4>Dot Net MVC Developer</h4>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-8">
                      <div className="career_left_content">
                        <ul>
                          <li><strong>Location:</strong> Melbourne (USA), Hyderabad, Bangalore</li>
                          <li><strong>Qualifications:</strong> B.Tech/B.E./M.Tech/M.E</li>
                          <li><strong>Experience :</strong> 1-16 years</li>
                          <li><strong>Work Status:</strong> Full Time</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="button_apply_now">
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => setShowModal(true)}
                        >
                          ApplyNow
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
           

            {/* ===== JOB 2 ===== */}
            <div className="col-md-12">
              <div className="career_bg">

                <div className="career_section">
                  <div className="career_heading">
                    <h4>Android Developer</h4>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-8">
                    <div className="career_left_content">
                      <ul>
                        <li><strong>Location:</strong> Melbourne (USA), Mexico, Hyderabad, Bangalore</li>
                        <li><strong>Qualifications:</strong> B.Tech/B.E./M.Tech/M.E</li>
                        <li><strong>Experience :</strong> 1-16 years</li>
                        <li><strong>Work Status:</strong> Full Time</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="button_apply_now">
                      <button
                        className="btn btn-success"
                        onClick={() => setShowModal(true)}
                      >
                        ApplyNow
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ===== JOB 3 ===== */}
            <div className="col-md-12">
              <div className="career_bg">

                <div className="career_section">
                  <div className="career_heading">
                    <h4>Android Developer</h4>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-8">
                    <div className="career_left_content">
                      <ul>
                        <li><strong>Location:</strong> Melbourne (USA), Mexico, Hyderabad, Bangalore</li>
                        <li><strong>Qualifications:</strong> B.Tech/B.E./M.Tech/M.E</li>
                        <li><strong>Experience :</strong> 1-16 years</li>
                        <li><strong>Work Status:</strong> Full Time</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="button_apply_now">
                      <button
                        className="btn btn-success"
                        onClick={() => setShowModal(true)}
                      >
                        ApplyNow
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ===== JOB 4 ===== */}
            <div className="col-md-12">
              <div className="career_bg">

                <div className="career_section">
                  <div className="career_heading">
                    <h4>Android Developer</h4>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-8">
                    <div className="career_left_content">
                      <ul>
                        <li><strong>Location:</strong> Melbourne (USA), Mexico, Hyderabad, Bangalore</li>
                        <li><strong>Qualifications:</strong> B.Tech/B.E./M.Tech/M.E</li>
                        <li><strong>Experience :</strong> 1-16 years</li>
                        <li><strong>Work Status:</strong> Full Time</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="button_apply_now">
                      <button
                        className="btn btn-success"
                        onClick={() => setShowModal(true)}
                      >
                        ApplyNow
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ===== JOB 5 ===== */}
           <div className="col-md-12">
              <div className="career_bg">

                <div className="career_section">
                  <div className="career_heading">
                    <h4>Android Developer</h4>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-8">
                    <div className="career_left_content">
                      <ul>
                        <li><strong>Location:</strong> Melbourne (USA), Mexico, Hyderabad, Bangalore</li>
                        <li><strong>Qualifications:</strong> B.Tech/B.E./M.Tech/M.E</li>
                        <li><strong>Experience :</strong> 1-16 years</li>
                        <li><strong>Work Status:</strong> Full Time</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="button_apply_now">
                      <button
                        className="btn btn-success"
                        onClick={() => setShowModal(true)}
                      >
                        ApplyNow
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ===== JOB 6 ===== */}
            <div className="col-md-12">
              <div className="career_bg">

                <div className="career_section">
                  <div className="career_heading">
                    <h4>Android Developer</h4>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-8">
                    <div className="career_left_content">
                      <ul>
                        <li><strong>Location:</strong> Melbourne (USA), Mexico, Hyderabad, Bangalore</li>
                        <li><strong>Qualifications:</strong> B.Tech/B.E./M.Tech/M.E</li>
                        <li><strong>Experience :</strong> 1-16 years</li>
                        <li><strong>Work Status:</strong> Full Time</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="button_apply_now">
                      <button
                        className="btn btn-success"
                        onClick={() => setShowModal(true)}
                      >
                        ApplyNow
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
           </div>

          {/* ===== RIGHT SIDEBAR ===== */}
          <div className="col-md-3">
            <div className="right_panel">

              <div className="right_panel_heading">
                <h3>Company</h3>
              </div>

              <div className="programming_platforms_list">
						<ul className="nav nav-pills nav-stacked " id="tab">
							<li role="presentation" >
							<Link href="/who-we-are"> Who We are</Link></li>
							<li role="presentation">
							<Link href="/our-work-process">Our Work Process</Link></li>
							<li role="presentation"><Link href="/faqs">FAQs</Link></li>
							<li role="presentation"><Link href="/why-cybatesoft">Why CybateSoft</Link></li>
							<li role="presentation"><Link href="/our-quality-policy"> Our Quality Policy</Link></li>
							<li role="presentation" className="active"><Link href="/career-opportunities"> Career Opportunities</Link></li>
						</ul>
					</div>

            </div>
          </div>

        </div>
      </div>

      {/* ===== MODAL ===== */}
      {showModal && (
        <div
          className="modal fade in"
          style={{ display: "block", background: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <button
                  className="close"
                  onClick={() => setShowModal(false)}
                >
                  ×
                </button>
                <h4 className="modal-title">
                  <span>Apply for Job</span>
                </h4>
              </div>

              <div className="modal-body">
                <div id="contact_form">
                  <form>

                    <div className="form-group">
                      <label>Name:</label>
                      <input type="text" className="form-control" required />
                    </div>

                    <div className="form-group">
                      <label>Email:</label>
                      <input type="email" className="form-control" required />
                    </div>

                    <div className="form-group">
                      <label>Mobile:</label>
                      <input type="text" className="form-control" required />
                    </div>

                    <div className="form-group">
                      <label>City:</label>
                      <input type="text" className="form-control" required />
                    </div>

                    <div className="form-group">
                      <label>C V (only doc file)*</label>
                      <input type="file" required />
                    </div>

                    <div className="checkbox">
                      <label>
                        <input type="checkbox" required /> I agree to terms and conditions.
                      </label>
                    </div>

                  </form>
                </div>
              </div>

              <div className="modal-footer">
                <button className="btn btn-primary">Apply</button>
              </div>

            </div>
          </div>
        </div>
      )}

    </>
  );
}
