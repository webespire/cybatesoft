import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export const metadata = {
  title: "Who We Are",
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

export default function page() {
  return (
    <>
<div className="clearfix"></div>
	<div className="inner_page_banner">
				
					 <Image src="/images/about us.JPG" className="img-responsive banner_img" width={1351} height={156} alt="who we are"/>
						 
							<div className="banner_heading">
							<div className="container">
								<h2>Who We are</h2>
								<p></p>
								</div>
							</div>							
				</div>
		 
	<div className="container">	
			<div className="row">
			<div className="tab-content">
              
				<div className="col-md-9">
				<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Who We are</h2>
						</div>
					</div>
					<div className="inner_page_pad">
					<div className="inner_devolopment">
					<h3>CYBATESOFT: A Matchless Advanced Reliable Offshore IT Company!</h3>
					<p>CybateSoft Founded in 2013,Our Company is a Software Development company that has carved a niche for itself in the field of IT services and has consistently set quality benchmark 
						in terms of innovation and cutting edge technology. Our continual investing in R&amp;D help companies.</p>
					<p>CybateSoft combination of the software development, client support, and consulting teams under one umbrella enables a stronger focus on the business needs of our clients.</p>
				
					<h3>Cybatesoft(CS) is one of the most trusted global offshore Web &amp; Software Development Company. With a futuristic vision, today we have reached a great peak with untiring energy and allegiance towards the work.</h3>
					<p>Want more Online/digital identity, traffic, subscribers, profits generating in terms of website, ecommerce store or mobile apps then you are at right place.</p>
					<p>We offer wide range of software development services – Application Software Development, Content Management System, Migration and Reengineering, Remote Support 
						Services, Outsourced Software Product Development, Social Media and Consulting to clients stemmed from strong foundation of professionalism.</p>
					<p>CybateSoft brings to the global software experience in Education, Energy &amp; Utilities, Healthcare, Media &amp; Entertainment, Telecom, Real estate, Logistics industries and allows its 
						clients to significantly improve the business value of their enterprise.</p>
					
					</div>
                    </div>
					<div className="map">
					<Image src="/images/about-us.jpg" width="690" height="540" alt="About Us Image" className='img-responsive'/>
					</div>
                      <div className="">
					<div className="inner_devolopment">
					<h3>Our Vision:</h3>
					
					<ul style={{ listStyleType: "disc" }}>
					<li>To provide innovative solutions using cutting edge technologies to help our clients achieve their goals.</li>
					<li>To leverage our infrastructure to fulfill our client’s current and future needs.</li>
					<li>To harness the power of human capital to transform business challenges across the globe into creative solutions.</li>
					</ul>
					</div>
                    </div>
					 <div className="">
					<div className="inner_devolopment">
					<h3>Our Vision:</h3>
					
					<ul style={{ listStyleType: "disc" }}>
					<li>Integrity - Honesty in how we deal with our clients, each other and with the world.</li>
					<li>Candor - Be open and upfront in all our conversations. Keep clients updated on the real situation. Deal with situations early; avoid last minute surprises.</li>
					<li>Service - Seek to empower and enable our clients. Consider ourselves successful not when we deliver our client’s final product but when the product is launched and meets success.</li>
					</ul>
					</div>
                    </div>
                 				
				</div>
			<div className="col-md-3">
				<div className="right_panel">
					<div className="right_panel_heading">
						<h3>Company</h3>
					</div>
					<div className="programming_platforms_list">
						<ul className="nav nav-pills nav-stacked " id="tab">
							<li role="presentation" className="active">
							<Link href="/who-we-are"> Who We are</Link></li>
							<li role="presentation">
							<Link href="/our-work-process">Our Work Process</Link></li>
							<li role="presentation"><Link href="/faqs">FAQs</Link></li>
							<li role="presentation"><Link href="/why-cybatesoft">Why CybateSoft</Link></li>
							<li role="presentation"><Link href="/our-quality-policy"> Our Quality Policy</Link></li>
							
						</ul>
					</div>
					<div className="right_panel_heading">
						<h3>Request Information</h3>
					</div>
					<div className="programming_platforms_list">
					<p> Please complete our request information form and our consulting representative shall get in touch with you shortly.</p>
						<ul className="nav nav-pills nav-stacked " id="tab">
							<li role="presentation" className="active">
							<Link href="/request-a-quote">Request a Quote</Link></li>
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
