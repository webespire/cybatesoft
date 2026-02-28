import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Android Apps Development",
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
	        <h2>Android Apps Development</h2>
	        <p>	</p>
	      </div>
	   </div>
	<div className="container">
			
			<div className="row">
				<div className="col-md-9">
					<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Android Apps Development</h2>
						
					<p>IAndroid is the fastest rising mobile platform. Robust design and scalable architecture coupled with Linux as the core has attracted many manufacturers thereby leading to a many new device launches. Our Android Application Development team ensures that our applications are designed to bring the rich experience by leveraging the device capabilities and ensuring support for upcoming devices.Android operating system is Java 
					based and well suited for mobile devices. It comes with bundle of rich features, which allow users to experience wide range of gleaming mobile applications on their Android Phone. CybateSoft  is one of the leading Android application development companies and from current offshore development center it fulfills all your Android apps development needs in a highly professional way.</p>
					<h3>Benefits of Android Application Development:</h3>
					
					<div className="row">
						
                       
                        <ul className="listing_content">
						
                        <li><i className="fa lccr fa-chevron-circle-right"></i>Android framework has its own benefits, which we develop to professionally, pack your applications with features and functionalities. Following are the characteristics of Android platform:</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i> No licensing fees, hence development cost are abridged spectacularly</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i> Extensive range of videos, audios and images to choose from the library</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>Easily supports interactive media features like video streaming, 3G, WIFI for better user experience</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>Android applications are built around LINUX core, which imparts them high constancy and prevents them from crashing</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>It has features which support quick and easy development of applications. The development costs and time are unsurprisingly reduced.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>Our expert team of Android Developers for high-end Android application development. We have extremely 
							skilled team of Android Developers.Our exclusive combination of skills and experience makes us the perfect choice to develop your Android Application.</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>We have a highly skilled team of Android Developers; have one of the first third party applications and games on this innovatory device either by porting an existing application or developing one from scratch.</li>
                       
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
							<li role="presentation" ><Link href="/iphone/ipad-apps-development"> 	IPhone/IPad Apps Development</Link></li>
							<li role="presentation" className="active"><Link href="/android-app-development">Android Apps Development</Link></li>
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
