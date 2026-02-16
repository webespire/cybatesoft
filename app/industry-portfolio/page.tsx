import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <>
      {/* ===== Banner ===== */}
      <div className="inner_page_banner">
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="col-md-3 text-center">
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  margin: 0,
                }}
              >
                Ecommerce
              </h2>
            </div>

            <div className="col-md-9">
              <Image
                src="/images/portfolio.jpg"
                alt="Portfolio"
                width={848}
                height={98}
                style={{ width: "100%", height: "auto" }}
                className="img-responsive banner_img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Icons Section ===== */}
      <div className="imp_main_com">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="small_circle">
                <ul>
                  <li className="active">
                    <Link href="/industry-portfolio">
                      <Image
                        src="/images/ecom_icon.png"
                        alt="Ecommerce"
                        width={55}
                        height={55}
                      />
                    </Link>
                    <p>Ecommerce</p>
                    <div className="triangle-down"></div>
                  </li>

                  <li>
                    <Link href="/portfolio-seo">
                      <Image
                        src="/images/seo_icon.png"
                        alt="SEO"
                        width={55}
                        height={55}
                      />
                    </Link>
                    <p>SEO</p>
                    <div className="triangle-down"></div>
                  </li>

                  <li>
                    <Link href="/portfolio-internet-marketing">
                      <Image
                        src="/images/in_icon.png"
                        alt="Internet Marketing"
                        width={55}
                        height={55}
                      />
                    </Link>
                    <p>Internet-Marketing</p>
                    <div className="triangle-down"></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Work Section ===== */}
      <div className="body_str">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="java_work">
                <h1>ECOMMERCE WORK</h1>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Item 1 */}
            <div className="col-md-4">
              <div className="zip_main">
                <div className="image_crl">
                  <Link
                    href="http://yourgiftsgalore.labellabaskets.com/"
                    target="_blank"
                  >
                    <Image
                      src="/images/techport/baskets.png"
                      alt="La Bella"
                      width={353}
                      height={196}
                      className="img-responsive"
                    />
                  </Link>
                </div>

                <div className="text_bomt">
                  <h4>La Bella</h4>
                  <p>Create gifts and send.</p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="col-md-4">
              <div className="zip_main">
                <div className="image_crl">
                  <Link
                    href="https://obakkifoundation.org/"
                    target="_blank"
                  >
                    <Image
                      src="/images/techport/foundation.png"
                      alt="Obakki"
                       width={353}
                      height={196}
                      className="img-responsive"
                    />
                  </Link>
                </div>

                <div className="text_bomt">
                  <h4>Obakki</h4>
                  <p>It all begins with water..</p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="col-md-4">
              <div className="zip_main">
                <div className="image_crl">
                  <Link
                    href="http://alta-travels.com/"
                    target="_blank"
                  >
                    <Image
                      src="/images/techport/travels.png"
                      alt="Alta Travels"
                      width={353}
                      height={196}
                      className="img-responsive"
                    />
                  </Link>
                </div>

                <div className="text_bomt">
                  <h4>Alta</h4>
                  <p>
                    Two Days Luxury Accommodation in Quality Sabari Inn
                    Resorts or Similar...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
