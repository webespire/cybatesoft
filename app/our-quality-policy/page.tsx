import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function page() {
  return (
    <>
      <div className="clearfix"></div>
	<div className="inner_page_banner">
				
					 <Image src="/images/quality.jpg" className="img-responsive banner_img" width={1351} height={120} alt="Customization" />
						 
							<div className="banner_heading">
							<div className="container">
								<h2>Our Quality Policy</h2>
								<p></p>
								
								</div>
							</div>							
						 					
					 				
				
				</div>		
			 
	<div className="container">
			
			<div className="row">
			
           
   
   <div className="col-md-9">
					<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Our Quality Policy</h2>
						</div>
					</div>
                   
                    
                    
                    <div className="inner_page_pad">
					<div className="inner_devolopment">
					
					
					<p>CybateSoft brings to the global software experience in Education, Energy & Utilities, Healthcare, Media & Entertainment, Telecom, Real estate, Logistics industries and allows its clients to significantly improve the business value of their enterprise.</p>
                        <h3>CybateSoft – Services:</h3>
					<p>The various offshore IT outsourcing services offered by Cybatesoft.</p>
					
					<h3>Website Application Development:</h3>
					<p>The company specializes in creating varied and specific software applications as per the clients' requirements and maintains them. We develop web based office applications that are useful for 
						various businesses in their regular operations and activities.</p>
				<h3>Content Management System:</h3>
					<p>We are the first name that comes to the minds of our clients' when they require controlling and managing the content on their websites. We help them with a range of CMS and CRM systems, and let them easily add, remove or edit images and content, whenever required.</p>
					<h3>Mobile Application Development:</h3>
					<p>We are pioneers in developing mobile applications on several platforms. All the services offered are quality assured and, at the best affordable prices in the industry.</p>
					
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
							<li role="presentation" ><Link href="/why-cybatesoft">Why CybateSoft</Link></li>
							<li role="presentation" className="active"><Link href="/our-quality-policy"> Our Quality Policy</Link></li>
							
						</ul>
					</div>
					
					
				</div>	  
			</div>	  
		</div>
		
           
        </div>
		
        
	

    </>
  )
}
