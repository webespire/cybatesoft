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
					 <Image src="/images/company profile.jpg" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
							<div className="banner_heading">
							<div className="container">
								<h2>Offshore Staffing</h2>
								<p></p>
								</div>
							</div>
				</div>
	<div className="container">
	
			<div className="row">
				<div className="col-md-9">
					<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Offshore Staffing</h2>
							<p>Offshore staffing is very much in vogue and is the latest fad. It refers to a procedure that is analogous to recruiting someone in the local area, but for the fact that, the process of recruitment, infrastructure setup, and overseeing of actual operations is actually done by an offshore service provider.</p>
                            
                            <div className="img-btn_center pull-right right_img">
                     	<Image src="/images/Offshore Staffing.png" alt="Offshore Staffing" className="img-responsive"  width={260} height={209}/>
						<div className="img_btn_link">
						<Link href="/portfolio-php" className="btn btn-success ">View Portfolio</Link>
						</div>
						</div>
                            
                            
						<p>We  offers you with ideal solutions to embark upon the demanding aspects of finding various software development resources for diverse needs. Our offshore staffing service, in other words, our Staff Augmentation model is packed with an 
						assortment of advantages and opportunities. This opportunity is the most appropriate for those companies, individuals, IT consultants who are looking out for expert, technically experienced, qualified & knowledgeable resources.</p>
						<p>A devoted team of offshore software development is ideal for the clients who have projects that have critical considerations of scope and time. we hands out to you quality IT resources working offshore for your organization just like 
						an extension of your in-house teams. Our world-className infrastructure and facilities guarantees you excellent staffing. By making good use of secured internet technologies, protected encryption techniques, and virtual private networks, we enable offshore staff to work directly under the systems of your office. We make good use of web-based tools to run projects, everyday jobs, and documents between your supervisors and members of the offshore team.</p>
				</div>
						
				</div>
		
				<div className="inner_devolopment">
				<h3>We provides the following facilities under its offshore staffing:</h3>
							<div className="row">
						
                        <div className="col-md-6">
                        <ul className="listing_content">
						
                        <li><i className="fa lccr fa-chevron-circle-right"></i> System Analysis</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Web Development and Design</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i> Technical Writing</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>Network Engineering and Administration</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>Project Management</li>
						
                        </ul></div>
						<div className="col-md-6">
                        <ul className="listing_content">
						
                        <li><i className="fa lccr fa-chevron-circle-right"></i>Software/Product Development</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>Testing and Quality Assurance</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Technical Support</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i> Product Reengineering</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Database Design and Administration</li>
                        
                        </ul></div>
						</div>
						<p>Cybatessoft provides skilled offshore staffs that possess both experience and expertise to work for your team. Offshore staffing is a successful business solution; it helps your businesses cut down on costs without any compromise with the quality of work.</p>
					</div>
                    <div className="img-btn_center">
                     	<Image className="img-responsive wd100" src="/images/Php.jpg" alt="templates" width={848} height={132}/>
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
							<li role="presentation"><Link href="/zend-framework-development">Zend framework Development</Link></li>
							<li role="presentation"><Link href="/python-web-development">Python Web Development</Link></li>
							<li role="presentation"><Link href="/search-engine-optimization" >Search Engine Optimization</Link></li>
							<li role="presentation"><Link href="/testing-and-qa-services">Testing and QA Services</Link></li>
							<li role="presentation" className="active"><Link href="/offshore-staffing" >Offshore Staffing</Link></li>
							</ul>
					</div>
					
					
				</div>	  
			</div>	  
		</div>
		
           
        </div>
		
       
    </>
  )
}
