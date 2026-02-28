import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Cross Platform Apps Development",
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
	        <h2>Cross Platform Apps Development</h2>
	        <p>	</p>
	      </div>
	   </div>
	<div className="container">
			
			<div className="row">
				<div className="col-md-9">
					<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Cross Platform Apps Development</h2>
						
					<p>HTML5 is huge!! Formally defined by an international standards body known as the World Wide Web Consortium (W3C), HTML5 consists of more than 100 specifications that relate to the next generation of Web development technologies. By putting all 100-plus of these specifications under the moniker HTML5, you could argue that the W3C over simplified things.</p>
					<p>In fact, HTML5 is a collaborative term describing a set of HTML, CSS and JavaScript specifications designed to build the next generation of Web sites and applications. What’s notable in that definition is its three parts: HTML, CSS and JavaScript, and that’s it. HTML5 is about changes to HTML, CSS and JavaScript, those three terms describe the breadth and scope of HTML5.</p>
					<p>“Site-Ready HTML5” is the term Microsoft Ltd. uses to describe HTML5 technologies that you can use today because they have broad support across all major browsers. Technologies like the new HTML tags, Canvas, Audio and Video, Scalable Vector Graphics, Web Storage, Geolocation and many new CSS3 modules all fall into this space, and they’re implemented and support all mainstream browsers.</p>
					<p>‘Hybrid Apps’ – HTML5 Adoption for Cross Platform Mobile, the Easier Alternative to Native Apps.</p>
					<p>“Hybrid Apps”, middle ground between HTML5 and Native apps, fuse the best of both approaches: The cost-effectiveness and flexibility of HTML5, along with the performance, distribution, and monetization advantages of native apps.Currently, the decision to develop web-based apps versus native largely depends on the use 
						case. For example, consider the difference between a gaming app and a publishing app. Gaming apps rely more heavily on the native controls of the platform where it resides, whereas publishing apps are far less dependent on native integration, typically donning a basic user interface (UI), which consists mainly of text and menus. Publishing content within this framework is much less complex and therefore is better suited for a 
						web-based framework.From the Development point of view there is huge difference between native and hybrid apps, because instead of rewriting the app from scratch for each individual native mobile OS, in Hybrid Apps, we can write at least some of their application code in HTML, CSS and JavaScript, and reuse it across devices. So, HTML5 means faster implementation and deployment.</p>
					
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
							<li role="presentation" className="active"><Link href="/cross-platform-apps-development">PCross Platform Apps Development</Link></li>
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
