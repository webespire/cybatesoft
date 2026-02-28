import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Bootstrap App Development",
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
	 <Image src="/images/mobile app development.jpg" alt="Customization" className="img-responsive banner_img" width={1351} height={120}/>
	   <div className="banner_heading">
	      <div className="container">
	        <h2>Bootstrap App Development</h2>
	        <p>	</p>
	      </div>
	   </div>
	<div className="container">
			
			<div className="row">
				<div className="col-md-9">
					<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Bootstrap App Development</h2>
						
					<p>Bootstrap is an open-source toolkit released by Twitter and was designed to kickstart webapps and sitesdevelopment and much more. Using clean and semantic HTML and CSS, it is easy to develop and build some of the most intriguing web applications as well as mobile applications. Booting or Bootstrapping refers to a group 
						of metaphors that refer to self-sustaining processes. These processes can also proceed without external help. We are one of the leading IT and ITES solution companies for a variety of businesses and are one of the leading bootstrap app development solutions providers.</p>
					<p>We develop some of the most interactive, efficient and effective bootstrap applications for your business needs and develop them into interactive applications, using the most attractive applications. We are not only one of the best bootstrap app development services company but are also one of the most comprehensive and complete solutions companies. We have some of the most talented and experienced developers. They are also 
						some of the most talented programmers, who develop these applications for a variety of purposes. All these applications including bootstrap app development are designed and developed after extensive study and in-depth research for every project. We also consult some of the most reputed and renowned experts from the industry, while developing each and every project.</p>
					<p>we offer the most competitive prices for developing apps, that are not only for cross platform uses, or can beembedded in web applications, or websites but are also some of the most secure and stable apps. We have a team of extremely talented programmers and also some of the most experienced internet security experts. 
						We are focussed in providing our clients with the best services and top notch products at the most competitive and reasonable prices. As one of the most relied upon bootstrap app development solutions and services companies, we offer complete and comprehensive solutions to all your business needs. We also offer 360 degree IT and ITES solutions for all your requirements. We are known for our punctuality and also for our quality service and customer support.</p>
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
							<li role="presentation" className="active"><Link href="/bootstrap-apps-development" >Bootstrap App Development</Link></li>
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
