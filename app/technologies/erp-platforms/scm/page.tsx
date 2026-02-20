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
             <Image src="/images/scm.jpg" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
                <div className="banner_heading">
                   <div className="container">
                    <h2>SCM</h2>
                     <p>	</p>
                  </div>
                </div>
      </div> 
  <div className="container">
   	
      <div className="row">
                <div className="col-md-9">
          <div className="left_panel">
            <div className="inner_devolopment">
              <h2>ERP Platforms{" >>"} SCM</h2>
              <h4>Simplified Supply Chain Management for Increased Business Agility</h4>
              <p>Advanced Supply Chain Management (SCM) solutions from CybateSoft are integrated with ERP platforms such as Oracle, SAP, and Dynamics 365. From procurement to customer delivery, our supply chain management (SCM) systems make sure your whole supply chain runs smoothly.</p>
                <p>We prioritize efficiency, accuracy, and visibility at every stage of the supply chain. We revolutionize the way companies handle distribution and logistics by utilizing real-time data, automation, and analytics.</p>
            </div>
          
                    <div className="row">
                    <div className="col-md-7 col-sm-12">
                    
          <div className="inner_devolopment">
            <h3>Our SCM Services</h3>
          <ul className="listing_content">
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Procurement Management: Make vendor sourcing and purchase processes simpler.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Control inventory and warehouse operations to guarantee ideal stock levels.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Logistics & Distribution: Easily handle order fulfillment and transportation.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Demand Forecasting: Use data-driven analytics to forecast market demands.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Production Scheduling: Cut down on delays and maximize manufacturing cycles.</li>
            <li><i className="fa lccr fa-chevron-circle-right"></i>  Supplier Cooperation: Establish open, effective relationships with suppliers.</li>
                        </ul>
          </div>
                    </div>
                     <div className="col-md-5 col-sm-12">
            <div className="img-btn_center">
                      <Image src="/images/scm_logo.png" alt="" className="img-responsive" width={261} height={209}/>
            <div className="img_btn_link">
            <Link href="/portfolio-php" className="btn btn-success ">View Portfolio</Link>
            </div>
            </div>
                     </div>
                     </div>

            <div className="inner_devolopment">
          <h3>Future-Ready Supply</h3>
          <div className="inner_devolopment2">
                        <div className="row">
                        <div className="col-md-6">
                        <ul className="listing_content">
                        <p>Your supply chain gains resilience, agility, and intelligence from CybateSoft's ERP-based supply chain management solutions, enabling your company to operate more quickly and intelligently.</p>
                        <p>CybateSoft empowers your supply chain with ERP-driven intelligence, enhancing resilience, agility, and real-time responsiveness. Our tailored solutions streamline operations, reduce disruptions, and enable faster, smarter decision-making across every link in your supply network. With CybateSoft, your business stays competitive, connected, and ready for what’s next.</p>
                    </ul></div>
                        <div className="col-md-6">
                        <ul className="listing_content">
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Procurement Management</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Inventory & Warehouse Control</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Logistics & Distribution</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Supplier Collaboration</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Demand Forecasting</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Production Scheduling</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Order Management</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Real-Time Tracking</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Quality Assurance</li>
                        </ul></div>
            
            
            
            
                        </div>
          </div>

          <div className="img-btn_center">
                      <Image className="img-responsive wd100" src="/images/scm1.png" width={848} height={132} alt="templates"/>
            <div className="img_btn_link2">
            <Link href="/portfolio-php" className="btn btn-success ">View Portfolio</Link>
            </div>
            </div>
           
          </div>
                    <div className="inner_devolopment">
                        <h3>Unified ERP Solutions</h3>
          <div className="inner_devolopment2">
                        <div className="row">
                        <div className="col-md-6">
                        <ul className="listing_content">
            <p>CybateSoft delivers customized ERP solutions that streamline workflows, enhance data accuracy, and unify business functions under one integrated system. Our tailored approach ensures scalability, efficiency, and performance — empowering businesses to make informed decisions and achieve sustainable growth with ease.</p>
            </ul></div>
                        <div className="col-md-6">
                        <ul className="listing_content">
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  IoT Integration</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Cloud SCM Deployment</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Compliance Management</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Multi-Channel Fulfillment</li>
                        </ul></div>
            
            
            
            
                        </div>
          </div>
          <div className="img-btn_center">
                      <Image className="img-responsive wd100" src="/images/scm2.png" width={848} height={132} alt="templates"/>
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
							<li role="presentation" ><Link href="/technologies/erp-platforms/dynamics-365"> Dynamics 365 F&O</Link></li>
							<li role="presentation" className="active"><Link href="/technologies/erp-platforms/scm">SCM</Link></li>
							<li role="presentation"><Link href="/technologies/erp-platforms/power-platform">Power Platform</Link></li>
							</ul>
					</div>
          
         
        </div>	  
      </div>	  
    </div>
    
           
        </div>
    
   
    
    </>
  )
}
