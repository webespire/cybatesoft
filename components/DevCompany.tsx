import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function DevCompany() {
  return (
    <div className="dev_company">
        	<div className="container">
            	<div className="row">
                        <div className="comp_heading">
                            <h2>MOBILE APPS,WEB DESIGN &amp; DEVELOPMENT COMPANY</h2>
                            <h6>An ISO 9001:2008 Certified Company from India!</h6>
                        </div>
                        <div className="col-md-6 col-sm-12">
                        	<div className="after_head">
                                <div className="abt_cybate">
                                    <h1><span className="span-cont">CybateSoft</span><br/>About Our Company</h1>
                                    <p>Cybatesoft(CS) is one of the most trusted global offshore Web &amp; Software Development Company. With a futuristic vision, today we have reached a great peak with untiring energy and allegiance towards the work.</p>
									

									<h3>Our Vision:</h3>
					
									<ul style={{listStyleType: 'disc'}}>
										<li>To provide innovative solutions using cutting edge technologies to help our clients achieve their goals.</li>
										<li>To leverage our infrastructure to fulfill our client’s current and future needs.</li>
										<li>To harness the power of human capital to transform business challenges across the globe into creative solutions.</li>
									</ul>
                                    <Link href="/who-we-are" className="da-link">Read More</Link>
									
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="service_head" style={{textAlign: 'center'}}>
                            	<h3>Offshore IT Outsourcing Services</h3>
                            </div>
                            <div className="services1">
                            	<div className="col-md-4 col-sm-4 col-xs-6 pad-ab">
                                	<div className="service_logo1 pad-all">
                        				<Link href="/web-design-branding"><Image src="/images/branding_frist_image.png" alt="manufacturing" width={37} height={37} style={{ border: "0", verticalAlign: "middle" }}/>
                        				<h4>Web Design and Branding</h4></Link>
                    				</div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 pad-ab">
                                	<div className="service_logo2 pad-all">
                        				<Link href="/php-web-development"><Image src="/images/mobile.png" alt="manufacturing" width={37} height={37} style={{ border: "0", verticalAlign: "middle" }}/>
                        				<h4>Php Web Development</h4></Link><Link href="">
                    				</Link></div><Link href="">
                                </Link></div><Link href="">
                                </Link><div className="col-md-4 col-sm-4 col-xs-6 pad-ab"><Link href="">
                                	</Link><div className="service_logo3 pad-all"><Link href="">
                        				</Link><Link href="/mobile-apps-development"><Image src="/images/mobile_app_image.png" alt="manufacturing" width={37} height={37} style={{ border: "0", verticalAlign: "middle" }}/>
                        				<h4>Mobile Apps Development</h4></Link>
                    				</div>
                                </div>
                            </div>
                            <div className="services2">
                            	<div className="col-md-4 col-sm-4 col-xs-6 pad-ab">
                                	<div className="service_logo4 pad-all">
                        				<Link href="/testing-and-qa-services"><Image src="/images/travel.png" alt="manufacturing" width={37} height={37} style={{ border: "0", verticalAlign: "middle" }}/>
                        				<h4>Testing and QA Services</h4></Link>
                    				</div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 pad-ab">
                                	<div className="service_logo5 pad-all">
                        				<Link href="/search-engine-optimization"><Image src="/images/Search_Engine_image.png" alt="manufacturing" width={37} height={37} style={{ border: "0", verticalAlign: "middle" }}/>
                        				<h4>Search Engine Optimization</h4></Link>
                    				</div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 pad-ab">
                                	<div className="service_logo6 pad-all">
                        				<Link href="/it-training-placements"><Image src="/images/it_traning_image.png" alt="manufacturing" width={37} height={37} style={{ border: "0", verticalAlign: "middle" }}/>
                        				<h4>IT Training &amp; Placements</h4></Link>
                    				</div>
                                </div>
                            </div><Link href="">
                        </Link></div><Link href="">
                    </Link></div><Link href="">
                </Link></div><Link href="">
            </Link></div>
  )
}
