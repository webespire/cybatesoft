import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
						 <Image src="/images/custo.png" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
								<div className="banner_heading">
									 <div className="container">
									  <h2>Customization</h2>
									   <p>	</p>
									</div>
								</div>
			</div> 
	<div className="container">
			
			<div className="row">
								<div className="col-md-9">
					<div className="left_panel">
						<div className="inner_devolopment">
							<h2>ERP Solutions {">>"} Customization</h2>
							<h4>Clever Answers to Changing Business Requirements</h4>
							<p>With the help of CybateSoft's ERP Customization Services, companies can create ERP systems that precisely match their particular workflows, departmental objectives, and market demands. With sophisticated configuration, module integration, and automation, our professionals assist you in realizing the full potential of your ERP platform. Our area of expertise is providing ERP solutions that improve operational control, facilitate communication, and offer useful business intelligence to help make better decisions.</p>
									
						</div>
					
                    <div className="row">
                    <div className="col-md-7 col-sm-12">
                    
					<div className="inner_devolopment">
					<h3>Our Customization Services</h3>
					<ul className="listing_content">
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Tailored Module Development: We adapt ERP modules for supply chain, sales, inventory, HR, and finance to precisely match the procedures used by your company.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Workflow Automation: Use the approval workflows and automation features integrated into your ERP to streamline business operations.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Integration with Current Systems: To guarantee smooth data flow and performance, link cloud services, third-party tools, and legacy systems.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Role-Based Access & Security: Personalized dashboards, permissions, and reports increase efficiency and compliance.</li>
                    </ul>
					</div>
                    </div>
                     <div className="col-md-5 col-sm-12">
						<div className="img-btn_center">
                     	<Image src="/images/manifacturing.png" alt="" className="img-responsive" width={261} height={209}/>
						<div className="img_btn_link">
						<Link href="/portfolio" className="btn btn-success ">View Portfolio</Link>
						</div>
						</div>
                     </div>
                     </div>
                     
					<div className="inner_devolopment">
					<h3>Intelligent Business System</h3>
					<div className="inner_devolopment2">
                        <div className="row">
                        <ul className="listing_content">
                        <p>Businesses can build interconnected digital ecosystems that increase engagement and revenue with CybateSoft's Web & Mobile Development platform. To guarantee that your apps operate flawlessly in real-world scenarios, we concentrate on providing responsive design, strong functionality, and mobile optimization.</p>
                        </ul>
						
                        </div>
					</div>
					<div className="img-btn_center">
                     	<Image className="img-responsive wd100" src="/images/wa1.png" alt="templates" width={848} height={132}/>
						<div className="img_btn_link2">
						<Link href="" className="btn btn-success ">View Portfolio</Link>
						</div>
						</div>
					 
					</div>
                    <div className="inner_devolopment">
					<h3>Key Features Include</h3>
					<div className="inner_devolopment2">
                        <div className="row">
                        
                        <ul className="listing_content">
                        <p>CybateSoft makes sure your systems function as a cohesive unit, whether that means connecting cloud services, integrating enterprise apps, or creating unique API solutions. In addition to meeting your company's present needs, we provide integration strategies that set it up for future technological demands.</p>
						<p>For integration services that link your technology stack and provide quantifiable business benefits, collaborate with CybateSoft. Allow us to revolutionize your business processes with customized integration solutions that boost productivity, foster better teamwork, and promote long-term expansion.</p>
                        </ul>
                        
                        <ul className="listing_content">
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Configuring an ERP system from start to finish</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Making a custom dashboard to improve visibility</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Integration of CRM, SCM, and HRM tools via API</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Support for various ERP platforms, including SAP, Oracle, and Dynamics 365</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Technical assistance and ongoing development are necessary for long-term business effectiveness.</li>
                        </ul>

						<p>CybateSoft makes sure your ERP expands with your company rather than against it.</p>
						
						
						
						
                        </div>
					</div>
					<div className="img-btn_center">
                     	<Image className="img-responsive wd100" src="/images/do2.png" alt="templates" width={848} height={132}/>
						<div className="img_btn_link2">
						<Link href="/portfolio" className="btn btn-success ">View Portfolio</Link>
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
							<li role="presentation"><Link href="/services/erp-solutions/dynamics-365-implementation"> Dynamics 365 Implementation</Link></li>
							<li role="presentation"><Link href="/services/erp-solutions/integration">Integration</Link></li>
							<li role="presentation" className="active"><Link href="/services/erp-solutions/customization">Customization</Link></li>
							</ul>
					</div>
					
					
				</div>	  
			</div>	  
		</div>
		
           
        </div>
		
       
    </>
  )
}
