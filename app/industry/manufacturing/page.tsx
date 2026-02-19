import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function page() {
  return (
    <>
     <div className="clearfix"></div>
			<div className="inner_page_banner">
						 <Image src="/images/manu.png" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
								<div className="banner_heading">
									 <div className="container">
									  <h2>Manufacturing</h2>
									</div>
								</div>
			</div> 
	<div className="container">
			
			<div className="row">
								<div className="col-md-9">
					<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Industry {">>"} Manufacturing</h2>
							<h4>Using Manufacturing ERP Solutions to Enhance Productivity, Quality, and Efficiency</h4>
                            <p>Businesses can integrate production, inventory, finance, and quality control into a single, intelligent system with CybateSoft's Manufacturing ERP Solutions. Our ERP solutions enable manufacturers to satisfy consumer demands in a cutthroat market by increasing operational effectiveness, cutting expenses, and guaranteeing superior product quality.</p>
                            <p>CybateSoft is aware that manufacturing is a complicated process that necessitates accurate planning, real-time data, and smooth integration. Our ERP systems are customized to meet the requirements of every manufacturer, offering total production line visibility and facilitating astute decision-making at every turn.</p>
                        </div>
					
                    <div className="row">
                    <div className="col-md-7 col-sm-12">
                    
					<div className="inner_devolopment">
						<h3>Our Manufacturing ERP Solutions Services</h3>
					<ul className="listing_content">
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Production Scheduling & Planning: Use cutting-edge planning tools to increase production efficiency.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Inventory and Resource Management: Keep your stock levels at ideal levels and efficiently manage your resources.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Quality Control & Compliance: Use automated quality checks to guarantee high standards.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Cost tracking and financial management: keep an eye on manufacturing expenses and boost revenue.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Predictive Maintenance: Use AI-powered maintenance forecasts to minimize downtime.</li>
						</ul>
					</div>
                    </div>
                     <div className="col-md-5 col-sm-12">
						<div className="img-btn_center">
                     	<Image src="/images/manifacturing.png" alt="" className="img-responsive" width={260} height={209}/>
						<div className="img_btn_link">
						<Link href="/portfolio-php" className="btn btn-success ">View Portfolio</Link>
						</div>
						</div>
                     </div>
                     </div>

					  <div className="inner_devolopment">
					<div className="inner_devolopment2">
                        <div className="row">
                        <div className="col-md-6">
                        <ul className="listing_content">
                        <p>Manufacturing ERP solutions from CybateSoft turn operations into a competitive edge. Our systems help manufacturers stay ahead in a competitive market by improving production timelines, maintaining product quality, and increasing operational agility.</p>
                    </ul></div>
                        <div className="col-md-6">
                        <ul className="listing_content">
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Planning and Scheduling for Production</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Management of Inventory and Resources</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Assurance of Quality</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Expense Control</li>
                        </ul></div>
						
						
						
						
                        </div>
					</div>

					<div className="img-btn_center">
                     	<Image className="img-responsive wd100" src="/images/Manifacturing2.png" alt="templates" width={848} height={132}/>
						<div className="img_btn_link2">
						<Link href="/portfolio-php" className="btn btn-success ">View Portfolio</Link>
						</div>
						</div>
					 
					</div>
                    <div className="inner_devolopment">
					<div className="inner_devolopment2">
                        <div className="row">
                        <div className="col-md-6">
                        <ul className="listing_content">
						<p>CybateSoft’s manufacturing ERP solutions are built to streamline operations and drive efficiency across the production lifecycle. By integrating automation tools, advanced analytics, and industry-specific features, we help manufacturers optimize workflows—from raw material acquisition to production scheduling and quality assurance. Our systems are designed to enhance visibility, reduce costs, and support scalable growth in a competitive market.</p>
                        
                        </ul></div>
                        <div className="col-md-6">
                        <ul className="listing_content">
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Tracking Production in Real Time</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Predictive Maintenance with IoT Integration</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Performance Optimization</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Ongoing Assistance</li>
                        </ul></div>
						
                        </div>
					</div>
					<div className="img-btn_center">
                     	<Image className="img-responsive wd100" src="/images/Manifacturing1.png" alt="templates" width={848} height={132}/>
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
                    <ul className="nav nav-pills nav-stacked" id="tab">
                        <li role="presentation"><Link href="/industry/automotive"> Automotive</Link></li>
                        <li role="presentation"><Link href="/industry/banking"> Banking</Link></li>
                        <li role="presentation"><Link href="/industry/consumer-packaged-goods"> Consumer packaged Goods</Link></li>
                        <li role="presentation"><Link href="/industry/e-commerce"> E-Commerce</Link></li>
                        <li role="presentation"><Link href="/industry/education-publishing"> Education Publishing</Link></li>
                        <li role="presentation" className="active"><Link href="/industry/manufacturing"> Manufacturing</Link></li>
                        <li role="presentation"><Link href="/industry/retail"> Retail</Link></li>
                        <li role="presentation" ><Link href="/industry/travel-hospitality"> Travel & Hospitality</Link></li>
                    </ul>
                </div>
					
				
				</div>	  
			</div>	  
		</div>
		
           
        </div>
		
        
	
    </>
  )
}
