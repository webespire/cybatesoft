import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "News and Events",
  description:
    "An another open source project of Codeigniter with Bootstrap. It is a Lightweight MVC package for you to build your own Custom CMS.",
  keywords: [
    "Codeigniter CMS", "Custom CMS", "Customised Content Management System", "Lightweight CMS", "Tiny CMS", "Flexible CMS", "Download CMS", "Bootstrap CMS", "Mobile CMS", "Responsive CMS"
  ],
};

export default function page() {
  return (
   <>
    <div className="clearfix"></div>

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
          <h2>News and Events</h2>
          <p>
            Custom Web Development, Custom Software Development, Mobile Application Development <br/>
            Enterprise Mobility Solution, Microsoft development Solutions, Enterprise Software Solution
          </p>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="tab-content">

          <div className="col-md-9">
            <div className="left_panel">
              <div className="inner_devolopment">
                <h2>All News and Events</h2>
              </div>
            </div>

            {/* ===== News Items ===== */}

            <div className="inner_page_pad">
              <div className="inner_devolopment">
                <div className="row">
                  <div className="col-md-2 col-sm-2">
                    <div className="show_date">
                      <h4>2016-03-12</h4>
                    </div>
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <h3><Link href="/page/newsdetail/5">tied up with mexico Company.</Link></h3>
                    <p>Automotive</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="inner_page_pad">
              <div className="inner_devolopment">
                <div className="row">
                  <div className="col-md-2 col-sm-2">
                    <div className="show_date">
                      <h4>2016-03-12</h4>
                    </div>
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <h3><Link href="/page/newsdetail/4">Banking</Link></h3>
                    <p>Banking</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="inner_page_pad">
              <div className="inner_devolopment">
                <div className="row">
                  <div className="col-md-2 col-sm-2">
                    <div className="show_date">
                      <h4>2016-03-12</h4>
                    </div>
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <h3><Link href="/page/newsdetail/3">Consumer packaged Goods</Link></h3>
                    <p>Consumer packaged Goods</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="inner_page_pad">
              <div className="inner_devolopment">
                <div className="row">
                  <div className="col-md-2 col-sm-2">
                    <div className="show_date">
                      <h4>2016-03-15</h4>
                    </div>
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <h3><Link href="/page/newsdetail/2">E-Commerce</Link></h3>
                    <p>E-Commerce</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="inner_page_pad">
              <div className="inner_devolopment">
                <div className="row">
                  <div className="col-md-2 col-sm-2">
                    <div className="show_date">
                      <h4>2016-03-25</h4>
                    </div>
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <h3><Link href="/page/newsdetail/1">Education Publishing</Link></h3>
                    <p>Education Publishing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="inner_page_pad">
              <div className="inner_devolopment">
                <div className="row">
                  <div className="col-md-2 col-sm-2">
                    <div className="show_date">
                      <h4>2024-10-22</h4>
                    </div>
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <h3><Link href="/page/newsdetail/6">Manufacturing</Link></h3>
                    <p>Manufacturing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="inner_page_pad">
              <div className="inner_devolopment">
                <div className="row">
                  <div className="col-md-2 col-sm-2">
                    <div className="show_date">
                      <h4>2024-10-22</h4>
                    </div>
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <h3><Link href="/page/newsdetail/7">Retail</Link></h3>
                    <p>Retail</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="inner_page_pad">
              <div className="inner_devolopment">
                <div className="row">
                  <div className="col-md-2 col-sm-2">
                    <div className="show_date">
                      <h4>2024-10-22</h4>
                    </div>
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <h3><Link href="/page/newsdetail/8">Travel & Hospitality</Link></h3>
                    <p>Travel & Hospitality</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Panel */}
          <div className="col-md-3">
            <div className="right_panel">
              <div className="right_panel_heading">
                <h3>Request Information</h3>
              </div>
              <div className="programming_platforms_list">
                <p>
                  Please complete our request information form and our consulting representative shall get in touch with you shortly.
                </p>
                <ul className="nav nav-pills nav-stacked">
                  <li className="active">
                    <a href="http://cybatesoft.com/dev/index.php/request-a-quote">
                      Request a Quote
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
   </>
  )
}