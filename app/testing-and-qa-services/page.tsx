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
					 <Image src="/images/seo.jpg" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
							<div className="banner_heading">
							<div className="container">
								<h2>Testing and QA Services</h2>
								<p></p>
								</div>
							</div>
				</div>
	<div className="container">
			
			<div className="row">
				<div className="col-md-9">
					<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Testing and QA Services</h2>
							<p>Provides a holistic approach of testing and quality assurance to help you build a product or service through accelerated testing methods in order to reduce errors and defects in software that can affect your operations. In a high edge competitive atmosphere, it is very important to bring about a product or service with assured quality.</p>
                             <div className="img-btn_center pull-right right_img">
                     	<Image src="/images/Testing and QA Services.png" width={260} height={209} alt="Testing and QA Services" className="img-responsive"/>
						<div className="img_btn_link">
						<Link href="/portfolio-php" className="btn btn-success ">View Portfolio</Link>
						</div>
						</div>
                            
                             <p>Testing helps to 
							assess, validate and verify the features of the given software that keeps an eye on the input and output functionality. In many companies the creditability, revenue generation and growth of the business is driven by the software testing process with incorporated quality assurance. Quality assurance is a systematic approach to check if the product designed, meets 
                           
                            
                            
							the specific requirements of the customer or not. Using independent leading testing and QA techniques to test the functionality, performance and security of the service or product can eliminate defects in the early stage of the development. Quality assurance and testing are designed to provide better functionality of a service or product to increase customer confidence and company creditability.</p>
					
						<p>A good testing and QA services ensures to minimize the cost, mitigate risk, augment user experience levels by offering a creative solutions to improve product life cycle.</p>
					</div>
						
				</div>
		
				<div className="inner_devolopment">
				<h3>Testing services include:</h3>
							<div className="row">
						
                        <div className="col-md-6">
                        <ul className="listing_content">
						
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Usability Testing</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Nonfunctional Testing</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i> Specialized Testing</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i> Mobile Application Testing</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>Testing-as-a-Service</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i> Integration Testing</li>
                        
                        </ul></div>
						<div className="col-md-6">
                        <ul className="listing_content">
						
                        <li><i className="fa lccr fa-chevron-circle-right"></i>Functional Testing</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  System Testing</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Localization testing</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>  Creating a test script and data</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Acceptance testing</li>
                        
                        </ul></div>
						</div>
						<p>Use leading edge quality management solutions in meeting the specified requirements of the customers by developing agile techniques that helps to bring about an error-free functionality of a service. By building a new service or changing the existing one, we help you to frame successful flawless features with high quality applications that reduce rework and test cycles at low cost.</p>
						</div>
                        <div className="img-btn_center">
                     	<Image className="img-responsive wd100" src="/images/Php.jpg" width={848} height={132} alt="templates"/>
						<div className="img_btn_link2">
						<Link href="/portfolio-php" className="btn btn-success ">View Portfolio</Link>
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
							<li role="presentation" ><Link href="/web-design-branding"> Web Design and Branding</Link></li>
							<li role="presentation" ><Link href="/php-web-development">PHP Web Development</Link></li>
							<li role="presentation" ><Link href="/zend-framework-development">Zend framework Development</Link></li>
							<li role="presentation" ><Link href="/python-web-development">Python Web Development</Link></li>
							<li role="presentation" ><Link href="/search-engine-optimization" >Search Engine Optimization</Link></li>
							<li role="presentation" className="active"><Link href="/testing-and-qa-services">Testing and QA Services</Link></li>
							<li role="presentation"><Link href="/offshore-staffing" >Offshore Staffing</Link></li>
							</ul>
					</div>
				
				</div>	  
			</div>	  
		</div>
		
           
        </div>
		
        
		
   </>
  )
}
