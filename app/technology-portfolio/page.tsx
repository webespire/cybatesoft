import React from "react";
import Image from "next/image";
import Link from "next/link";

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
                .Net
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

      {/* ===== Technology Icons ===== */}
      <div className="imp_main_com">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="small_circle">
                <ul>
                  {/* .Net */}
                  <li className="active">
                    <Link href="/portfolio-net">
                      <Image
                        src="/images/net.png"
                        alt=".Net"
                        width={57}
                        height={57}
                      />
                    </Link>
                    <p>.Net</p>
                    <div className="triangle-down"></div>
                  </li>

                  {/* PHP */}
                  <li>
                    <Link href="/portfolio-php">
                      <Image
                        src="/images/php.png"
                        alt="PHP"
                        width={57}
                        height={57}
                      />
                    </Link>
                    <p>PHP</p>
                    <div className="triangle-down"></div>
                  </li>

                  {/* iOS */}
                  <li>
                    <Link href="/portfolio-ios">
                      <Image
                        src="/images/ios.png"
                        alt="iOS"
                        width={57}
                        height={57}
                      />
                    </Link>
                    <p>iOS</p>
                    <div className="triangle-down"></div>
                  </li>

                  {/* Android */}
                  <li>
                    <Link href="/portfolio-android">
                      <Image
                        src="/images/android.png"
                        alt="Android"
                        width={57}
                        height={57}
                      />
                    </Link>
                    <p>Android</p>
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
                <h1>.NET WORK</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
