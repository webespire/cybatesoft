import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Mobile Themes",
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
	        <h2>Mobile Themes</h2>
	        <p>	</p>
	      </div>
	   </div>
	<div className="container">
			
			<div className="row">
				<div className="col-md-9">
					<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Mobile Themes</h2>
						
					<p>Mobile Theme & Application Design works as a professional tool for businesses of individuals and it ultimately becomes the one stop, as it does not concession on the user’s understanding for the content for imaging. Rapidly increasing competition and ever-changing market trends have important the need of efficient 
						technology. But you must be considerate about your budget as well as business requirements. In order to make the multimedia experiences sparkling and extraordinary forever, Flash is just the tool to use. Today, the requirement of the flash base web has increased by the company’s for the brand image building. It is used on large scale for introducing standard HTML web sites.We can offer you mobile compatible web design services. 
						Our dedicated software developers can provide you ordinary design, which is compatible in mobile devices too. One can easily surf Internet even in your tiny mobile devices with our mobile enabled applications. Our dedicated software designers are having well experience in mobile web design to produce successful mobile web design services.</p>
				<h3>Mobile Theme Design is made using the below features by NTPL:</h3>
					
					<div className="row">
					<div className="col-md-6">
					    <ul className="listing_content">
						
                        <li><i className="fa lccr fa-chevron-circle-right"></i>Quickly Loadable</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i> WAP and Search Engine Friendly</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i> Mobile Browsers Compatible</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i> Using CSS for layout</li>
						</ul></div>
						<div className="col-md-6">
						<ul className="listing_content">
						<li><i className="fa lccr fa-chevron-circle-right"></i>User-friendly navigation</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>Coded with XHTML or XML</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>Character encoding with UTF-8</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>Using JPEG / Gif Images</li>
						
						</ul></div>
						</div>
						<p>CybateSoft has been working in this field for more than 4 years now and has collective a lot of inspiring experience to help you develop just the kind of Mobile Theme you would want. We have a team of expert designers who work according to your needs continuously giving useful inputs to make the best out of what you have in the ideation form to get what will be the ideal adaptation of it to actuality.</p>
						<h3>Our Theme Design services cover:</h3>
					
					<div className="row">
					<div className="col-md-6">
					    <ul className="listing_content">
						
                        <li><i className="fa lccr fa-chevron-circle-right"></i>Custom Keypads</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>Game themes</li>
						</ul></div>
						<div className="col-md-6">
						<ul className="listing_content">
						<li><i className="fa lccr fa-chevron-circle-right"></i>Anime themes</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>Color themes</li>
						
						</ul></div>
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
							<li role="presentation"><Link href="/android-app-development">Android Apps Development</Link></li>
							<li role="presentation"><Link href="/cross-platform-apps-development">PCross Platform Apps Development</Link></li>
							<li role="presentation" className="active"><Link href="/mobile-theme" >Mobile Themes</Link></li>
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
