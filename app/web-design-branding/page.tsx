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
						 <Image src="/images/website design.JPG" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
								<div className="banner_heading">
									 <div className="container">
									  <h2>Web Design & Branding</h2>
									   <p>	</p>
									</div>
								</div>
			</div> 
	<div className="container">
	
			<div className="row">
								<div className="col-md-9">
					<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Web Design & Branding</h2>
							<h3>Strategic Design That Gets Results</h3>
							<h4>Comprehensive approach for Logo Design, Web Design and Print Designs.</h4>
							<p>Your brand is the sum of how and what you convey to your targeted media or audience (customers, clients, patients, members).<br/>
							 Cybatesoft specializes in brand development – from the creation of the brand image with logo design to corresponding print and website development and design. Let us be your brand specialists!</p>
									
						</div>
					
                    <div className="row">
                    <div className="col-md-7 col-sm-12">
                    
					<div className="inner_devolopment">
					<h3>Logo Design & Branding</h3>
					<h5>Distinguish your business with professional logo design and branding.</h5>
					<p>A strong brand image starts with a logo. Every reputable business has a logomark that symbolizes its unique value in the marketplace.<br/>
					
					A logo becomes the seed of your branding, and is included on every piece of web and print design created to represent your business or organization.
					</p>
					</div>
                    </div>
                     <div className="col-md-5 col-sm-12">
						<div className="img-btn_center">
                     	<Image src="/images/logos.png" alt="" className="img-responsive" width={260} height={209}/>
						<div className="img_btn_link">
						<Link href="/portfolio-php" className="btn btn-success ">View Portfolio</Link>
						</div>
						</div>
                     </div>
                     </div>
                     
					<div className="inner_devolopment">
					<h3>Web Design</h3>
					<div className="inner_devolopment2">
                        <div className="row">
                        <div className="col-md-6">
                        <ul className="listing_content">
                        <p><strong>Tick-tock.</strong>You have 5 seconds to keep a new visitor on your website. We’re here to make sure your visitors not only stay longer, but also turn into customers.</p>
						<p>Web design is an essential part of a company or organization’s branding. Whether it’s a storefront, or a corporate site, your internet presence should empower your business.</p>
                        </ul></div>
                        <div className="col-md-6">
                        <ul className="listing_content">
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Responsive Web Design</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  HTML5 + CSS3 Development</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Magento Theme Design</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  WordPress Theme Design</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Joomla Theme Design</li>
						 <li><i className="fa lccr fa-chevron-circle-right"></i>  Social Media Landing Pages</li>
                        </ul></div>
						
                        </div>
					</div>
					<div className="img-btn_center">
                     	<Image className="img-responsive wd100" src="/images/templates.jpg" alt="templates" width={848} height={132}/>
						<div className="img_btn_link2">
						<Link href="/portfolio-php" className="btn btn-success ">View Portfolio</Link>
						</div>
						</div>
					 
					</div>
                    <div className="inner_devolopment">
					<h3>Web Design</h3>
					<div className="inner_devolopment2">
                        <div className="row">
                        <div className="col-md-6">
                        <ul className="listing_content">
                        <p>Your <strong>print marketing materials</strong> encompasses all of the collateral that lands in the hands of your potential clients, customers, or members. Make sure that they pass the test..</p>
						<p>Cybatesoft is ready to handle any of your print material needs.</p>
                        </ul></div>
                        <div className="col-md-6">
                        <ul className="listing_content">
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Business Cards</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Brochures</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Print Advertising</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Annual Reports</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Trade Show Displays</li>
						 <li><i className="fa lccr fa-chevron-circle-right"></i>  Direct Mailings and Newsletters</li>
						  <li><i className="fa lccr fa-chevron-circle-right"></i>  Post Cards and envelopes</li>
						  <li><i className="fa lccr fa-chevron-circle-right"></i>  Letterhead</li>
						  <li><i className="fa lccr fa-chevron-circle-right"></i>  Packaging</li>
						  <li><i className="fa lccr fa-chevron-circle-right"></i>  Catalogs</li>
						
                        </ul></div>
						
						
						
						
                        </div>
					</div>
					<div className="img-btn_center">
                     	<Image className="img-responsive wd100" src="/images/print_images.jpg" alt="templates" width={848} height={132}/>
						<div className="img_btn_link2">
						<Link href="/portfolio-php" className="btn btn-success ">View Portfolio</Link>
						</div>
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
							<li role="presentation" className="active"><Link href="/web-design-branding"> Web Design and Branding</Link></li>
							<li role="presentation"><Link href="/php-web-development">PHP Web Development</Link></li>
							<li role="presentation"><Link href="/zend-framework-development">Zend framework Development</Link></li>
							<li role="presentation"><Link href="/python-web-development">Python Web Development</Link></li>
							<li role="presentation"><Link href="/search-engine-optimization" >Search Engine Optimization</Link></li>
							<li role="presentation"><Link href="/testing-and-qa-services">Testing and QA Services</Link></li>
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
