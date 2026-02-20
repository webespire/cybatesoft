import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function page() {
  return (
   <>
     <div className="clearfix"></div>
	<div className="inner_page_banner">
				
					 <Image src="/images/company profile.jpg" className="img-responsive banner_img" width={1351} height={120} alt="Customization" />
						 
							<div className="banner_heading">
							<div className="container">
								<h2>Why CybateSoft</h2>
								<p>	</p>
								
								</div>
							</div>							
						 					
					 				
				
				</div>		
			 
	<div className="container">
		
			<div className="row">
			
           
   
   <div className="col-md-9">
					<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Why CybateSoft</h2>
						</div>
					</div>
                   
                    
                    
                    <div className="inner_page_pad">
					<div className="inner_devolopment">
					
					
					<p>CybateSoft works on offshore products and outsourcing of software development. Innovation and speedy implementation are the aspects that the company believes in, and accordingly, work on 
						projects. The company employs a pool of strong and experienced developers, designers and analysts, who carry out their respective tasks with a wide range of skill sets.</p>
				
					
                        <div className="row">
						<p><b>&nbsp;&nbsp;&nbsp;&nbsp;We have expertise in the fields shown as under:</b></p>

                        <div className="col-md-6">

                        <ul className="listing_content">

                        <li><i className="fa lccr fa-chevron-circle-right"></i>Content Management System</li>

                        <li><i className="fa lccr fa-chevron-circle-right"></i>E-commerce Development</li>

                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Website Application Development</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>Mobile Application Development</li>

                        <li><i className="fa lccr fa-chevron-circle-right"></i>Testing</li>

                        <li><i className="fa lccr fa-chevron-circle-right"></i> QA Services</li>
						 
						 </ul></div>
						 </div>

					<p>CybateSoft works as a reliable partner to all its clients and remains successful, and lives up to its commitment. The experienced teams put their focus on the project and strive in completing it while 
						helping clients in accomplishing their business goals. They listen, understand your requirements, and work accordingly, throughout the process. The clients are free to communicate with the developers 
							whenever necessary, regarding any new ideas or changes that needed to be put into the existing plan, and can be contacted by way of phone, email, or instant messaging.
					</p>
					
					
					<p>We believe in simplicity and thus, believe in using simple yet advanced strategies that lead us to success. We are a brand within, whom the existing clients approach and opt for our services. We not 
						just believe in innovation but follow the same by combining effectiveness and reliability, while partnering with clients.
					</p>
				
					<p>The team of developers never compromise with the quality of the work. While offering services at rates that are affordable in the industry. Client and customer services are available all the time thus, enabling you to contact the representatives, whenever required
					</p>
					
					
					</div>
                    </div>
					
					
				
					
									
				</div>
   
   
			<div className="col-md-3">
				<div className="right_panel">
					<div className="right_panel_heading">
						<h3>Company</h3>
					</div>
					<div className="programming_platforms_list">
						<ul className="nav nav-pills nav-stacked " id="tab">
							<li role="presentation">
							<Link href="/who-we-are"> Who We are</Link></li>
							<li role="presentation" >
							<Link href="/our-work-process" >Our Work Process</Link></li>
							<li role="presentation"  ><Link href="/faqs">FAQs</Link></li>
							<li role="presentation" className="active"><Link href="/why-cybatesoft">Why CybateSoft</Link></li>
							<li role="presentation"><Link href="/our-quality-policy"> Our Quality Policy</Link></li>
							
						</ul>
					</div>
					
					
				</div>	  
			</div>	  
		</div>
		
           
        </div>
		
        
   </>
  )
}
