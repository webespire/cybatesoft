import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
   <div className="projects"><Link href="">
          </Link><div className="container"><Link href="#">
            <div className="center wow fadeInDown" style={{textAlign: 'center'}}>
              <h1>Over <span className="red_no">270+</span> Projects Developed last  <span className="red_no"> 3</span> Years</h1>
              <div className="divider_gray">&nbsp;</div>
            </div>
            </Link><div className="row"><Link href="#">
              </Link><div className="col-xs-12 col-sm-4 col-md-3"><Link href="#">
                </Link><div className="recent-work-wrap"><Link href="#">
                  <Image className="img-responsive" src="/images/logo1.png" alt="logo1" width={273} height={211}/>
                  </Link><div className="overlay"><Link href="#">
                    </Link><div className="recent-work-inner"><Link href="#">
                      <h2>Creative web Designer</h2>
                      <p>Our portfolio listed below gives you a glimpse of our diverse creative web design industry experience..</p>
                      </Link><Link className="preview" href="/technology-portfolio" rel="prettyPhoto">View More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-3">
                <div className="recent-work-wrap">
                  <Image className="img-responsive" src="/images/logo2.png" alt="logo2" width={273} height={211}/>
                  <div className="overlay">
                    <div className="recent-work-inner">
                      <h2>CMS Website Design</h2>
                      <p>The creative CMS website system works the way you work. Browse your website adding or editing content right on your website pages.</p>
                      <Link className="preview" href="p/industry-portfolio" rel="prettyPhoto">View More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-3">
                <div className="recent-work-wrap">
                  <Image className="img-responsive" src="/images/logo3.png" alt="logo3" width={273} height={211}/>
                  <div className="overlay">
                    <div className="recent-work-inner">
                      <h2> Website Development</h2>
                      <p>Web Development covers the basics of application programming, how to build your website and applications.</p>
                      <Link className="preview" href="/portfolio-php" rel="prettyPhoto">View More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-3">
                <div className="recent-work-wrap">
                  <Image className="img-responsive" src="/images/logo4.png" alt="logo4" width={273} height={211}/>
                  <div className="overlay">
                    <div className="recent-work-inner">
                      <h2>Logo Design</h2>
                      <p>Logo Design portfolio of Cybatesoft, a creative graphic designer in India. Features logo design, landing page design, website design &amp; more.</p>
                      <Link className="preview" href="/portfolio-logo-design" rel="prettyPhoto">View More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-3">
                <div className="recent-work-wrap">
                  <Image className="img-responsive" src="/images/logo5.png" alt="logo5" width={273} height={211}/>
                  <div className="overlay">
                    <div className="recent-work-inner">
                      <h2>Mobile Apps Development</h2>
                      <p>Check out top notch mobile solutions including mobile apps in industry for healthcare and more.</p>
                      <Link className="preview" href="/portfolio-ios" rel="prettyPhoto">View More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-3">
                <div className="recent-work-wrap">
                  <Image className="img-responsive" src="/images/logo6.png" alt="logo6" width={273} height={211}/>
                  <div className="overlay">
                    <div className="recent-work-inner">
                      <h2>E-commerce Solutions</h2>
                      <p>Cybatesoft expertise in eCommerce solutions.</p>
                      <Link className="preview" href="/industry-portfolio" rel="prettyPhoto">View More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-3">
                <div className="recent-work-wrap">
                  <Image className="img-responsive" src="/images/logo7.png" alt="logo7" width={273} height={211}/>
                  <div className="overlay">
                    <div className="recent-work-inner">
                      <h2>SEO Agency India</h2>
                      <p>Get to know Cybatesoft business and their successes. Read case studies in our Web Design, Mobile Apps and more at Cybatesoft.com.</p>
                      <Link className="preview" href="/portfolio-seo" rel="prettyPhoto">View More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-3">
                <div className="recent-work-wrap">
                  <Image className="img-responsive" src="/images/logo8.png" alt="logo8" width={273} height={211}/>
                  <div className="overlay">
                    <div className="recent-work-inner">
                      <h2>IT Training &amp; Placements</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <Link className="preview" href="#" rel="prettyPhoto">View More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
 
		</div>
  )
}
