import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Mobile Apps Development",
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
	        <h2>Mobile Apps Development</h2>
	        <p></p>
	      </div>
	   </div>
	<div className="container">
			
			<div className="row">
				<div className="col-md-9">
					<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Mobile Apps Development</h2>
						
					<p>Just a few years back, mobile phones offered nothing more than SMS, music, calendar, alarm, camera and few other facilities. Such mobile devices are now relegated to the category of ‘feature phones’. The new generation mobiles, PDAs and smart phones in vogue today offer much more. These touch screen, internet 
						enabled devices now sport a host of features in addition to standard ones, not to say a number of applications. In short, these equipments are a phone and a computer combined in one.</p>
					<h3>Mobile App Development</h3>
					<p>In addition to standard features, the major attraction in mobiles is the applications that do all conceivable functions. Today, there are a lot of interesting mobile applications available which makes the use of mobile phones more stimulating. Along with the development of mobile/smart phones, the need for custom apps 
					development has also increased. As a mobile application development company, We offers professional services ranging from custom apps development, including mobile games, mobile theme design and a host of other mobile software solutions.</p>
					<h3>Our Mobile App Development Services:</h3>
					<p><strong>IPhone: </strong>we develop customized iPhone apps for different uses and industry demands, which includes application of all latest version of iPhone like iOS4 and even all older versions of the iPhone.</p>
					<p><strong>Android:</strong> We offer Android mobile application development for Android platform. Android supports development for Java-based applications so our mobile application developers can build third party applications on Java which can run on Android platform.</p>
					<p><strong>BlackBerry:</strong> We have vast experience in developing the BlackBerry mobile phone application and blackberry software development. We have our clients for the Blackberry mobile application development all over the globe like United States, United Kingdom, and Australia.</p>
					<p>Please contact us today for total services in mobile app development, smart phone solutions and other application development for mobiles. We also provide iPhone programmers, Android developers, BlackBerry application developers and various other application developers on hire on daily, monthly or contract basis.</p>
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
							<li role="presentation" className="active"><Link href="/mobile-apps-development">Mobile Apps Development</Link></li>
							<li role="presentation" ><Link href="/iphone/ipad-apps-development"> 	IPhone/IPad Apps Development</Link></li>
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
