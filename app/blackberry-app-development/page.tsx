import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Blackberry App Development",
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
	 <img src="/images/mobile app development.jpg" className="img-responsive"/>
	   <div className="banner_heading">
	      <div className="container">
	        <h2>Blackberry App Development</h2>
	        <p>	</p>
	      </div>
	   </div>
	<div className="container">
			
			<div className="row">
				<div className="col-md-9">
					<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Blackberry App Development</h2>
						
					<p>BlackBerry by RIM (Research in Motion) is the ultimate Smartphone for office and corporate use. With a wide range of features, BlackBerry stands out in the tough and highly competitive Smartphone market. The rapid and growing popularity of this phone has shown the way to an entirely new sector of BlackBerry applications development Industry.</p>
						<p>CybateSoft has expert and proficient BlackBerry application developers, who provide solutions to all queries related to the BlackBerry app development. Customized new apps or integrating and porting already existing apps to your BlackBerry device, is a part of our BlackBerry application solutions. We help in the migration of app, from J2ME to BlackBerry, mobile PDA embedded wireless technologies and other internet based solutions.</p>
					<p>With the ever-increasing popularity of BlackBerry, there is an increasing need for constant app development to suit the needs and standards of the market. We provide innovative solutions to app development compatible with every BlackBerry device – be it Bold, Curve or Storm. We also stress in BlackBerry mobile games development.</p>
					<p>It is a myth that BlackBerry is meant for serious business purposes. Rather, the stable platform of BlackBerry makes it a leading competitor in the development of games. CybateSoft offers an amazing array of BlackBerry application development services as per the clients’ pre-requisites under the BlackBerry Game Programming. We have experienced app developers who are just as enthusiastic about building games compatible for BlackBerry.</p>
					<p>Our Game programmers are experts in JDE and BlackBerry Smart phones and use their expertise to their advantage in developing astounding BlackBerry games. We provide an amazing range of app development for BlackBerry to suit the purposes and the needs of our clientele. From wireless solutions to advertisements and client server applications, you name it, and we will have it developed. CybateSoft aims in endowing its clients with hassle free BlackBerry app development to suit every need and purpose.</p>
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
							<li role="presentation" ><Link href="/android-app-development">Android Apps Development</Link></li>
							<li role="presentation" ><Link href="/cross-platform-apps-development">PCross Platform Apps Development</Link></li>
							<li role="presentation"><Link href="/mobile-theme" >Mobile Themes</Link></li>
							<li role="presentation"><Link href="/phone-gap-app-development">Phone Gap App Development</Link></li>
							<li role="presentation" ><Link href="/bootstrap-apps-development" >Bootstrap App Development</Link></li>
							<li role="presentation" className="active"><Link href="/blackberry-app-development">Blackberry App Development</Link></li>
						
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
