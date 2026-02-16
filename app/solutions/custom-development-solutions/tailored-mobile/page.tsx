import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function page() {
  return (
    <>
    <div className="clearfix"></div>
			<div className="inner_page_banner">
						 <Image src="/images/tm.png" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
								<div className="banner_heading">
									 <div className="container">
									  <h2>Tailored Mobile</h2>
									</div>
								</div>
			</div> 
	<div className="container">
		
			<div className="row">
								<div className="col-md-9">
					<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Custom Development Solutions {">>"} Tailored Mobile</h2>
							<h4>Using Custom Mobile Applications to Drive Engagement and Operational Efficiency</h4>
                            <p>In today's mobile-first world, CybateSoft's Tailored Mobile Solutions enable businesses to remain flexible, connected, and customer-focused. We assist you in delivering individualized experiences that engage customers, optimize workflows, and spur digital growth by creating mobile applications that are precisely in line with your brand and operational requirements.</p>
                            <p>CybateSoft develops scalable and secure mobile apps that facilitate innovation and business continuity in a time when customer satisfaction is defined by mobile experiences. Our knowledge of native, hybrid, and cross-platform mobile solutions guarantees smooth operation on enterprise systems, iOS, and Android. Our mobile solutions are made to produce outcomes, whether they are for internal process apps, e-commerce platforms, or field service automation.</p>
                        </div>
					
                    <div className="row">
                    <div className="col-md-7 col-sm-12">
                    
					<div className="inner_devolopment">
						<h3>Our Offerings for Customized Mobile Solutions</h3>
					<ul className="listing_content">
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Create high-performing apps for iOS, Android, and hybrid environments with native and cross-platform app development.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  UI/UX Design & Prototyping: Provide streamlined, user-focused designs that increase interaction.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Integrate cloud, ERP, and CRM systems with mobile solutions through enterprise mobility integration.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Optimize performance to guarantee dependability, scalability, and speed across devices.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Mobile Security & Compliance: Use cutting-edge authentication and encryption to protect user data.</li>
						</ul>
					</div>
                    </div>
                     <div className="col-md-5 col-sm-12">
						<div className="img-btn_center">
                     	<Image src="/images/tm_logo.png" alt="" className="img-responsive" width={260} height={209}/>
						<div className="img_btn_link">
						<Link href="/portfolio-php" className="btn btn-success ">View Portfolio</Link>
						</div>
						</div>
                     </div>
                     </div>

					  <div className="inner_devolopment">
                        <h3>Smart Mobile Architecture</h3>
					<div className="inner_devolopment2">
                        <div className="row">
                        <div className="col-md-6">
                        <ul className="listing_content">
                        <p>Our customized mobile development methodology blends automation, analytics, and creativity. In order to help businesses make data-driven decisions and accomplish quantifiable results, we place a high priority on high performance, intuitive UI/UX design, and integration with cloud, ERP, and CRM systems. CybateSoft transforms mobile technology from a digital tool to a strategic advantage.</p>
                    </ul></div>
                        <div className="col-md-6">
                        <ul className="listing_content">
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  high performance</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  intuitive UI/UX design</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  integration with cloud</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  ERP integration</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  CRM integration</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Business process mapping</li>
                        </ul></div>
						
						
						
						
                        </div>
					</div>

					<div className="img-btn_center">
                     	<Image className="img-responsive wd100" width={848} height={132} src="/images/tm1.png" alt="templates"/>
						<div className="img_btn_link2">
						<Link href="/portfolio-php" className="btn btn-success ">View Portfolio</Link>
						</div>
						</div>
					 
					</div>
                    <div className="inner_devolopment">
                        <h3>Intelligent Mobile Strategy</h3>
					<div className="inner_devolopment2">
                        <div className="row">
                        <div className="col-md-6">
                        <ul className="listing_content">
						<p>CybateSoft's customized mobile solutions are designed to help businesses connect more effectively, innovate more quickly, and run more efficiently. We make it possible for teams to work effectively and for customers to interact with you at any time and from any location by incorporating intelligent mobility into your business plan.</p>
                        </ul></div>
                        <div className="col-md-6">
                        <ul className="listing_content">
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Data migration</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  User training</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Post-launch support</li>
                        </ul></div>
						
                        </div>
					</div>
					<div className="img-btn_center">
                     	<Image className="img-responsive wd100" width={848} height={132} src="/images/tm2.png" alt="templates"/>
						<div className="img_btn_link2">
						<Link href="/portfolio-php" className="btn btn-success ">View Portfolio</Link>
						</div>
						</div>
					</div>
                    </div>
				
					
									
				</div>

			<div className="col-md-3">
				<div className="right_panel">
					<div className="right_panel_heading">
						<h3>Programming Platforms</h3>
					</div>
					<div className="programming_platforms_list">
						<ul className="nav nav-pills nav-stacked " id="tab">
							<li role="presentation" className="active"><Link href="/solutions/custom-development-solutions/tailored-mobile">Tailored Mobile</Link></li>
							<li role="presentation"><Link href="/solutions/custom-development-solutions/web-apps-for-business">Web Apps for Business</Link></li>
							</ul>
					</div>
					
					
				</div>	  
			</div>	  
		</div>
		
           
        </div>
		
        
		
    </>
  )
}
