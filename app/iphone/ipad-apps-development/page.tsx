import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "IPhone/IPad Apps Development",
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
	 <Image src="/images/mobile app development.jpg" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
	   <div className="banner_heading">
	      <div className="container">
	        <h2>IPhone/IPad Apps Development</h2>
	        
	      </div>
	   </div>
	<div className="container">
			
			<div className="row">
				<div className="col-md-9">
					<div className="left_panel">
						<div className="inner_devolopment">
							<h2>IPhone/IPad Apps Development</h2>
						
					<p>Iphone is the most advanced mobile in today’s market. It has gained high popularity in the mobile industry due to its hi-tech and stylish features such as multi-touch screen, retina display, dual camera, enhanced GPS navigation, accelerometer and advance iOS to name just a few.We are into iPhone app development right from its launch and have successfully developed and deployed 100+ iPhone applications on the Apple App 
						Store. Our team of iPhone app developer has developed applications for use in such different fields as business, medical, fashion, travel, education, finance, social networking, entertainment and much more.Possibly, no other handset has jump-started mobile application market as much as the Apple iPhone and the iPad. Having iOS and Mac technologies at the core, the iphone developer teams for Iphone Application 
						Development and iPad application development provide exclusivity to each application by leveraging the different form factors thereby bringing a unique and incomparable consumer experience. We consider ourselves auspicious to have facilitated our customer in winning the top awards at Mobile World Congress, CTIA Wireless and being rated among the top 10 on App Store.</p>
						<h3>Benefits of choosing our iPhone application development services:</h3>
					
					<div className="row">
						
                       
                        <ul className="listing_content">
						
                        <li><i className="fa lccr fa-chevron-circle-right"></i>iPhone app developer with deep expertise in using iPhone OS</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i> Successful development and listing of 100+ iPhone applications on App Store</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i> Excellent user interface designers</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i> Carefully tested apps for a flawless user experience</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>We make sure version compatibility of iOS1 month support after UAT(User Acceptance Test) for a bug free app</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>Coding as per the guidelines of Apple</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>IService for Promotion of developed application (Chargeable)</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>Guaranteed approval on the app store</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>iPhone app marketing</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>Develop universal application compatible with both iPhone and iPad</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>Source code security with non-disclosure agreement</li>
					
                        
						</ul>
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
							<li role="presentation" ><Link href="/mobile-apps-development">Mobile Apps Development</Link></li>
							<li role="presentation" className="active"><Link href="/iphone/ipad-apps-development"> 	IPhone/IPad Apps Development</Link></li>
							<li role="presentation"><Link href="/android-app-development">Android Apps Development</Link></li>
							<li role="presentation"><Link href="/cross-platform-apps-development">PCross Platform Apps Development</Link></li>
							<li role="presentation"><Link href="/mobile-theme" >Mobile Themes</Link></li>
							<li role="presentation"><Link href="/phone-gap-app-development">Phone Gap App Development</Link></li>
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
