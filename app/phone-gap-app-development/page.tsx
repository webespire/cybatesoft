import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Contact Us",
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
	 <Image src="/images/mobile app development.jpg" alt="Mobile Apps Development" className="img-responsive banner_img" width={1351} height={120}/>
	   <div className="banner_heading">
	      <div className="container">
	        <h2>Phone Gap App Development</h2>
	        <p>	</p>
	      </div>
	   </div>
	<div className="container">
			
			<div className="row">
				<div className="col-md-9">
					<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Phone Gap App Development</h2>
						
					<p>PhoneGap is a free and open source framework. This open source and free framework allows creating mobile apps and is used with standardised web APIs. PhoneGap also allows freedom from compiling apps that are built using PhoneGap and provides app-store ready solutions. PhoneGap also offers relief from maintaining native SDK, and the framework is also provided with cloud compiling and compound. Though most businesses 
						prefer apps focussed for iOS and Android, it is very important to develop apps that are also compatible with BlackBerry, Windows based phone and also a range of other handheld and mobile devices running on a variety of operating systems. This is to make your apps or business more available to the widest possible range of internet users; PhoneGap app development solves all these minute problems for your business requirement.</p>
					<p>PhoneGap app development services India is full of talented freelance developers as well as companies which have PhoneGap app development solution companies of various sizes. What keeps Cybatesoft head and shoulders above such companies and freelancers is not only timely delivery of the projects, but the quality of 
						the application and lot more.  we have some of the most talented developers and programmers who use a number of ways to develop customised applications for your business needs. We also design and develop extremely interactive applications as well as some of the most stunning apps that integrate superbly designed multimedia or other tools for a real life look and feel.</p>
					<p>CybateSoft  has become one of the leading PhoneGap app development solutions company due to the quality of their product as well as the competitive pricing. We provide some of the most effective and efficient PhoneGap application development services in India. We design and develop these applications only after understanding the need in detail and understanding the expectations. We also consult a number of very experienced and renowned industry experts to deliver the best solutions. We also offer extended support for 
						all our products and much more, including 24X7 technical assistance and complete and comprehensive solutions for all your IT and ITES needs. We have been one of the most trusted and depended IT and ITES solution companies for both corporate giants as well as SMEs for our top notch products and reasonable pricing. We are just a phone call or email away from providing the best possible solution.</p>
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
							<li role="presentation" ><Link href="/mobile-apps-development">Mobile Apps Development</Link></li>
							<li role="presentation" ><Link href="/iphone/ipad-apps-development"> 	IPhone/IPad Apps Development</Link></li>
							<li role="presentation"><Link href="/android-app-development">Android Apps Development</Link></li>
							<li role="presentation"><Link href="/cross-platform-apps-development">PCross Platform Apps Development</Link></li>
							<li role="presentation"><Link href="/mobile-theme" >Mobile Themes</Link></li>
							<li role="presentation"  className="active"><Link href="/phone-gap-app-development">Phone Gap App Development</Link></li>
							<li role="presentation"><Link href="/bootstrap-apps-development" >Bootstrap App Development</Link></li>
							<li role="presentation"><Link href="/blackberry-app-development">Blackberry App Development</Link></li>
						
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
